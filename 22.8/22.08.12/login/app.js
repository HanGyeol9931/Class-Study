// 로그인 만들어보자

// express , dotenv, fs , jsonwebtoken , express-session, mysql2
// 개발용으로 nodemon
// 모듈 가져오기
const express = require("express")
// .env파일을 사용하기 위해 모듈 가져오면서 설정
const dot = require("dotenv").config();
// jsonwebtoken 모듈 가져오기
const jwt = require("jsonwebtoken")
// express-session 모듈가져오기
const session = require("express-session")
// mysql 모듈 가져오기
const mysql = require("mysql2");

const fs = require("fs")
const bcrypt = require("bcrypt");
// 처음부터 단방향으로 암호화 시켜주는 해시함수
// bcrypt는 값이 4등분 나눠진다.
// Algorithm : 알고리즘이 뭔지 "$2a$"는 bcrypt 라는 것이다.
// cost factor : 키 스트레칭한 횟수, 2^n으로 반복 시킨다. 10을 적으면 1024번
// salt : 128비트의 솔트 22자 base64로 인코딩
// hash : 솔트 기법과 키 스트레칭을 한 해쉬 값
// const pw = "1234"
// bcrypt.hash(pw,10,(err,data)=>{
//     console.log(data)
// })

// mysql 로컬 데이터 베이스 연결
// mysql createConnection함수를 이용해서 연결 및 생성
const client = mysql.createConnection({
    // host : "127.0.0.1",
    // 데이터 베이스 계정의 이름
    user : "root",
    // 계정의 비밀번호
    password : "99319931",
    // port:3306
    // 연결할 데이터 베이스의 이름
    database : "test7",
    // multipleStatements 다중 쿼리문을 사용할수 있도록 하는 옵션
    multipleStatements : true,
});

// // 서버 객체 생성
const app = express();
//  req.body 객체를 사용할거니까
// express 12버전쯤인가 버전업 되면서 express 설정으로 body 객체를 사용하게 설정할수 있다.
app.use(express.urlencoded({extended:false}))
// 세션도 사용할거니까
app.use(session({
    // 세션 발급할때 사용되는 키 노출되면 안되니깐 .env파일에 값을 저장해놓고 사용 process.env.SESSION_KEY
    secret : process.env.SESSION_KEY,
    // 세션을 저장하고 불러 올때 세션을 다시 저장할지 여부
    resave : false,
    // 세션에 저장할때 초기화 여부를 설정
    saveUninitialized : true ,

}))
app.get("/",(req,res)=>{
    fs.readFile("view/login.html","utf-8",(err,data)=>{
        // login.html 파일을 utf-8 인코딩 해서 send 함수를 이용해서 data를 보내줌 (응답해줌)
        res.send(data)
    })
});

app.get("/join", (req,res)=>{
    fs.readFile("view/join.html","utf-8",(err,data)=>{
        // join.html 파일을 utf-8 인코딩 해서 send 함수를 이용해서 data를 보내줌 (응답해줌)
        res.send(data)
    })
})
// const sql = 
// id는 AUTO_INCREMENT PRIMARY KEY 컬럼 값을 추가하지 않아도 자동으로 증가하는 숫자
// user_id 이름으로 컬럼을 만들고 VARCHAR(255) 문자 255까지 허용
// 'create table users (id INT AUTO_INCREMENT PRIMARY KEY , user_id VARCHAR(255),user_pw VARCHAR(255), refresh VARCHAR(255))';
// client 객체안의 query 함수로 쿼리문 실행
// client.query(sql);

app.post('/join',(req,res)=>{
    // console.log(req.body.userId);
    // req.body 객체에 있는 키값으로 변수에 할당
    // req.body.userId가 userId에 담긴다
    // req.body.userPw가 userPw에 담긴다
    // {안에 키값}객체 구문으로 묶어서 변수를 바등면 해당 객체의 키값의 벨류를 받을수 있다.
    const {userId , userPw} = req.body;
    // 쿼리문 INSERT INTO users = users테이블에  추가한다.
    // 값을 넣어서 추가하는 컬럼은 (user_id,user_fw) 두개
    // VALUES(?,?)값의 벨류는 옵션으로 전달한다
    bcrypt.hash(userPw,10,(err,data)=>{
        const sql = 'INSERT INTO users (user_id,user_pw)VALUES(?,?)'
        // VALUES(?,?) 순서대로 [userId,userPw] 값 전달
        client.query(sql,[userId,data],()=>{
            // redirect 함수로 매개변수 url해당 경로로 페이지를 이동시켜준다.
            res.redirect("/")
        });
    })
    // res.send(userId + userPw)
});
// 로그인
app.post('/login',(req,res)=>{
    const {userId,userPw} = req.body;
    // res.send(userId + userPw)
    // SELECT * FROM users = users 테이블을 찾고
    // WHERE user_id=? = users 테이블에서 user_id 값으로 검색
    
    const sql = "SELECT * FROM users WHERE user_id=?"
    client.query(sql,[userId],(err,result)=>{
        if(err){
            res.send("계정 없음")
        }else{
            // result[0]에 값이 있음녀 계정이 존재한다는 뜻 아니면 계정이 없다.
            // ?. 구문 뒤에 키값이 있는지 먼저 보고 값을 참조한다. 그래서 없으면 코드가 터지는 일(크래쉬)을 방지
            if(result[0]){
                bcrypt.compare(userPw,result[0]?.user_pw,(err,same)=>{
                    if(same){
                        const accessToken = jwt.sign({
                            // payload 값 전달할 값
                            userId : result[0].user_id,
                            mail : "dsgas@naver.com",
                            name : "cocoa"
                            },
                            // ACCESS_TOKEN 비밀키
                            process.env.ACCESS_TOKEN,
                            {
                                // 유효 기간 5초
                                expiresIn: "5s"
                            }
                        )
                    
                    const refreshToken = jwt.sign({
                        // payload 값 전달할 값
                        userId : result[0].user_id,
                    },
                    // REFRESH_TOKEN 비밀키
                    process.env.REFRESH_TOKEN,
                    {
                        expiresIn: "60s"
                    })
                    //  UPDATE users SET refresh = user 테이블의 refresh 값을 수정
                    //  WHERE user_id = ? = user_id 값으로 검색
                    const sql = "UPDATE users SET refresh=? WHERE user_id = ?"
                    client.query(sql,[refreshToken, userId])
                    //  세션에 accessToken 값을 access_token 키값에 벨류로 할당
                    req.session.access_token = accessToken;
                    //  세션에 refreshToken 값을 refresh_token 키값에 벨류로 할당
                    req.session.refresh_token = refreshToken;
                    res.send({access : accessToken, refresh : refreshToken})
                    }
                    else{
                        res.send("비밀번호 틀림")
                    }
                })
            }
            else{
                res.send("계정 없음")
            }
        }
        
    });
})
// 미들 웨어란
// 로그인을 해서 어서오세요 환영합니다 로그인이 유지되어 있는 페이지에 접속되고
// 로그인이 유지되고 있는 동안에만 동작해야하는 페이지들이 있는데. 로그인 유지를 확인하고 요청을 보내야 한다
// 어떻게 해야하나..
// 미들웨어란 간단하게 클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하는 중간(미들)에 목적에 맞게 처리해주는
// 통과하는 중간단계 미들웨어 함수이다. 요청의 응답에 도달하기 위해서 미들웨어를 통과해야지 응답까지 도달할수 있다.
// 중간에 문지기 얘의 허락을 맡야 지나갈수 있다. 액세스 권한
// req(요청)객체 , res(응답)객체 , next() 함수를 이용해서 통과 현재 요청을 넘길수 있다. 너 지나가 = next();
// 문지기 통과 next 지나가세요
// 요청을 처리하기 전에 중간에 기능을 동작시켜주는 애

// 매개 변수는 (요청 객체, 응답 객체, next 함수)
const middleware = (req,res,next) =>{
    const accesstoken = req.session.access_token;
    const refreshtoken = req.session.refresh_token;
    // const {access_token,refresh_token} = req.session;
    // access_token 값을 먼저 검증한다 유효기간이 끝나지 않았는지 썩지않았는지
    jwt.verify(accesstoken, process.env.ACCESS_TOKEN,(err,acc_decoded)=>{
        // 썩은 토큰 이면
        if(err)
        {
            // 여기로 로그인 페이지로 넘긴다던지
            // 404 500 에러 페이지를 만들어서 보여준다던지
            // 본인의 방향성으로 페이지 구성 하면된다.
            jwt.verify(refreshtoken,process.env.REFRESH_TOKEN,(err,ref_decoded)=>{
                    
                if(err){
                    res.send("다시 로그인 해주세요2")
                }
                else{
                    const sql = "SELECT * FROM users WHERE user_id = ?"
                    client.query(sql,[ref_decoded.userId],(err,result)=>{
                        if(err){
                            res.send("데이터 베이스 연결을 확인해 주세요")
                        }
                        else{
                            if(result[0].refresh == refreshtoken){
                                const accessToken = jwt.sign({
                                    userId : ref_decoded.userId
                                },process.env.ACCESS_TOKEN,
                                {
                                    expiresIn : "5s",
                                })
                                req.session.access_token = accessToken
                                console.log("나 실행됌")
                                // 다음 콜백 실행
                                next();
                            }
                            else{
                                res.send("다시 로그인 하세요3")
                            }
                        }
                    })
                }
            })
            
        }
        // 썩지 않고 좋은 토큰이면 
        else{ 
            next();
            // console.log(acc_decoded);
            // 다음번 콜백 함수 실행
            // next();  
        }
    })
};

// middleware 미들 웨어 함수에서 next() 함수를 사용하지 못하면
// 다음 콜백함수는 실행되지 않는다.
// 문지기한테 막힌거임
// next() 함수를 실행하면 다음 콜백으로 이동해서 요청 및 응답 작업 동작을 한다.
// 로그인이 되어있는 페이지만 요청과 응답을 할수 있게
app.get("/check", middleware, (req,res)=>{
    res.send("로그인 되어 있음")
})
app.listen(3000,()=>{
    console.log("서버가 열렸어요");
});