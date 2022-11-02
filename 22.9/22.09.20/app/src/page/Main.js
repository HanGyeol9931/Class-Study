import React from 'react'
import {Header,Body} from '../com'

const main = ({islogin}) => {
  console.log(islogin)
  return (
    <div>
        <Header title="메인페이지"/>
        <Body path="/login" name="로그인 페이지" islogin={islogin}/>
    </div>
  )
}

export default main