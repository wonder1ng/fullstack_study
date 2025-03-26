let express = require("express");
let app = express();
let mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

// //뷰엔진 설정하기
// app.set("view engine", "ejs");
// app.set("views", "./views");

// Middleware 설정
app.use(cors()); //모든 도메인에서 요청 허용(보안이 필요하지 않은 테스트 환경)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect mysql database
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "miniblog",
});

conn.connect();
conn.query("desc post", (error, results) => {
  if (error) {
    if (error.sqlMessage.indexOf("doesn't exist") > -1) {
      console.log(error.sqlMessage);
      let msg = conn.query(
        `
        create table post (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        content text NOT NULL,
        comments JSON)
        `,
        (error, results) => {
          if (error) throw error;

          return results;
        }
      );
      console.log(msg);
    } else throw error;
  }
  console.log("post table is exist!");
});

app.get("/", (req, res) => {
  return res.json({
    error: false,
    message: "Welcome to mini-blog node js.",
  });
});

// 📌 1. 게시글 목록 조회
app.get("/posts", async (req, res) => {
  conn.query("SELECT id, title FROM post", (error, results) => {
    if (error) throw error;

    let message = "";
    if (results === undefined || results.length == 0) {
      message = "post table is empty";
    } else {
      message = "Successfully retrived all post";
    }

    return res.json(results);
  });
});

// 📌 2. 특정 게시글 조회
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await conn.query(
      "SELECT * FROM post where id = " + String(req.params.id),
      // "SELECT * FROM post where id = ?",
      // [req.params.id],
      (error, results) => {
        if (error) throw error;

        return res.json(results[0]);
      }
    );

    // if (!post) return res.status(404).json({ message: "Post not found" });
    // res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 3. 새 게시글 작성
app.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body;
    await conn.query(
      `INSERT INTO post (title, content, comments) VALUES("${title}", "${content}", '[]')`,
      (error, results) => {
        if (error) {
          console.log(error);

          throw error;
        }

        return res.status(201).json(results);
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 4. 게시글 수정
app.put("/posts/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    await conn.query(
      `UPDATE post SET title = "${title}", content = "${content}" where id = ${req.params.id}`,
      (error, results) => {
        if (error) throw error;

        return res.status(201).json(results);
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 4. 게시글 삭제
app.delete("/posts/:id", async (req, res) => {
  try {
    await conn.query(
      `DELETE FROM post where id = ${req.params.id}`,
      (error, results) => {
        if (error) throw error;
      }
    );
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 5. 댓글 추가
app.post("/posts/:id/comments", async (req, res) => {
  try {
    const { content } = req.body;
    await conn.query(
      `UPDATE post SET comments = JSON_ARRAY_APPEND(comments, "$", "${content}") where id = ${req.params.id}`,
      (error, results) => {
        if (error) throw error;

        return res.json(results);
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
