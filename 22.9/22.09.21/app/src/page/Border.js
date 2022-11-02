import {React} from 'react'
import { Header,BorderContent} from '../com'
import { useNavigate } from 'react-router-dom'

const Border = ({login,setlogin,bodercon}) => {
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
            <Header login={login} setlogin ={setlogin}/>
            <div className='borderContent'>
                <div className='borderTitle'>
                    <h1>Border</h1>
                    {login.login ? <button onClick={write}>글쓰기</button> : ""}
                </div>
                <BorderContent contents ={contents}/>
                {bodercon.map((el)=> (<BorderContent contents={el} path = {url+el.num}/>))}
            </div>
        </div>
    
    </div>
  )
}

export default Border