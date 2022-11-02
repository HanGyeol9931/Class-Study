import React from 'react'
import { Link } from 'react-router-dom'


const ImgContent = ({img,title,path}) => {
  return (
    <div className='imgContent'>
      <Link to={path}>
        <img src={img} alt="" />
        <div className='imgTitle'>{title}</div>
      </Link>
    </div>
  )
}

export default ImgContent