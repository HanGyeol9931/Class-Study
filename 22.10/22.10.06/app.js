// 리덕스 미들웨어
// 리덕스는 배웠고 리덕스는 state를 관리해주는 저장소
// 리덕스의 플로우 차트
// UI -> Dispatch -> Action  -> Store(Reducer)(state) -> UI
// 리덕스는 동기적으로 처리가 되는데 변경 값이 있으면 바로 동작해서 
// API같은 데이터를 불러올때 비동기 작업이 힘들다...
// API 요청을 해서 데이터를 받은 이후에 작업을 해야하기 때문에
// 리덕스 미들웨어를 사용한다.
// UI -> Dispatch -> Action -> Middleware -> Store(Reducer)(state) -> UI

// 미들웨어는 양 쪽을 연결해주고 데이터를 주고 받을수 있도록 중간에서
// 매개 역할을 담당하는 소프트웨어
// 컴퓨터에 있는 프로세서들 어떤 서비스를 사용할수 있도록
// 연결해주는 소프트웨어를 말한다.

// 리덕스 미들웨어에는 saga, thunk
// redux-thunk 적용하기도 쉽고 다른 서비스에서도 적용이 편해서
// 많이 사용한다.

// 설치 명령어
// npm i redux-thunk

// 리덕스 환경 만들어보자

// redux 저장소를 만들고 만드는 와중 리듀서 함수를 적용시켜준다.
// react-redux 만들어진 저장소를 사용하는데 편하게 쓸수 있게 리액트 훅 함수를 
// 지원해주는것

// 1. 리덕스 설치하고 리덕스 리액트 설치하고
// 2. 저장소 js 만들고 createStore 저장소 만들고
// 3. 리듀서 js 만들고 만든 저장소에 매개변수로 전달
// 4. 완성된 저장소를 index.js에 가져와서 App컴포넌트에 적용

// 리덕스를 사용할때 유용한 툴 reudex devtools
// action으로 변경한 state값을 바로바로 볼수 있다.
// npm 설치 명령어
// npm install redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension';
// 설치하고 미들웨어를 composeWithDevTools 함수로 감싸주면 된다.