import {React} from 'react'
import { Header,BorderContent} from '../com'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Border = () => {
    const login_user =  useSelector(state=> state.LoginReducer)
    const border = useSelector(state=>state.BorderReducer.userData)
    console.log(border)
    const contents = {
        num : "목차",
        title : "내용",
        writer : "작성자",
        date : "날짜"
    }
    const nav = useNavigate()
    const write = ()=>{
        nav("write")
    }
    const url = "/borderpage/"
  return (
    <div>
        <div className='border'>
            <Header/>
            <div className='borderContent'>
                <div className='borderTitle'>
                    <h1>Border</h1>
                    {login_user.login ? <button onClick={write}>글쓰기</button> : ""}
                </div>
                <BorderContent contents ={contents}/>
                {border.map((el)=> (<BorderContent contents={el} path = {url+el.num}/>))}
            </div>
        </div>
    
    </div>
  )
}

export default Border