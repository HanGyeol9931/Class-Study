import MyCom from './components/Mycom';
// App.css 파일 가져온 구문
import "./App.css"
function App() {
  return (
    <div className='App'>
      <div className='content'>
        <div>
          <MyCom day="일" size="title" color="red"/>
          <MyCom day="월" size="title" />
          <MyCom day="화" size="title"/>
          <MyCom day="수" size="title"/>
          <MyCom day="목" size="title"/>
          <MyCom day="금" size="title"/>
          <MyCom day="토" size="title" color="blue"/>
        </div>
        <div className='toto'>
          <MyCom day="" color="red"/>
          <MyCom day="" />
          <MyCom day="" />
          <MyCom day="" />
          <MyCom day="1" />
          <MyCom day="2" />
          <MyCom day="3" color="blue"/>
        </div>
        <div className='toto'>
          <MyCom day="4" color="red"/>
          <MyCom day="5" />
          <MyCom day="6" />
          <MyCom day="7" />
          <MyCom day="8" />
          <MyCom day="9" />
          <MyCom day="10" color="blue"/>
        </div>
        <div className='toto'>
          <MyCom day="11" color="red"/>
          <MyCom day="12" />
          <MyCom day="13" />
          <MyCom day="14" />
          <MyCom day="15" />
          <MyCom day="16" />
          <MyCom day="17" color="blue"/>
        </div>
        <div>
          <MyCom day="18" color="red"/>
          <MyCom day="19" />
          <MyCom day="20" />
          <MyCom day="21" />
          <MyCom day="22" />
          <MyCom day="23" />
          <MyCom day="24" color="blue"/>
        </div>
        <div className='toto'>
          <MyCom day="25" color="red"/>
          <MyCom day="26" />
          <MyCom day="27" />
          <MyCom day="28" />
          <MyCom day="29" />
          <MyCom day="30" />
          <MyCom day="31" color="blue"/>
        </div>

      </div>
    </div>
  );
}

export default App;
