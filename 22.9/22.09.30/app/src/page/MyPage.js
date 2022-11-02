import React, { useRef } from 'react'
import { Header } from '../com'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MyPage = () => {
    const nav = useNavigate()
    const login_user = useSelector(state=>state.LoginReducer)
    const user = useSelector(state=>state.JoinReducer)
    const nickname = useRef()
    const main = ()=>{
        nav("/")
    }
    const change = ()=>{
        
        user.userData.forEach(e => {
            if((e.id === login_user.id)&&(e.pw === login_user.pw)){
                if(nickname.current.value ===""){
                    alert("닉네임을 입력해주세요")
                    nickname.current.value = ""
                }
                else if(login_user.nickname === nickname.current.value){
                    alert("같은 닉네임 입니다.")
                    nickname.current.value = ""

                }
                else{
                    alert("변경되었습니다.")
                    login_user.id = e.id
                    login_user.pw = e.pw
                    login_user.nickname = nickname.current.value
                    login_user.login = true
                    e.nickname = nickname.current.value
                    return nav("/")
                }
            }
        });
    }
  return (
    <div>
        <div className='mypage'>
            <Header/>
            <div className='mypageContent'>
                <h1>My Page</h1>
                <div className='userName'>
                    <div>
                        Nick Name :
                    </div>
                    <input ref={nickname} className='nickname' type="text" placeholder={login_user.nickname}/>
                </div>
                <button className='changeBtn' onClick={change}>변경</button>
                <button className='mainBtn' onClick={main}>메인페이지</button>
            </div>
        </div>
    </div>
  )
}

export default MyPage