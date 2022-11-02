import './App.css';
import {React} from 'react';
import {Main,Login,SignUp,MyPage,Border,Write,BorderPage,Img} from "./page"
import {Routes, Route,Navigate } from "react-router-dom"
import { useSelector } from 'react-redux';

function App() {
  const login = useSelector(state => state.LoginReducer)
  const Redirect = () =>{
    return login.login === true ? <MyPage/>:<Navigate to="/"/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mypage' element={<Redirect/> }/>
        <Route path='/border' element={<Border/> }/>
        <Route path='/border/write' element={<Write/>}/>
        <Route path='/borderpage/:id' element={<BorderPage/>}/>
        <Route path='/img/:id' element={<Img/> }/>
      </Routes>
    </div>
  );
}

export default App;
 