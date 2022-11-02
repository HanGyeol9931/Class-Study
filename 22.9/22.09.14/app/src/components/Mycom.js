import React from 'react'

// 이렇게 컴포넌트로 작업을 하면 좋은점은
// 일반 태그처럼 우리가 원하는 내요응ㄹ 태그화해서 사용할수 있기 떄문에
// 이렇게 쓰면 코드의 재활용성이 용이해진다.
// 이렇게 하면 좋은점은 역시 유지보수가 편하다.

// 리액트의 데이터 구조는 단반향 위에서 아래로 데이터를 전달해줄수 있다.
// 여기서 받은 num 매개변수의 명청은 props이다.
// 부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달 해줄수 있다.
// 단반향 자식이 줄수는 없어요 부모가 줄수 있다.

// 중괄호 써주는 이유는 자바스크립트 구문을 사용하겠다는 얘기
// 태그에 class를 추가할때 className 리액트 어트리뷰트로 추가 해줘야 한다.
// className이 이름
const Mycom = (num) => {
    const{day,color,size} = num;
    console.log(num)
  return (
    <div className={"aoao"+(color !== undefined?" "+color:"")+ (size !== undefined?" "+size:"")} >
        {day}
    </div>
  )
}
// default 하나만 내보낼때
export default Mycom

