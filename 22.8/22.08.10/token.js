// jwt, express, router
// jsonwebtoken 모듈 가져오기 
const jwt = require('jsonwebtoken');
// express 모듈 가져오기
const express = require('express');
// express 라우터 설정을 위해 express.Router() 반환값 변수에 담기 
const router = express.Router();
// dotenv모듈 가져오기
const dot = require('dotenv');
const fs = require('fs');
// env 사용 설정
dot.config();
const secretkey = process.env.SECRETKEY;

router.post('/login', (req, res)=>{
    const name = "cutecat";
    token = jwt.sign(
    {
        // 타입 설정
        type : "JWT", 
        name : name, 
    }, 
    secretkey,{
        // 토큰의 유효 시간
        expiresIn: "5m",
        // 토큰 발급한 사람
        issuer:"cutecat", 
    })
    req.session.token = token;
    let data = {
        msg: "토큰 발급됨", 
        token, 
    }
    fs.readFile('view/page2.html', "utf-8", (err, data)=>{
        res.send(data);
    });
});

// 설정한 라우터 내보내기
module.exports = router;

