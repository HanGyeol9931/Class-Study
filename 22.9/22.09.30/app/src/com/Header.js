import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'

const Header = () => {
    const login = useSelector(state=>state.LoginReducer)
    const dispatch = useDispatch()
    const nav = useNavigate()
    let loginOut = ()=>{
        dispatch({type : "LOGIN_OUT"})
        alert("로그아웃 되었습니다.")
        nav("/")
    }
    let mainsite = ()=>{
        nav("/")
    }
  return (
    <div className='tilte'>
        <div className='tilteMenu'>
            <div className='tilteName' onClick={mainsite}>Desion Collection</div>
            <div className='contents'>
                <span className='tilteContent'>
                    <Link to="/mypage">MyPage</Link>
                </span> 
                <span className='tilteContent'>
                    <Link to="/border">Border</Link>
                </span> 
            </div>
        </div>
        <div className='tilteJoin'>
            <span className='join'>
                {login.login ? <div onClick={loginOut}>Login Out</div> : <Link to="/login">Login</Link>}
            </span> 
        </div>
        
    </div>
  )
}

export default Header