import {React} from 'react'
import { useNavigate } from 'react-router-dom'

const BorderContent = ({contents,path}) => {
    const nav = useNavigate()
    // console.log(path)
   let mama = (e)=>{
        if(((e.target.className === "boderContents") && (e.target.children[0].innerHTML!=="목차"))){
            nav(path)
        }
    }
  return (
    <div onClick={mama} className='boderContents'>
        <span className='contensNum'>
            {contents.num}
        </span>
        <span className='contensTilte'>
            {contents.title}
        </span>
        <span className='contentsData'>
            <span className='contensName'>
                {contents.writer}
            </span>
            <span className='contensDate'>
                {contents.date}
            </span>
        </span>
    </div>
  )
}

export default BorderContent