import React, { Component } from 'react'

// 생명주기란 **
// 생명주기는 우리가 계속 사용할꺼고 중요하다
// 작업을 하면서 원하는 분기가 필요한데 그 분기에 맞게 작업을 컨트롤 하려면
// 만약 화면을 그려주는 시기와 state 값이 변했을때 같은 이런 작업들을
// 이런 부분은 컨트롤 할수 있게 리액트에서 지원해주는 함수들이 lifecycle 함수 이다.

// 생긴건 함수형과 그렇게 많이 다르진 않은데
// 클래스로 선언 되었고 리액트에서 제공하는 컴포넌트라는 클래스를 상속 받아 온다.

// 1.mounting : 그려주고 컴포넌트가 시작될때 처음 한번 실행

// 2. updating : state가 업데이트 되고 UI가 그려질때

// 3. unmonting : 컴포넌트가 화면에서 사라질때

// UI 세팅 과정
// constructure -> render -> dom이 업데이트 되고 -> componentDidMount
// 이후 값이 변하면
// componentDidUpdate (state가 변하면 업데이트 해주는 함수)
export default class BlockClass extends Component {
    // constructor lifecycle 함수중 하나고 생성자
    // 컴포넌트가 생성되면 제일 처음으로 실행되는 함수
    constructor(props){
        // super() 자식 클래스가 생성될때 부모 클래스의 생성자를 참조하는 방법
        // react 클래스 컴포넌트의 부모 클래스는 recat.Component가 된다
        // super를 쓰는 이유는 super를 사용하기 전에는 constructor안에서 this를 쓸수가 없다
        // 그냥 결국 constructor 생성자 내부에서 this.props를 쓸려고 쓰는것
        super(props) 
        // 함수형에서 uerState함수를 썼지만
        // 클래스 컴포넌트에서는 state값을 객체로 사용한다.
        // 이 state값이 변경되면 다시 리렌더링
        // let[num.setNum] = useState(0)
        // let[name.setName] = useState("ㅎㅎ")
        // 주시할 값들
        this.state = {
            num:0,
            name:"ㅎㅎ"
        }
        console.log("constructor")
    }
    // 그려주고 한번 실행되는 함수 생성될때
    componentDidMount(){
        // 작업을 하면 여기서 주로 데이터 베이스 값을 가져온다.
        // componentDidMount이게 UI를 그려준 다음에 실행되는 함수이기 때문에 
        // UI를 그리기전에 데이터를 가져와봤자 넣어줄수가 없기 때문에
        // UI를 그려주고 가져와서 동작 시켜주기 위해서
        // componentDidMount lifecycle 함수를 이용한다.
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        // 전에 말했던 함수형에서 useState() 함수 class 컴포넌트에서는 setState()이함수
        // state 값이 변하는 것은 비동기라고 했는데 그 값이 변환뒤에 값을 update에서 확인할수있다.
        // 이 말은 state 값이 변하고 실행되는 함수라는 말이다.
        // state 값이 변하고 처리해야하는 작업은 전부 이곳에서 해주면 된다.
        console.log("componentDidUpdate")
        console.log(this.state)
    }
    add = ()=>{
        // class 컴포넌트에서 state 값을 변하게 하고 싶으면 setState() 함수를 이용해서 값을 수정한다
        // setState 함수의 매개변수 안에 객체에서 바꾸고 싶은 키와 값을 넣어준다.
        this.setState({num:this.state.num+1})
        // 객체의 값을 추가해주면 여러 state 값을 같이 수정할수 있다.
        // this.setState({num:this.state.num+1, name:"안뇽"})
        // console.log(this.state) 여기서 쓰면 숫자가 밀린다. 이유 : 비동기라서.
    }
  render() {
    console.log("render")
    return (
      <div>
          {/* class 컴포넌트에는 this가 계속 붙는다 이런 이유도 사람들이 함수형을 컴포넌트를 선호하는 이유
                귀찮고 쓸때없는 구문이 많기 때문에 */}
          {/* {this.state} */}
          {/* 함수를 전달할때도 하나의 클래스 안에 있기 떄문에 this.add로 함수를 넣어줘야한다. */}
          <button onClick={this.add}>눌러봐</button>
          {/* props값을 사용해보자 부모 컴포넌트에서 받아서 */}
          <div>{this.props.test}</div>
      </div>
    )
  }
}
