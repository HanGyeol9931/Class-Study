const express = require("express");
const cors = require("cors");
const app = express()
const {sequelize,user} = require("./public");
const { reset } = require("nodemon");

// cors 에러 해결 방법
// 콘솔창에 에러가 뜨면 
// cors 설정을 해주어야 한다.

// cors란 브라우저의 보안정책
// cors는 브라우저가 서로 다른 도메인/포트의 서버로 요청했을때 발생한다.
// 접근을 허용 해줘야한다. 해킹을 할수 있기 때문에 

// cors 설치
// npm i cors

// origin : "*"  누가오든 요청 허용
// origin : true,  들어오는 요청 도메인/포트가 자동으로 orgin에 들어간다.
// origin : "도메인" 실제로 서비스 되는 도메인인을
//           입력해줘서 해당 도메인만 접근할수 있게 허용
//  credential : true,false (사용자 인증이 필요한 리소스를 접근허용을 해주는것 쿠키 같은거)




sequelize.sync({force : false}).then(()=>{
    console.log("연결이 잘되었다")
}).catch((err)=>{
    console.log(err)
})

const options = {
    origin : "http://localhost:3000" // 이주소 허용
}

// 전달 받은 객체 형태를 해석해서 사용할수 있게 설정
app.use(express.json())

app.use(cors(options));



app.post("/login",async(req,res)=>{
    let {id,pw} = req.body;
    const users = await user.findOne({
        where : {user_id : id,user_pw:pw}
    });
    if(user){
        res.send(true);
    }else{
        res.send(false);
    }
})
app.post("/signUp",async(req,res)=>{
    console.log(req.body)
    let {id,pw} = req.body;
    const users = await user.findOne({
        where : {user_id : id}
    });
    if(!users){
        user.create({
            user_id : id, user_pw:pw
        }).then(()=>{
            res.send("가입이 완료되었습니다.")
        })
    }else{
        res.send("동일한 아이디가 존재합니다.")
    }
    // console.log(req.body.id)
    // res.send({id,pw})
})

app.listen(8000,()=>{
    console.log("서버 열림ㅋ")
})