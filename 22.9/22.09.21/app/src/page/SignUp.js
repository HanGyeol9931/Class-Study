import {React} from 'react'
import {Link,useNavigate} from 'react-router-dom'

const SignUp = ({signup,data,setdata}) => {
    const nav = useNavigate()
    console.log(signup)
    let add = ()=>{
        let a = true
        const id = document.getElementById("id").value
        const pw = document.getElementById("pw").value
        const nickname = document.getElementById("nickname").value
        signup.id = id
        signup.pw = pw
        signup.nickname = nickname
        data.forEach(e => {
            console.log(e.id === signup.id)
            if(e.id === signup.id){
                alert("중복된 아이디 입니다.")
                document.getElementById("id").value = ""
                document.getElementById("pw").value = ""
                document.getElementById("nickname").value =  ""
                return a = false
            }
        });
        if(a){
            console.log("실행됌")
            data.push({
                id:id,
                pw:pw,
                nickname:nickname
            })
            setdata(data)
            alert("회원가입 완료")
            nav("/login")
            console.log(data)
        }
    }
  return (
    <div className='loginPage'>
        <div className='loginBox'>
            <div className='loginInput'>
                <h1>회원가입</h1>
                <label className='idLabel' htmlFor="">아이디</label>
                <input type="text" name="" id="id" /><br />
                <label htmlFor="">비밀번호</label>
                <input type="password" name="" id="pw" /><br />
                <label className='nicknameLabel' htmlFor="">닉네임</label>
                <input type="text" name="" id="nickname" />
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