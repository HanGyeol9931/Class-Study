import React, { useState } from 'react'
import {Header,Body} from '../com'
import { Link , useLocation , useParams,useSearchParams } from 'react-router-dom'
// 파라미터 값을 가져오기 위한 방법
// 리액트에서 지원해주는 유용한 함수를 뭐라고 했죠?
// 리액트 훅 함수를 사용을 해서 작업 할수 있다.
// useParams 사용
// url에 경로에 있는 파라미터들을 객체의 형태로 불러 올수 있다.
// useParams함수를 실행해주고 반환된 객체를 가지고 동작한다.

// 검색하려면 어쩌지?
// 검색 쿼리문도 가져와보자
// 검색 하려면 input 입력창이 있어야하니까
// 입력했을떄 값을 저장해 놓자 리액트 값 저장해야할때 useState로 들고있어야 겠다
// input value를 useState값을 넣어 놨다.
// 입력한 값을 언제든 사용할수 있다. 이제
// 검색 쿼리문을 만들어 보자
// useSearchParams이 함수를 사용해야한다.
// useSearchParams이 함수를 실행해서 반환받은 객체를 사용
//  useSearchParams가 경로에서 뽑아주는 영역은
// ?뒤에 키값을 기준으로
// ?q=1 이런 형태는 q라는 키값이 객체형태로 나온다 {q:1}
// useSearchParams 함수 실행후 반환된 객체 사용

// 현재 경로를 가져와서 사용해야하는데 또 함수 useLocation
// 함수 실행후 반환된 객체 사용
const Detail = ({islogin}) => {
  const [serch,setSerch] = useState();
  const params = useParams();
  const location = useLocation()
  const [query,setQuery] = useSearchParams();
  console.log(location)
  // q키의 값을 가져오겠다는 뜻
  console.log(query.get("q"))
  const keyInput = (e)=>{
    setSerch(e.target.value)
  }
  // console.log(params)
  return (
    <div>
      <Header title="상세 페이지"/>
      {/* <Body path="/shop" name="상점 페이지" item={params}/> */}
      <div>{serch}</div>
      <div>너 이거 검색했어 {query.get("q")}</div>
      <input onChange={keyInput}/>
      <Link to={location.pathname+"?q="+serch}>검색하기</Link>
    </div>
    
  )
}

export default Detail