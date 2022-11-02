// css선택자

//태그 선택자
//div {color: red}이렇게 하면은 모든 div 선택자
//p {color: black}

//ID 셀럭터
// #name {color : red} 이렇게 쓰면은 id 어트리뷰트가 name인 선택자
// ID는 고유 이름만

//클래스 셀렉터
//.content{color : red;} 클래스는 동일한 이름을 가질수 있다.
//content 클래스를 가지고 있는 모든 요소

//어트리뷰트 셀렉터
//div[href] {color : red;} div에 href가 있는 모든 요소

//div[target="_blank"] {color : red;} div에 target이 있는데 값이 _black인 요소

//자식 선택자
//.content .name { color : red;} content클래스의 자식요소인데 name 클래스를가지고 있는 요소


//.content > .name { color : red;} content클래스의 자식요소인데 부모 바로 아래 자식 요소

//형제 셀렉터 
//.content + .content2 { color : red;} content클래스의 같은레벨의 형제 선택 요소

//가상 클래스 셀렉터
//a:hover { color : red;} a에 마우스를 올렸을때 일어나는 스타일 

//input:focus {color : red;} input이 포커스 상태일떄 일어나는 스타일

//다수의 클래스 선택자
//.content.active { color : red;} content클래스도 가지고 있고 active클래스도 가지고 있는 요소