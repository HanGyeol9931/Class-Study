// 오늘 수업 만들거
// 경매소 만들기 이거 응용해서 
// 이후에 로그인 회원가입 붙여서 구현해볼것.
// 월요일에 쿠키세션 JWT

// 사용할 모듈
// express, ejs, socket.io ,fs , nodemon

// 1. express 서버 세팅
// 2. 페이지 라우터 분리해서 보여주기
// 3. nodemon 개발 버전으로 설치

// / 루트경로 페이지하나
//  /shop 페이지 하나

const express = require("express")
const socketio = require("socket.io")
const fs = require("fs")
const ejs = require("ejs")

const app = express();
// use 함수 사용해서 설정 추가
// 이름도 사용하겠다는 뜻
// express static 함수 사용

// 함수를 전달했고 sercer의 설정에 파일 경로를 설정해준다
// __dirname + "/img"
// __dirname 현재 프로젝트의 경로

// console.log(__dirname)
app.use("/src",express.static(__dirname + "/img"));

let counter = 0;

// 생성자 함수
function Product(name, image, price, count){
    // 번호가 증가 할수 있도록 증감 연산자 사용 count++
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// 동적 할당으로 new를 붙여서 생성자 함수 사용
// 객체를 하나 만듬


// 상품을 가지고 있을 박수
// 상품들 전부 가지고 있다.

const products = [
    new Product("사과","/",1000,10),
    new Product("수박","/",2000,20),
    new Product("초코바","/",3000,30),
    new Product("비타민","/",4000,40),
    new Product("커피","/",5000,50),
];


// console.log(products)

const PORT = 3000;

const server = app.listen(PORT,(req,res)=>{
    console.log(PORT,"잘 열렸습니다")
    
});

const io = socketio(server);

app.get("/",(req,res)=>{
    fs.readFile("./page.html","utf-8",(err,data) =>{ 
        res.send(data);
    })
});
app.get("/shop",(req,res)=>{
    // 파일 읽어온것
    // fs.renameSync("./shop.html","utf-8"); 이렇게 쓰고 반환값을 받으면
    // html 파일을 읽어서 utf-8인코딩하고 반환해준다
    const page = fs.readFileSync("./shop.html","utf-8");
    res.send(
        ejs.render(page, {
            products : products,
        })
    )
});

let cart = [];
// 소켓 이벤트 연결
// connection 클라이언트가 접속했을때
io.on("connection",(socket)=>{
    // 상품 구매를 취소 했을 떄 돌리는 함수
    function onReturn(index){
        // 물걸의 갯수를 다시 돌린다. 더해준다.
        products[index].count++;
        // 물건을 제거
        // 배열 안의 값 제거 delete 배열[인덱스]
        delete cart[index];
        let count = products[index].count
        io.emit('count', {
            index,
            count,
        });
        
    }
    // 이벤트 연결 웹소켓이 가지고 있는 이벤트
    socket.on('cart', (index)=>{
        // 빈 객체를 하나 만들어서 해당 배열의 인덱스 자리에 넣고
        console.log(cart)
        cart[index] = {};
        // 해당 배열의 인덱스 자리에 있는 객체에 index 키를 추가하고  벨류를 넣아준다.
        cart[index].index  = index;
       
            let count = products[index].count;
            io.emit('count',{
                index,
                count,
            })
            
            // console.log(cart)
    })
    

    socket.on("buy",(index)=>{
        // delete cart[index];
        // console.log(cart)
        //물건의 갯수를 감소
        products[index].count--;
        let count = products[index].count;
        io.emit("count", {
            index,
            count,
        })
    })

    socket.on('return',(index)=>{
        onReturn(index)
    })
});


