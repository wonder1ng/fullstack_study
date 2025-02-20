// `npm i mongoose cors`: mongoose: MongoDB 연결 모듈, cors: 크로스오리진 처리
// cors(Cross-Origin Resource Sharing): 교차 출처 리소스 공유
// sop(Same-Origin Policy): 동일 오리진만 허용하는 정책. img, link, script 제외

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const envPath = path.resolve(__dirname, ".env");

fs.readFile(envPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading .env file:", err);
    return;
  }

  // 파일 내용이 변수에 저장됩니다
  env = Object.fromEntries(
    data.split("\r\n").reduce((p, c) => [...p, [...c.split(" = ")]], [])
  );

  const app = express();
  const PORT = env.PORT || 5000;

  app.use(cors()); //모든 도메인(포트)의 요청을 허용(테스트서버용)
  app.use(express.json());

  // MongoDB Atlas 연결
  const MONGO_URI = env.MONGO_URI;
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

  // Mongoose 모델 정의
  const PostSchema = new mongoose.Schema(
    {
      title: String,
      content: String,
      comments: [{ content: String }],
    },
    { collection: "posts" } // 컬렉션 이름 강제 지정
  );

  //몽고DB 도큐먼트 객체
  //몽고DB에서는 모델 이름의 소문자+복수형(s)가 자동으로 컬렉션 이름이 됩니다.
  const Post = mongoose.model("Post", PostSchema);

  // 게시글 목록 조회
  app.get("/posts", async (req, res) => {
    try {
      //select * from posts
      //posts 콜렉션의 모든 도큐먼트리스트를 가져온다.
      const posts = await Post.find();
      console.log(posts);
      res.json(posts);
    } catch (err) {
      res.status(500).json({ errer: err.message });
    }
  });

  // 게시글 단건 조회
  app.get("/post:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post Not Found" });
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // 게시글 추가
  app.post("/posts", async (req, res) => {
    try {
      const { title, content } = req.body;
      // 새 도큐먼트 객체 만들기
      const newPost = new Post({ title, content, comments: [] });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // 게시글 수정
  app.put("/posts/:id", async (req, res) => {
    try {
      const { title, content } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true } //업데이트된 도큐먼트를 리턴한다.
      );
      if (!updatedPost) {
        return res.status(404).json({ message: "Post Not Found" });
      }
      res.status(201).json(updatedPost);
    } catch (err) {
      res.status(500).json({ errer: err.message });
    }
  });

  // 게시글 삭제
  app.delete("/posts/:id", async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json({ message: "Post Deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // 댓글 추가
  app.post("/posts/:id/comments", async (req, res) => {
    try {
      const { content } = req.body;
      const post = await Post.findById(req.params.id);
      if (!post) {
        res.status(404).json({ message: "Post Not Found" });
      }
      post.comments.push({ content });
      await post.save();
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  //서버 실행
  app.listen(PORT, () => {
    console.log(`블로그 REST API 서버(${PORT}) 실행중...`);
  });
});
