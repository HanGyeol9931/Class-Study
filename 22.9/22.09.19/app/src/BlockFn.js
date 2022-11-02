import React, { useEffect, useState } from 'react'

export const BlockFn = () => {
    const [num, setNum] = useState(0);
    // const [num3, setNum3] = useState(0);
    // useEffect 얘가 생명주기 함수를 사용할수 있게 함수형에서도
    // 리액트에서도 지원해주는 유용한 함수(react hock) 리액트 훅

    // 빈배열은 componentDidMount라는것
    useEffect(()=>{
        // 여기에서 데이터를 불러와서 UI를 꾸며준다.
        console.log("componentDidMount")
        
    },[]);
    // componentDidUpdate는 어떻게 만드나
    // num이 값을 주시하고 있다가 주시하는 값이 바뀌면 실행되는 함수
    // 배열안에 추가한 값을 주시하다가 바뀌면 실행된다.
    // 모자란애 이게 componentDidMount + componentDidUpdate
    // 그래서 조건을 처리를 해줘야 한다.
    useEffect(()=>{
        console.log("componentDidUpdate")
        console.log(num)
        // console.log(num3)
    },[num])
    const add =  ()=>{
        setNum(num + 1)
        // console.log(num)
    }
  return (
    <div>
        <button onClick={add}>증가해요</button>
    </div>
  )
}
