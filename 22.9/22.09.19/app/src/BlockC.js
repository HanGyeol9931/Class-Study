import React, { Component } from 'react'

export default class BlockC extends Component {
    constructor(props){
        super(props)
        let {data,test,name} = props;
        console.log("여기요",this.props.name)
        let temp = "";
        if(this.props.name === "유저"){
            temp = this.props.test
        }
        else{
            // console.log("이거다",test==="")
            if(this.props.test === ""){
                temp = ""
            }
            else{
                temp = (this.props.test === "무승부" ? "무승부" : this.props.test === "이겼다" ? "졌다" : "이겼다" );
            }
            // temp === "무승부" ? 유저가 무승부면
            // true : false 이렇게 들어가는데 true가 "무승부"이고 false가
            // test == "이겼다" ? "졌다" : "이겼다" 이 삼항 연산자
        }
        console.log(this.temp)
    }
    componentDidUpdate(){
        // 전에 말했던 함수형에서 useState() 함수 class 컴포넌트에서는 setState()이함수
        // state 값이 변하는 것은 비동기라고 했는데 그 값이 변환뒤에 값을 update에서 확인할수있다.
        // 이 말은 state 값이 변하고 실행되는 함수라는 말이다.
        // state 값이 변하고 처리해야하는 작업은 전부 이곳에서 해주면 된다.
        console.log("이거임",this.temp)
    }
  render() {
    return (
        <div className='block'>
            <div>{this.props.name}</div>
            {/* 선택한 이미지를 props값으로 받아온다
                부모 컴포넌트에서 */}
            {/* 리액트에서 제일 많이 쓸거다 값이 있으면 그려라라는 구문 && */}
            {/* 값이 없으면 오류를 뱉어 내기 때문에  */}
            <img src={this.props.data && this.props.data.img} alt="" />
            <div>{}</div>
        </div>
    )
  }
}
