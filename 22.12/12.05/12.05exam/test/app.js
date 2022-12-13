//checkblock.js
const express = require('express');
const Web3 = require('web3');

var app = express();

const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9005'))

// 블록의 정보가 나오는 
web3.eth.subscribe('newBlockHeaders', function (error, result) {    
    if (!error) {
        console.log(result);
    }
});

app.listen(3000,()=>{
    console.log("서버 열림")
})
