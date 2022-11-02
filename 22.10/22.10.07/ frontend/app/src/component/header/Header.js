import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button,HeaderWarp,HeaderContent,ContentBtn,LoginWrap,LoginInput} from './styledComponent'
import { loginAction } from '../../middleware/loginAction'
import { useDispatch, useSelector } from 'react-redux'

const Header = ({isLogin}) => {
    const idInput = useRef()
    const pwInput = useRef()
    const dispatch = useDispatch()
    // 로그인 할수있는 상태와 회원가입 할수 있는 상태를 나눠주기 위해서
    const [wrapState, setWrapState] = useState(true);
    const userNmae = useSelector(state => state.loginRudcer.id)

    // 리액트에서 태그를 선택해야하는데 어떻게 하냐
    // document.querySelector

    // useRef 함수는 current 속성을 가지고 있는 객체를 반환한다.
    // 객체에 원하는 키값에 값을 넣어줄수도 있고.
    // 이 값이 바뀌어도 렌더링은 되지 않지만 값을 계속 남아있다.
    // current = 태그가 들어 온다.
    // 사용방법은 들고있고 싶은 컴포넌트에 ref props로 useRef() 반환한 객체를 넣어준다.
    const login = ()=>{
        // console.log(idInput,pwInput)
        // document.querySelector("태그") = ""; === idInput.current.value
        dispatch(loginAction.login(idInput.value,pwInput.value))
        // idInput.current.value = "";
        // pwInput.current.value = "";
    }
    const logOut = ()=>{
        dispatch(loginAction.logOut())
    }
    const signUp = ()=>{
        // console.log(idInput,pwInput)
        // document.querySelector("태그") = ""; === idInput.current.value
        dispatch(loginAction.signUp(idInput.value,pwInput.value,setWarp))
        // idInput.current.value = "";
        // pwInput.current.value = "";
   
    }

    let nav = useNavigate()

    const setWarp = ()=>{
        setWrapState(!wrapState)
        idInput.value = "";
        pwInput.value = "";
        idInput.current.value = "";
        pwInput.current.value = "";
    }
  return (
    <HeaderWarp>
        <HeaderContent>
            <ContentBtn onClick={()=>{nav("/")}}>MAIN</ContentBtn>
            <ContentBtn onClick={()=>{nav("/shop")}}>SHOP</ContentBtn>
        </HeaderContent>
            <LoginWrap>
                {isLogin ? 
                <>
                <div>{userNmae}로그인 되었습니다.</div>
                <Button onClick={logOut}>로그아웃</Button>
                </>
                :
                <>
                {wrapState ? 
                    <>
                        <label htmlFor="">아이디 :</label>
                        <LoginInput ref={idInput} onChange={(e)=>{idInput.value = e.target.value}}/>
                        <label htmlFor="">비밀번호 :</label>
                        <LoginInput ref={pwInput} onChange={(e)=>{pwInput.value = e.target.value}}/>
                        <Button onClick={login}>로그인</Button>
                        <Button onClick={setWarp}>회원가입 하러 가기</Button></>
                    :
                    <>
                        <label htmlFor="">아이디 :</label>
                        <LoginInput ref={idInput} onChange={(e)=>{idInput.value = e.target.value}}/>
                        <label htmlFor="">비밀번호 :</label>
                        <LoginInput ref={pwInput} onChange={(e)=>{pwInput.value = e.target.value}}/>
                        <Button onClick={signUp}>회원 가입</Button>
                        <Button onClick={setWarp}>로그인 하러 가기</Button>
                    </>
                }
                </>
                }
                
                
            </LoginWrap>
        
    </HeaderWarp>
  )
}

export default Header