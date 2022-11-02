import React from 'react'
import { Header } from '../com'
import { useNavigate } from 'react-router-dom'

const MyPage = ({login,setlogin,data}) => {
    const nav = useNavigate()
    const main = ()=>{
        nav("/")
    }
    const change = ()=>{
        alert("변경되었습니다.")
        data.forEach(e => {
            if((e.id === login.id)&&(e.pw === login.pw)){
                login.id = e.id
                login.pw = e.pw
                login.nickname = document.querySelector(".nickname").value
                login.login = true
                e.nickname = document.querySelector(".nickname").value
                return nav("/")
            }
        });
    }
  return (
    <div>
        <div className='mypage'>
            <Header login = {login} setlogin={setlogin}/>
            <div className='mypageContent'>
                <h1>My Page</h1>
                <div className='userName'>
                    <div>
                        Nick Name :
                    </div>
                    <input className='nickname' type="text" placeholder={login.nickname}/>
                </div>
                <button className='changeBtn' onClick={change}>변경</button>
                <button className='mainBtn' onClick={main}>메인페이지</button>
            </div>
        </div>
    </div>
  )
}

export default MyPage