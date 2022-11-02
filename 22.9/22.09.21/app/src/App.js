import './App.css';
import {React,useState} from 'react';
import {Main,Login,SignUp,MyPage,Border,Write,BorderPage,Img} from "./page"
import {Routes, Route,Navigate } from "react-router-dom"

function App() {
  const [num,setNum] = useState(1)
  const [inputs,setInputs] =  useState({
    id : null,
    pw : null,
    nickname : null,
    img : [],
    login : false
  });
  const [bodercon,setBodercon] = useState([])
  const object = {}
  const [userdata,setUserdata] = useState([])
  const Redirect = () =>{
    return inputs.login === true ? <MyPage login={inputs} setlogin={setInputs} data={userdata}/>:alert("로그인 후 이용해주세요."),<Navigate to="/"/>
    // <Navigate to="/"/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main login={inputs} setlogin={setInputs}/>}/>
        <Route path='/login' element={<Login login={inputs} data={userdata}  />}/>
        <Route path='/signup' element={<SignUp signup={object} data={userdata} setdata={setUserdata}/>}/>
        <Route path='/mypage' element={<Redirect/> }/>
        <Route path='/border' element={<Border login={inputs} setlogin={setInputs} bodercon={bodercon} /> }/>
        <Route path='/border/write' element={<Write login={inputs} setlogin={setInputs} bodercon={bodercon} num={num} setNum={setNum}/> }/>
        <Route path='/borderpage/:id' element={<BorderPage login={inputs} setlogin={setInputs} bodercon={bodercon} num={num} setNum={setNum} setBodercon = {setBodercon}/> }/>
        <Route path='/img/:id' element={<Img login={inputs} setlogin={setInputs} /> }/>
      </Routes>
    </div>
  );
}

export default App;
