import React from 'react'
import { Header} from '../com'
import { useNavigate } from 'react-router-dom'

const Write = ({login,setlogin,bodercon,setNum,num}) => {
    let date = new Date();
    const day = date.getFullYear()-2000 + "-"+(date.getMonth()+1)+ "-"+ date.getDate();

    const nav = useNavigate()
    const back  = ()=>{
        nav("/border")
    }
    const add = ()=>{
        setNum(num+1)
        bodercon.push({
            num : num,
            title : document.querySelector(".writeTextTitle").value,
            contents : document.querySelector(".writeTextContent").value,
            writer :login.nickname,
            date : day
        })
        nav("/border")
    }
    
  return (
    <div>
        <div className='border'>
            <Header login={login} setlogin ={setlogin}/>
            <div className='borderWrite'>
            <div className='borderTitle'>
                <h1>Writer</h1>
            </div>
            <div className='write'>
                <div className='writer'>
                    <span>작성자 : </span>
                    {login.nickname}
                </div>
                <div className='writeTilte'>
                    <div>
                        <label htmlFor="">제목</label>  
                    </div>
                    <input className='writeTextTitle' type="text" placeholder='제목을 넣어주세요'/>
                </div>
                <div className='writeContent'>
                    <div>
                        <label htmlFor="">내용</label>
                    </div>
                    <textarea className='writeTextContent' name="" id="" cols="30" rows="10" placeholder='내용을 넣어주세요'></textarea>
                </div>
                <div className='writeBtn'>
                    <button onClick={add}>작성하기</button>
                    <button onClick={back}>돌아가기</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Write