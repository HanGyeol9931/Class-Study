import React, { useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux';

const Count = ({count,setCount}) => {
    // useDispatch 함수를 사용하고
    const dispatch  = useDispatch()
    // console.log(count2)
    const nameInput = useRef()
    let name123 = "123"
    
    const onChange = (e)=>{
        name123= e.target.value
    }
    const a =  useSelector(state => state.test1.array)
    console.log("이건 배열",a)
    // const count123 = useSelector(state=>state.id)   
    // 반환된 dispatch를 사용해서 Action을 던질수 있다.
    // dispatch 함수를 사용하는데 매개변수로 객체를 전달해줍니다.
    // 객체의 규칙은 {type,payload}
    // type : 동작시킬 행동의 이름
    // payload : 선택사항 있어도 되고 없어도 괜찮은데 우리가 데이터 전달이 필요하면 사용
    // let count123 = useSelector(state=>state.id)
    // const shot = useRef();
    // let change =  (e)=>{
    //     dispatch({type:"test",data:e.target.value})
    //     // console.log(dispatch({type:"test",data:e.target.value}))
    // }
    // const Add = ()=>{
    //     dispatch({type:"ADD"})
    //     setCount(count+1)
    // }
    const Remove = ()=>{
        // console.log("실행")
        console.log(dispatch({type:"gd",data:name123})) 
        // dispatch({type:"gd"})
        console.log(nameInput.current.value)
        // 같은 이름이 있으면 맨 뒤에 꺼로 타겟이 잡힌다.
        // setCount(count-1)
    }
    // console.log(dispatch())

  return (
    <div>
        {a}
        {/* <button onClick={Add}>+</button> */}
        <button onClick={Remove}>-</button>
        <input ref={nameInput} onChange={onChange} type="text123" name="text1234" id="" />
    </div>
  );
};

export default Count