import React from 'react'

const Test = ({id,main,test}) => {
    test = test[id-1]
  return (
    <div className='imgText'>
        <h1>TEST{id}</h1>      
        {test.a}
        {test.b}
        {test.c}
        {test.d}
        <button onClick={main}>메인으로</button>
    </div>
  )
}

export default Test