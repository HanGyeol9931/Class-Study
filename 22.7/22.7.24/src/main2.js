// express가 뭔가? NodeJS를 사용해서 쉽게
// 서버 구성을 할수 있게 만들어주는 클래스와 라이브러리
// 집합

// express 설치 명령어
// ---------------------------------
// npm i express
// ---------------------------------

// body -perser는
// 요청과 응답 사이에서 공통적인 기능을 해주는
// 미들웨어이다. 데이터를 body라는 객체 안에 담아서
// 요청 응답을 받을수 있게 해준다고 보면 된다.
// 설치 명령어
// ---------------------------------
// npm i body-parser
// ---------------------------------

const bodyParser = require("body-parser");
// express을 가져와서 변수에 담아줌
const express = require("express");
const fs = require("fs");
const ejs = require("ejs");

// ejs는 node.js와 express에서 많이 사용하고 있는 템플릿 엔진
// ejs는 우리가 쓰는 기존 html문법을 사용하면서 <% %>이런 문법을
// 사용해서 크게 벗어나지 않게 서버와 데이터를 사용할수 있는 장점이 있다.
// ejs 설치 명령어
// ----------------------------------------
// npm i ejs
// ----------------------------------------

// mysql
// 설치 명령어
// ----------------------------------------
// npm i mysql2
// ----------------------------------------

const mysql = require("mysql2");

const temp = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "99319931",
  database: "test5",
  multipleStatements: true,
});

console.log(ejs);

temp.query("SELECT * FROM porducts", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE porducts(id a INT,b INT AUTO_INCREMENT PRIMARY KEY(a,b),name VARCHAR(20),number VARCHAR(20),series VARCHAR(20))";
    temp.query(sql);
  } else {
    console.log(res);
  }
});

// fs는 파일 읽기 쓰기를 쉽게 도와주는 모듈

// mysql

// express 함수를 실행해서 반환 값을 app에 담아줌
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
  // extended:false
  // true : express에 기본 내장된 쿼리 스트링 모듈을 사용한다.
  // false : 쿼리 스트링 모듈의 기능이 좀더 확장된 qs 모듈을 사용한다.
);

// 포트로 정해줌
const PORT = 4000;

// app.get();
// app.post();

// app.get('요청 url')
app.get("/", (req, res) => {
  // fs 모듈로 파일을 읽어온다
  //   readFile파일을 읽어오는 함수
  // 매개변수 첫번째 파일의 경로 이름
  // 두번째는 인코딩 방식
  // 세번쨰는 콜백 함수
  fs.readFile("src/list.html", "utf-8", (err, data) => {
    temp.query("SELECT * FROM porducts", (err, result) => {
      // ejs render 함수로 해당 불러온 파일을 그려준다.
      // ejs 두번째 매개변수로 데이터를 전달할수 있다.
      res.send(
        ejs.render(data, {
          data: result,
        })
      );
    });
  });
});
app.get("/insert", (req, res) => {
  fs.readFile("src/insert.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.post("/insert", (req, res) => {
  const data = req.body;
  //  body객체 안에 from에서 보내준
  // 데이터는 input들의 name이 키값
  // 해당 input의 value값으로 전달 된다.
  //   const b="SET @CNT=0; UPDATE porducts SET id = @CNT = @CNT+1"

  const sql = "INSERT INTO porducts (name,number,series)VALUES(?,?,?)";
  temp.query(sql, [data.name, data.number, data.series], () => {
    //   url 경로를 redirect 함수의 매개변수 내용 경로로 이동한다.
    res.redirect("/");
  });
  //   console.log(data);
  //   res.send(data);
});
// app.get("/insert", (req, res) => {
//   res.send("list page");
// });

app.listen(PORT, () => {
  console.log("server start");
});

app.get("/delete/:id", (req, res) => {
  const d = req.params;
  const sql = "DELETE FROM porducts WHERE(id =? )";
  temp.query(sql, [d.id], () => {
    res.redirect("/");
  });
});
app.get("/delete/:id", (req, res) => {
  const sql = "DELETE FROM porducts WHERE id= ?;";
  const sql2 = "SET @CNT = 0;";
  const sql3 = "UPDATE porducts SET porducts.id = @CNT:=@CNT+1;";
  const sql4 = "ALTER TABLE porducts AUTO_INCREMENT = 0;";

  temp.query(sql, [req.params.id], () => {
    temp.query(sql2 + sql3 + sql4, () => {
      res.redirect("/");
    });
  });
});

app.get("/edit/:id", (req, res) => {
  fs.readFile("src/edit.html", "utf-8", (err, data) => {
    temp.query(
      "SELECT * FROM porducts WHERE id =?",
      [req.params.id],
      (_err, result) => {
        res.send(ejs.render(data, { data: result[0] }));
      }
    );
  });
});
app.post("/edit/:id", (req, res) => {
  const { name, number, series } = req.body;
  const sql = "UPDATE porducts SET name =?,number = ?,series =? WHERE id =?;";
  temp.query(sql, [name, number, series, req.params.id], () => {
    res.redirect("/");
  });
});

// app.get('/delete',(req,res)=>{
//     url요청에서 피라메터를 뽑을수 있는데
//     req요청의 값을 이용할수 있다.
//     parmas 매개변순
//     http://localhost:4000/delete/1 이런방식이면
// 
//     /delete/:id 이 주소에서 id가 params  키값이이고
// 
//     http://localhost:4000/delete/1 이런방식이면
//     {parmas:{id;1}}

//     console.log({req}
//     const sql ="DELETE FROM porduct WHERE id=?"
//     temp.query(sql,id,()=>{

//     })
// })

// res.redirect("/");
