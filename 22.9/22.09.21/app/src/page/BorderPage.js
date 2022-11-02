import {React} from 'react'
import { Header } from '../com'
import {useParams ,useNavigate} from 'react-router-dom'

const BorderPage = ({login,setlogin,bodercon}) => {
    let nav = useNavigate()
    const params = useParams()
    console.log(params.id)
    console.log(bodercon[params.id-1])
    let back = ()=>{
        nav("/border")
    }
  return (
    <div>
        <div className='border'>
            <Header login={login} setlogin ={setlogin}/>
            <div className='borderWrite'>
            <div className='borderTitle'>
                <h1>Border</h1>
            </div>
            <div className='write'>
                <div className='writer'>
                    <span>작성자 : </span>
                    <div className='userWriter'>
                        {bodercon[params.id-1].writer}  
                    </div>
                </div>
                <div className='writeTilte'>
                    <div>
                        <label htmlFor="">제목</label>  
                    </div>
                    <div className='userTitle'>

                        {bodercon[params.id-1].title}
                    </div>
                </div>
                <div className='writeContent'>
                    <div>
                        <label htmlFor="">내용</label>
                    </div>
                    <div className='userContent'>
                        {bodercon[params.id-1].contents}
                    </div>
                </div>
                <div className='writeBtn'>
                    <button onClick={back}>돌아가기</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BorderPage