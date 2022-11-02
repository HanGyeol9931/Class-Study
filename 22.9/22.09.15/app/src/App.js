import './App.css';
import Com from "./components/Block"
import {img1,boom} from "./img"

function App() {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  return (
    <div className="App">
      {/* 배열의 개수만큼 반복하면서 컴포넌트 생성 및 props 전달 */}
      {arr.map((el)=> (<Com num={el}/>))}
      {/* <img src={img1} alt="" /> */}
      {/* <Com num = {0}/> */}
    </div>
  );
}
// 지뢰 찾기 만들기
export default App;
