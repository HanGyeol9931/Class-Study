import {React, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
// import { Header,ImgContent} from '../com'

const Login = () => {
    const nav = useNavigate()
    const user = useSelector(state => state.JoinReducer)
    const id = useRef()
    const pw = useRef()
    const dispatch = useDispatch()
    let add = ()=>{
        console.log("검사 실행")
        
        user.userData.forEach(e => {
            if((e.id === id.current.value)&&(e.pw === pw.current.value)){
                dispatch({type : "LOGIN_SUCCESS" , data : e})
                alert("로그인 완료")
                return nav("/")
            }
        });
    }

  return (
    <div className='loginPage'>
        <div className='loginBox'>
            <div className='loginInput'>
                <h1>로그인</h1>
                <label className='idLabel' htmlFor="">아이디</label>
                <input ref={id} type="text" name="" id="id" /><br />
                <label htmlFor="">비밀번호</label>
                <input ref={pw} type="password" name="" id="pw" />
                <div className='loginBtn'>
                    <button onClick={add}>로그인</button>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/">메인페이지</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login