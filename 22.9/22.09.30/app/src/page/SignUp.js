import {React, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'

const SignUp = () => {
    const id = useRef()
    const pw = useRef()
    const nickname = useRef()
    const user = useSelector(state=>state.JoinReducer.userData)
    const nav = useNavigate()
    const dispatch = useDispatch()
    let add = ()=>{      
        let userLogin = true
        user.forEach(e => {
            if(e.id === id.current.value){
                alert("중복된 아이디 입니다.")
                id.current.value = ""
                pw.current.value = ""
                nickname.current.value =  ""
                return userLogin = false
            }
        });
        if(userLogin){
            let userdata = {
                id : id.current.value,
                pw : pw.current.value,
                nickname : nickname.current.value,
                login : true,
            }
            dispatch({type:"JOIN_SUCCESS",data : userdata})
            alert("회원가입 완료")
            nav("/login")
        }
    }
  return (
    <div className='loginPage'>
        <div className='loginBox'>
            <div className='loginInput'>
                <h1>회원가입</h1>
                <label className='idLabel' htmlFor="">아이디</label>
                <input ref={id} type="text" name="" id="id" /><br />
                <label htmlFor="">비밀번호</label>
                <input ref={pw} type="password" name="" id="pw" /><br />
                <label className='nicknameLabel' htmlFor="">닉네임</label>
                <input ref={nickname} type="text" name="" id="nickname" />
                <div className='loginBtn'>
                    <button onClick={add}>회원가입</button>
                    <Link to="/">돌아가기</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp