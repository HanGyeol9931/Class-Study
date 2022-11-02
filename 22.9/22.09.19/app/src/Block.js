import React from 'react'

const Block = (props) => {
    console.log(props)
    let {data,test,name} = props;
    let temp = "";
    if(name === "유저"){
        temp = test
    }
    else{
        console.log("이거다",test==="")
        if(test===""){
            temp = ""
        }
        else{

            temp = test === "무승부" ? "무승부" : test === "이겼다" ? "졌다" : "이겼다" ;
        }
        // temp === "무승부" ? 유저가 무승부면
        // true : false 이렇게 들어가는데 true가 "무승부"이고 false가
        // test == "이겼다" ? "졌다" : "이겼다" 이 삼항 연산자
    }
    console.log(data)
  return (
    <div className='block'>
        <div>{name}</div>
        {/* 선택한 이미지를 props값으로 받아온다
            부모 컴포넌트에서 */}
        {/* 리액트에서 제일 많이 쓸거다 값이 있으면 그려라라는 구문 && */}
        {/* 값이 없으면 오류를 뱉어 내기 때문에  */}
        <img src={data && data.img} alt="" />
        <div>{temp}</div>
    </div>
  )
}

export default Block