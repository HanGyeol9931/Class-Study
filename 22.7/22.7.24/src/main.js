/* eslint-disable no-case-declarations */
// mysql 프로젝트에 연결

// mysql npm 설치 명령어
// npm i mysql2 

// mysql과 mysql2의 차이점
// mysql은 콜백 기반이기 때문에 promise를 사용하지 못하기 떄문에 mysql2를 쓸거고
// mysql을 보안한다하면 promise-mysql을 설치해서 사용해야 한다.
// mysql2는 promise를 지원하기 때문에 바로 써도된다.

// mysql require함수로 모듈을 가져온다.
const mysql = require("mysql2");

// createConnection의 옵션
// host : 연결할 호스트를 나타냄
// port : 연결할 포트
// user : 사용자의 이름
// password : 사용자 비밀번호
// database : 연결할 데이터 베이스 이름
// debug : 디버그 모드를 사용할 것인지

const temp = mysql.createConnection({
  user: "root",
  password: "99319931",
  database: "test3",
});
// database : 'test3' = test3 이름의 데이터 베이스를 사용하겠다.
// query함수의 첫번째 매개변수는 쿼리문을 입력해주고
// 두번쨰 매개변수는 콜백 함수 매개변수는 첫번째 쿼리 에러, 두번째 쿼리 결과
// 이후 등등..
temp.query("SELECT * FROM porducts", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE porducts(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),number VARCHAR(20),series VARCHAR(20))";
    temp.query(sql);
  } else {
    console.log(res);
  }
});

const http = require("http");

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  res.setHeader("Content-Type", "application/json", "charset=utf-8");
  //   요청된 url 확인
  // req.url

  // 요청된 method 확인
  // req.method

  // js 내용이 수정되었을때 자동으로 모니터링 해서 서버를 재시작 해주는 툴
  // nodemon 노드 모니터링
  // ------------------------------------------
  // 개발환경에서만 사용 할꺼니깐 -dev 붙여주고
  // npm install --save-dev nodemon
  // 터미널 창에서 직접 nodemon을 사용하려면 -g로 설치
  // npm install -g nodemon
  // ------------------------------------------
  const URL = req.url;
  switch (URL) {
    case "/":
      res.end("main page");
      break;
    case "/list":
      temp.query("SELECT * FROM porducts", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          // data에는 porducts 테이블의 안의 내용
          res.end(JSON.stringify(data));
        }
      });
      break;
    case "/add":
        // (name,number,series)VALUES(?,?,?) 작성하면 이렇게 벨류의 값을
        // 두번재 배열 타입의 매개변수로 추가할수 있다.
        const sql ="INSERT INTO porducts (name,number,series)VALUES(?,?,?)"
      temp.query(sql,["이름","123","123"])
      break;
    default:
      break;
  }
  console.log(req.url);
  //   res.write("123")
  //   res.end("456");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("post : ", PORT);
});
