import {React} from 'react'
import { Link,useNavigate} from 'react-router-dom'
// import { Header,ImgContent} from '../com'

const Login = ({login,data}) => {
    const nav = useNavigate()
    // console.log(data)
    // console.log(<Link to="/"/>)
    let add = ()=>{
        console.log("검사 실행")
        const id = document.getElementById("id").value
        const pw = document.getElementById("pw").value
        data.forEach(e => {
            // console.log(e.id)
            // console.log(id)
            console.log(e.id === id)
            if((e.id === id)&&(e.pw === pw)){
                login.id = e.id
                login.pw = e.pw
                login.nickname = e.nickname
                login.login = true
                alert("로그인 완료")
                console.log(<Link to="/"/>)
                return nav("/")
            }
        });
        if(login.login === false){
            alert("잘못된 아이디 입니다.")
            document.getElementById("id").value = ""
            document.getElementById("pw").value = ""
        }

    }

  return (
    <div className='loginPage'>
        <div className='loginBox'>
            <div className='loginInput'>
                <h1>로그인</h1>
                <label className='idLabel' htmlFor="">아이디</label>
                <input type="text" name="" id="id" /><br />
                <label htmlFor="">비밀번호</label>
                <input type="password" name="" id="pw" />
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