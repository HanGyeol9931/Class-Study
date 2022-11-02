const express = require('express');
// express-session 모듈 가져오고
const session = require('express-session');
// session-file-store 모듈을 가져오면서 함수 실행
const FileStore = require('session-file-store')(session);

const app = express();
const page = require('./view/page');
const verify = require('./verify');
const createToken = require('./token');

// 설치할 모듈
// --------------------------
// npm i express-session
// 저장된 세션의 정보를 파일로 보기 위해 
// npm i session-file-store
// --------------------------

// 루트로 절대 경로 설정 
// app.use("/")와 같다 
// app.use("/shop", express.static(__dirname)) shop에서 뒤의 경로 쓴다는 뜻(?)
app.use(express.static(__dirname));

app.use(
    session({
        // 세션을 발급할 때 사용되는 키, 소스코드 노출 안되게 하자
        secret: "goyangeee",
        // 세션을 저장하고 불러올 때 다시 저장할지 여부
        resave : false,
        // 세션에 저장할 때 초기화 여부
        saveUninitialized : true,
        // 저장소를 만들지 여부 
        store : new FileStore(), 
    })
);

// 앞에 url 있으면 해당 url요청에서 사용할 것이라는 뜻
// 모든 요청에서 사용
app.use(page);
app.use(createToken);
app.use("/userView", verify);

app.listen(3002, ()=>{
    console.log('서버 열림');    
});

