// react
// 리액트란 리액트를 쓰는이유

// 리액트는 페이스북에서 2011년에 만들었고 
// 그러니 리액트는 페이스북에서 제공해주는 라이브러리다.

// 리액트의 데이터 구조는 단반향 데이터 흐름을 가지고 있다.(리덕스)

// 리덕스는 인벤토리 저장소 같은 것
// 리액트의 랜더링
// 리액트는 뷰 view 보여주는거 view에 집중된 라이브러리

// 가상돔
// 1. 변화가 일어나면 변화된 버전의 가상돔으로 바꿔줌
// 데이터가 업데이트 되면 UI를 가상돔에 리랜더링 한다.(다시 그려줌)
// 2. 가상돔 끼리 비교
// 변화전에 가상돔과 변화된 가상돔을 비교해서 
// 3. 비교했을때 바뀐 부분만 
// 실제 돔에 리렌더링 적용한다.

// 리액트의 장점 ---------------------------------------------

// 일단 유명하고 많이 사용한다. 유명한 라이브러리

// 자바스크립트만으로 개발할때 보다 편하고 태그를 다루기 쉽다.

// 재활용서잉 높다

// 불편하게 태그 선택자를 사용할 일이 적다.

// html과 js파일이 많아질수록 관리하기가 힘든 부분은 보안

// 새로고침하지 않고 페이지를 동적으로 보여줄수 있다(모바일 앱처럼 웹을)
// 다른 페이지로 이동한것 처럼 눈속임으로 보여줄수 있다.

// 기본 자바스크립트가 가지고 있는 문제를 해결하기 위해 만들어 졌다.

// 위의 문제란 태그 선택자의 사용을 줄이기 위해

// JSX를 사용해서 html과 js를 합쳐서 컴포넌트로 만들수 있고 
// 사용하고 태그의 이름을 자유롭게 지울수 있다.

//JSX(문자열도 아니고 html도 아닌)(javaScript XML)(웹 응용 프로그램의 구조를 
// 만들기 위한 표준 마크업 언어 확장한 문법)

// html 파일과 js파일을 따로 만들 필요가 없다. 모든 파일을 js 파일로 만들수 있다.

// 리액트를 직접 설치해서 해보자
// 설치 명령어 

// npx creat-react-app 여기에 폴더 이름을 정해준다

// src에 가보면 idnex.js와 app.js가 있는데
// 여기서 app.js가 컴포넌트이다. index.js에서 가져와서
// 보여주고 있다
// 그리고 컴포넌트는 하나의 태그로 무조건 감싸서 반환해줘야 한다.

// 리액트에 기본 구서잉 되어있고 초기값
// app.js는 html과 js를 합쳐놓은 컴포넌트
// document.getElementById('root')이게 리액트가 동적으로
// 내용을 그려줄 위치
// ReactDOM.createRoot
// ReactDOM.createRoot(첫번째 매개변수 그려줄 컴포넌트, 그려줄 위치);


// public 폴더를 보면 index.html 파일이 있는데
// 리액트는 index.html 하나로 싱글 페이지 어플리케이션

// 페이지가 하나고 그 한개의 페이지에 정보만 동적으로 표현 해준다
// 어떻게 ? (자바스크립트가 바꿔주는것)
// 우리가 다른페이지로 이동할때마다 html,css,js 파일을 다불러왔는데
// 그럴 필요가 없다. 새로 고침도 필요없는 이유

// 편리한 익스텐션
// es7 react/redux/graphQL/react-native snippents
// 우리가 리액트를 작업을 하면서 리액트 키워드를 사용할수 있게 도와준다.
// rafce 등 여러가지가 있다.

// 리액트 사용이랑 컴포넌트 좀 친해지려고
// 달력 만들어보기 이쁘게