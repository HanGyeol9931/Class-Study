// express 모듈 사용
const express = require('express')
// fs 모듈 사용
const fs = require('fs')
// socketio 모듈 사용
const socketio= require('socket.io')

// 서버 객체 만들기
const app = express();

const PORT = 3000;

// 사용할 포트 변수에 바인딩(할당해 놓는다.)
const server = app.listen(PORT,()=>{
    console.log(PORT,'에 잘 열렸어요')
});

// socketio 생성 및 실행
const io =socketio(server);
app.get("/",(req,res)=>{
    fs.readFile('page2.html',(err,data)=>{
        res.end(data);
    });
});

// io.sockets.on("connection")  //클라이언트가 접속했을때
// io.sockets.on("disconnect")  //클라이언트가 종료 했을때
io.sockets.on("connection",(socket)=>{
    // 클라이언트에서 socket.emit("massage",(data);
    // 웹소켓에 연결되어있는 massage 이벤트를 실행시켜준다
    // 밑에 코드
    socket.on("message",(data)=>{
    // 여기
    io.sockets.emit('message',data);
    });
})
