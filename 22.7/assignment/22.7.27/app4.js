// 사용할 모듈
// socketio,express, fs , nodemon

// 설치 명령어 
// ------------------------
// npm i 모듈명
// ------------------------

// 영화관 좌석 예약 만들것

const socketio = require('socket.io');
const express = require("express");
const fs = require("fs");

let seats = [
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],

  ];
let seats2 = [
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],

  ];
let seats3 = [
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],

  ];
  //   웹 서버 생성
  const app = express(); 
  const PORT = 4000;
  const server = app.listen(PORT, ()=>{
      console.log(PORT , "번 포트 실행")
  });
  // socket.io 생성 및 실행
  const io = socketio(server);
  app.get ("/", (req,res)=>{
      fs.readFile("./index.html",(err,data)=>{
          res.send(data.toString())
      });
  })
  app.get("/page1", (req, res) => {
    fs.readFile("page1.html", "utf-8", (err, data) => {
        res.send(data.toString());
    });
  });
  app.get("/page2", (req, res) => {
    fs.readFile("page2.html", "utf-8", (err, data) => {
        res.send(data.toString());
    });
  });
  app.get("/page3", (req, res) => {
    fs.readFile("page3.html", "utf-8", (err, data) => {
      res.send(data);
    });
  });
  app.get('/seats',(req,res)=>{
      res.send(seats);
  })
  app.get('/seats2',(req,res)=>{
      res.send(seats2);
  })
  app.get('/seats3',(req,res)=>{
      res.send(seats3);
  })
  io.sockets.on('connection',(socket) => { 
    socket.on('reserve',(data)=>{
          seats[data.y][data.x] = 2;
          io.sockets.emit("reserve",data);
    });
    socket.on('reserve2',(data)=>{
        seats2[data.y][data.x] = 2;
        io.sockets.emit("reserve2",data);
    });
    socket.on('reserve3',(data)=>{
        seats3[data.y][data.x] = 2;
        io.sockets.emit("reserve3",data);
    });
  });



  

