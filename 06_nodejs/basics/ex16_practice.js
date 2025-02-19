// 요청과 응답 연습문제 - DM제출
// 1.
//  '/users' 경로로 요청할 때 사용자의 이름을 받아서(라우트 파라미터 사용)
//  send()으로 'Hello, Hong!'문자열을 반환하는 API를 작성해 보세요.

// 2.
//  " /" 경로로 접속하면 send()로 "Welcome"을 반환하고
//  "/about" 경로로 접속하면 "This is the about page."텍스트를 반환하는 라우트 작성하세요.
// http://localhost:3000/

// 3.
//  사용하여 사용자가 입력한 숫자를 받아 해당 숫자의 제곱을 반환하는 API를 작성하세요.
//  (예) "/square/5" 경로로 접속하면 25를 반환합니다. (라우트 파라미터 사용)
// http://localhost:3000/square/9

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("welcome");
});

app.get("/users/:name", (req, res) => {
  res.status(200);
  res.send(`Hello, ${req.params.name}!`);
});

app.get("/about", (req, res) => {
  res.status(200);
  res.send("This is the about page.");
});

app.get("/square/:num", (req, res) => {
  res.status(200);
  res.json({ num: req.params.num ** 2 });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중...`);
});
