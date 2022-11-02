import React from 'react'
import {Header,Body} from '../com'

const Shop = ({islogin}) => {
  return (
    <div>
        <Header title="상점페이지"/>
        <Body islogin={islogin} path="/detail/1/10/sut"  name="1번 상품"/>
        <Body islogin={islogin} path="/detail/3/20/sut" name="2번 상품"/>
        <Body islogin={islogin} path="/detail/5/1/su213t" name="3번 상품"/>
        <Body islogin={islogin} path="/detail/4/10/su213t" name="4번 상품"/>
    </div>
  )
}

export default Shop