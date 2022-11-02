import './App.css';
import {Routes, Route ,Navigate} from "react-router-dom"
import {Main,Login,Shop,Detail,Mypage} from "./page"
import { useState } from 'react';

function App() {
  // Routers : 페이지를 스위치 해주는 일을 해준다..
  // 버전업되면서 이름이 바꿨어요 이전에는 Switch였다. 과거에는

  // Route : 페이지들을 정의해준다. Route에는 props 값이 두개 필요한대
  // path랑 element
  // path는 경로 (보여줄 컴포넌트들을 보여줄 경로)
  // element 보여줄 경로의 컴포넌트(path에 해당되는 경로에서 보여줄 컴포넌트)
  
  // 로그인이 되어있는지 확인할 상태 useState

  // 페이지를 접속할때 권한이 필요해서 막아야할 페이지 처리
  // 페이지 보호하는법 리다이렉트를 해주는 방법
  // Navigate라는 컴포넌트를 사용해서 리다이렉트를 하게 만들어 줄수 있다.
  // reacte-rounter-dom가 지원해주는 컴포넌트
  // props를 받는데 to 한개 해주면 된다. 보내주고 싶은 경로

  const [login,setLogin] =  useState(false);
  // Redirect 컴포넌트를 만들어 준것.
  // 로그인이 안됐으면 메인페이지로 보내버린다. 경로를
  const Redirect = () =>{
    return login == true ? <Mypage/> : <Navigate to="/"/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main islogin={login}/>}/>
        <Route path='/login' element={<Login islogin={login} login={setLogin}/>}/>
        <Route path='/shop' element={<Shop islogin={login}/>}/>
        <Route path='/detail/:id/:num/:name' element={<Detail islogin={login}/>}/>
        <Route path='/mypage' element={<Redirect/>}/>
      </Routes>
    </div>
  );
}

export default App;
