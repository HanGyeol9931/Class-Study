import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Header = ({login,setlogin}) => {
    const nav = useNavigate()
    let loginOut = ()=>{
        login.id = null
        login.pw = null
        login.nickname = null
        login.login = false
        setlogin({
            id : null,
            pw : null,
            nickname : null,
            login : false
          });
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