// JWT는 뭘까
// JWT는 JSON WEB TOKEN의 줄임말

// JSON WEB TOKEN 은 웹표준으로 두 개체의 JSON객체를 사용해서 
// 정보를 안정성있게 전달해준다 

// JWT는 사용할 정보를 자체적으로 가지고 있다 (우리가 필요한 것들)
// JWT로 발급한 토큰은 기본 정보(유저의 정보 프로필 같은거)
// 그리고 토큰이 정상인지 검증된 토큰 signatute(서명)을 포함하고 있다

// 웹서버는 HTTP의 헤더에 넣어서 전달 가능 
// url params 같은 파라미터로도 전달 가능

// 주로 로그인이 정상적인지 회원 인증 권한에서 사용


// JWT는 유저가 로그인을 요청하면 서버는 유저의 정보를 가지고 
// 정상적인 유저면 토큰을 발급해서 전달해준다(입장권 예매표)
// 유저가 서버에 요청할 때마다 JWT를 포함해서 전달하면 서버가 클라이언트의 요청을 받을 때마다 
// 해당 토큰이 안 썩었는지 확인 후 착한 토큰이면 유저가 요청한 작업을 응답해준다 
// 서버는 유저의 세션을 유지할 필요가 없고 유저가 로그인 되었는지 확인할 필요가 없다 
// 요청했을 때만 토큰을 확인해서 처리하기 때문에 서버 자원을 아낄 수 있다 

// JWT를 쓰는 이유는 안정성 있게 정보를 주고 받을 수 있다는 장점이 있기 때문이다 
// JWT를 생성하면 JWT의 라이브러리가 자동으로 인코딩과 해싱 작업을 해준다 
// HMAC SHA256 인코딩 및 해싱 
// HMAC : 해싱 기법을 적용해서 메시지의 위변조를 방지하는 기법
// SHA256 : 임의의 길이 메시지를 256비트의 축약된 메시지로 만들어내는 해시 알고리즘

// JWT의 구조
// -----------------------------
// 토큰의 정보
// 알고리즘, 타입
header = {
    alg:"HS256", 
    typ:"JWT"
}
// 전달할 데이터
payload = {
    // 토큰의 제목
    sub : "3425432",
    // 유저이름
    name : "fkfkgkg",
    // 토큰이 발급된 시간 발급된지 얼마나 지났는지 
    lat : "32435889724387"
}

// signature = HMACSHA256(BASE64URL(header) + BASE64URL(payload));

// header : 타입과 알고리즘의 정보를 가지고 있고 
// payload : 유저의 정보들과 만료 기간이 포함된 객체를 가지고 있다 
// signature : header, payload를 인코딩하고 합쳐서 비밀키로 해쉬

// express, jsonwbtoken, nodemon, fs, body-parser

const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
// ▼이렇게 써도 됨
// const app = require('express')();

app.post('/login', (req, res)=>{
    // 로그인 하면 토큰 발급
    // 토큰을 만들어 보자 
    // 우리가 지금은 넘길 정보가 없으니까 변수로 만들기 
    // .env 파일을 쓰는 이유 데이터 유출을 막기 위헤 
    // .env 애플리케이션이 실행될 때 처음부터 특정 값을 넘길 변수를 저장해놓는다 

    const name = "totototo";
    const key = process.env.KEY;
    // jwt 토큰 생성 하는 함수 반환값 있음
    let token = jwt.sign(
        {
            // 타입 JWT임
            type: "JWT", 
            // 유저 이름
            name: name, 
        }, 
        // "fkjdlf",얘를 env에 써놨으니까 변수로 가져옴
        key,
        {
            // 토큰 유효 시간 만료될 시간, 5분
            expiresIn : "5m",
            // 토큰을 발급한 사람
            issuer : "나", 
        }
    );
    let data = {
        msg : "토큰 내용",
        token, 
    };
    res.send(JSON.stringify(data));
});

app.get('/', (req, res)=>{
    fs.readFile("index.html", "utf-8", (err, data)=>{
        res.send(data);
    })
});

app.listen(3000, ()=>{
    console.log('서버열림');
});

// .을 기준으로 header.payload.signature 나뉜거임