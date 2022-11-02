// 채팅방 만들기
// 방개념

// 사용할 것들 
// express, socket.io , fs ,nodemon

// package.json 만드는 명령어
// npm init -y 

const express = require("express")
const socketio = require("socket.io")
const fs = require("fs")

const app = express()
const PORT = 3000;
const server = app.listen(PORT,()=>{
    console.log(PORT, "번 포트 연결")
})
// -------------------------
// socketio 생성 및 실행
// -------------------------

const io = socketio(server);
//  "/socket.io/socket.io.js" 이 경로로 js 파일에 접근할수 있다.
// -------------------------
const useridArr = [];
const usernameArr = [];
app.get('/',(req,res)=>{
    fs.readFile("page.html","utf-8",(err,data) =>{ 
        console.log(err); 
        // 파일 읽기가 처리되었으면 err는 NULL
        res.send(data)
    });
});

// 클라이언트가 접속 했을때 connection
io.on("connection",(socket)=>{

     socket.on('disconnect', () => {
        usernameArr.splice(useridArr.indexOf(socket.id),1)
        useridArr.splice(useridArr.indexOf(socket.id),1)
        console.log("유저 떠남");
        io.sockets.emit("secretChat",usernameArr,useridArr);
    });
    console.log("유저 접속");
    socket.on("joinRoom",(room,name)=>{
        // 방개념으로 접속 시켜주는 함수 join(방이름)
        socket.join(room);
        // to(room) 현재 그 방에 있는 클라이언트에게 요청
        io.to(room).emit("joinRoom",room,name);
        // console.log(io.sockets);
       
    });


    socket.on("leaveRoom",(room,name) =>{
        // 방개념으로 떠나게 해주는 함수 leave(방 이름)
        socket.leave(room);
        // to(room) 현재 그 방에 있는 클라이언트에게 요청
        io.to(room).emit("leaveRoom",room,name)
    })
    socket.on("chat",(room,name,msg)=>{
        io.to(room).emit("chat",name,msg);
    })
    socket.on("secretChat",(name,userid)=>{
        useridArr.push(userid);
        usernameArr.push(name);
        io.sockets.emit("secretChat",usernameArr,useridArr);
    })
    socket.on("secretMsg",(name,secretMsg,scrRoom)=>{
        io.to(scrRoom).emit("secretMsg",name,secretMsg,scrRoom);
    })

});



// 접속된 모든 클라이언트에게 메세지를 전송
// io.emit("이벤트명",보내줄 데이터)

// 메세지를 전송한 클라이언트에게만 메세지 전송
// socket.emit('이벤트명', 보내줄 데이터)

// 메세지를 전송하는데 자기 제외 방송
// socket.broadcast.emit("이벤트명",보내줄 데이터)

// 특정 클라이언트에게만 귓속말
// io.to(아이디).emit("이벤트명",보내줄 데이터)

// 클라이언트 접속과 종료 들어왔을때 나갔을때
// io.on("connection"(들어왔을떄)/"disconnect"(나갔을때) (socket)=>{})
