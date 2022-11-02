
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import axios from "axios"
import {weather} from "./middleware"
import { logins } from './middleware';
import { useEffect, useState } from 'react';
// Get 요청 방식
// axios({url : ""});

// Post 요청 방식
// axios({
//    method 기본이 GET
//   method : "post",
//   url : "",
//   weatherdata:{
//     넘겨줄 값을 넣어주면 된다.
//   }

// })

function App() {
  const dispatch = useDispatch()
  const get =(name)=>{
    dispatch(weather.getWeather(name));
  }

  const weatherData = useSelector(state =>state.weather.weatherData)
  const isLogin = useSelector(state=>state.login.isLogin)
  const userName = useSelector(state=>state.login.id)
  console.log(isLogin)
  const [name,setName] = useState('')
  const [id,setId] = useState('')
  const [pw,setPw] = useState('')
  useEffect(()=>{
    // console.log(weatherData)
  },[weatherData])

  const login = () => {
    dispatch(logins.login(id,pw))
  }
  const loginout = ()=>{
    dispatch(logins.loginOut())
  }
  
  // async function get(){
  //   const weatherdata = await axios({url : "https://api.openmap.org/weatherdata/2.5/?q=Seoul&appid=a518ac821866c4aab5c088ad4a9b6f16"})
  //   console.log(weatherdata);
  // }
  // get()
  // let a = useSelector(state => state.count)
  return (
    <div className="App">
      <label>도시 이름</label>
      <input onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={()=>{get(name)}}>날씨 검색</button>
      <div>지금 {weatherData &&weatherData.data?.name} 날씨는 : {weatherData &&weatherData.data?.weather[0]?.main} </div>
      <label htmlFor="">아이디</label><br />
      <input onChange={(e)=>{setId(e.target.value)}}/><br />
      <label htmlFor="">비밀번호</label><br />
      <input onChange={(e)=>{setPw(e.target.value)}} /><br />
      <button onClick={login}>로그인</button>
      <div>로그인 됨?</div>{isLogin ? <div> {userName}유저 로그인 됨 <button onClick={loginout}>로그아웃</button></div> : <div>로그인 안됨</div> }
      
    </div>
  );
}

export default App;
