import './App.css';
import {img01,img02,img03} from "./img"
import Block from './BlockC';
import { useState } from 'react';
// import BlockClass from './BlockClass';
// import { BlockFn } from './BlockFn';

function App() {
  // 일단 간단한 가위바위보 만들자
  // 플렝이어 영역 하나 컴퓨터 영역 하나
  // 플레이어가 가위나 바위나 보를 선택해서 버튼을 누르면 
  // 플레이어가 선택한 이미지가 플레이어 영역에 보이고
  // 컴퓨터는 랜덤한 값을 이용해서 가위 바위 보 이미지가 보이게 만들고
  // 이 결과를 이겼는지 졌는지 보여주자

  // 1. 플레이어 컴퓨터 영역(컴포넌트로 정리)
  const select = {
    scissors :{
      name : "가위",
      img : img03
    },
    rock : {
      name:"바위",
      img : img02
    },
    paper : {
      name:"보",
      img : img01
    }
  }
  // 유저가 선택한 값을 담아놓고 주시해야한다 선택하면
  // 데이터가 바뀌기 때문어서 다시 그려줘야 하기 때문에(이미지가 변해야 한다)
  // 유저의 선택한 값을 담을 useState
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터의 선택 값을 담을 useState
  const [comSelect,setComSelect] = useState(null);
  // 승패 결과를 담아줄 useState
  const [result, setReslut] = useState("")
  // 컴퓨터는 버튼이 없다. 유저가 선택하면 컴퓨터는 랜덤으로 값이 전달되어야하는데
  // Math.ramdom() 랜덤 값을 받아올것이고
  // 받아온 값으로 위에만든 객체에서 값을 가져와야 하는데 
  // 객체에서 키값만 뽑아서 배열로 만들자
  // let arr = Object.keys(select)
  // arr 변수 안에 키값만 뽑아서 배열로 받아 준다.
  // let arr = Object.keys(select)
  // console.log(arr)
  function userClick(temp){
    setUserSelect(select[temp])
    //////////////////////////////////
    // Object.keys 함수를 사용해서 객체의 키값만 뽑아서
    // 배열을 반환 받는데 arr변수에 바인딩 넣어줬다
    let arr = Object.keys(select);
    // 랜덤한 인덱스 뽑자 근데 3개 0 1 2 중 하나
    // Math.floor 함수로 소수점 제외하고
    let comRandom = Math.floor(Math.random() * 3)
    // arr[comRandom] 얘는 랜덤한 키값이 뽑히는 것
    // select 객체에 값을 불러오는 방법이 select. 점찌곡 키값을 입력해서 가져오거나
    // select["문자열"] 가져오는 방법 두가지 인데 우리가 선택한 방법은 문자열로 전달해서
    // 값을 가져오는 방법
    console.log(arr[comRandom])
    setComSelect(select[arr[comRandom]])
    // 결과를 가지고 승패를 보여준다
    let player = select[temp];
    let compter = select[arr[comRandom]]
    // 1. 유저랑 컴퓨터랑 같으면 무승부
    // 2. 유저가 가위를 내면 컴퓨터가 이길려면 보 지면 주먹 바위
    // 3. 유저가 보를 내면 이기면 컴퓨터가 바위 지면 가위
    // 4. 유저가 바위내면 이기면 컴퓨터가 가위 지면 보
    if(player.name === compter.name){
      // 제일 처음에 무승부 조건을 거르고 시작
      setReslut("무승부")
    }
    else if(player.name === "가위"){
      let temp = compter.name === "보" ? "이겼다" : "졌다"
      setReslut(temp)
    }
    else if(player.name === "바위"){
      let temp = compter.name === "가위" ? "이겼다" : "졌다"
      setReslut(temp)
    }
    else if(player.name === "보"){
      let temp = compter.name === "바위" ? "이겼다" : "졌다"
      setReslut(temp)
    }
  }
  // 1. 우리가 만들어 놓은 객체의 값이 필요하기 때문에 userCilck 함수를 만들었고
  // 그 값을 저장해주는 userSelct값을 useState함수를 통래서 만들어 줬고

  // 2. 버튼을 클릭했을때 그 함수가 실행이 되고 state 값이 변하기 때문에
  // 다시 리렌더링 된다. 부모가 리렌더링 되었스니깐 자식 컴포넌트도 리렌더링된다.

  // Block에 우리는 userCilck를 실행하고 setUserSelect함수로 변경한
  // userSelect 값을 props로 넘겨 줬다.

  // Block에서는 props로 넘겨 받은 값을 사용해서 img의 경로를 받아서 이미지를
  // 보여줬다. 어떻게? 부모가 리렌더링 되었기때문에 자식도 변한 값이 리렌더링 된것
  return (
    <div>
      <div className="App">
        <Block data = {userSelect} name="유저" test = {result}/>
        <Block data = {comSelect} name="컴퓨터"test = {result}/>
        {/* <Block img={img02}/> */}
      </div>
      <div>
        <button onClick={()=>{userClick("scissors")}}>가위</button>
        <button onClick={()=>{userClick("rock")}}>바위</button>
        <button onClick={()=>{userClick("paper")}}>보</button>
      </div>
    </div>
  );
}

export default App;
