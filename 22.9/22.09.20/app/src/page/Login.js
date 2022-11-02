import React from 'react'
import {Header,Body} from '../com'

const Login = ({login,islogin}) => {
  console.log(login)
  const setLogin = ()=>{
    login(true)
  }
  return (
    <div>
        <Header title="로그인 페이지"/>
        <button onClick={setLogin}>로그인 하자</button>
        <Body path="/shop" name="상점 페이지" islogin={islogin}/>
        <Body path="/mypage" name="마이 페이지" islogin={islogin}/>
    </div>
  )
}

export default Login