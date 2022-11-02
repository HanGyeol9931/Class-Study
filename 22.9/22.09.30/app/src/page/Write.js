import React, { useRef } from 'react'
import { Header} from '../com'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Write = () => {
    const border = useSelector(state=>state.BorderReducer)
    const login_user = useSelector(state=>state.LoginReducer)
    const title = useRef()
    const content = useRef()
    console.log(border)
    console.log(login_user)
    let date = new Date();
    const day = date.getFullYear()-2000 + "-"+(date.getMonth()+1)+ "-"+ date.getDate();

    const nav = useNavigate()
    const back  = ()=>{
        nav("/border")
    }
    const add = ()=>{
        border.count += 1
        border.userData.push({
            num : border.count,
            title : title.current.value,
            contents : content.current.value,
            writer :login_user.nickname,
            date : day
        })
        nav("/border")
    }
    
  return (
    <div>
        <div className='border'>
            <Header/>
            <div className='borderWrite'>
            <div className='borderTitle'>
                <h1>Writer</h1>
            </div>
            <div className='write'>
                <div className='writer'>
                    <span>작성자 : </span>
                    {login_user.nickname}
                </div>
                <div className='writeTilte'>
                    <div>
                        <label htmlFor="">제목</label>  
                    </div>
                    <input ref={title} className='writeTextTitle' type="text" placeholder='제목을 넣어주세요'/>
                </div>
                <div className='writeContent'>
                    <div>
                        <label htmlFor="">내용</label>
                    </div>
                    <textarea ref={content} className='writeTextContent' name="" id="" cols="30" rows="10" placeholder='내용을 넣어주세요'></textarea>
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