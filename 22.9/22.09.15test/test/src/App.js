import './App.css';
import Com from "./components/Block"


function App() {
  const randomnum = []
  for (let i = 1; i <= 5; i++) {
    let a = Math.floor(Math.random()*24+1)
    while(randomnum.includes(a)) {
      a = Math.floor(Math.random()*24+1)
    }
    // console.log(a)
    randomnum.push(a)
  }

  // console.log(randomnum)
  const arr = []
  for (let i = 1; i <= 25; i++) {
    arr.push(i)
  }
  return (
    <div className="App">
      {arr.map((el)=> (<Com num={el} randomnum={randomnum}/>))}
      <button id='return' >다시하기</button>
    </div>
  );
}
// 지뢰 찾기 만들기
export default App;
