import axios from "axios"
// axios
// axios는 브라우저
// 자바스크립트에 fetch가 있는데 프레임워크에선 ajax를 구현할때
// axios를 쓰는 편이다. 속성은 url은 필수고 나머지는 전달을 안해도 상관없다 옵션
// medhod는 지정안하면 기본이 디폴트가 Get방식

// axios 설치 명령어
// npm i axios
// Get 요청 방식
// 

function getWeather(name){
    // thunk가 해주느 일이 Action Createors라는 함수를 만들어 주는것
    // Action Createors함수는 함수를 반환한다.
    // thunk는 dispatch를 딜레이 시켜주는 역할
    // 
    // action 함수는 함수를 반환한다.
    // dispatch랑getState 둘다 함수이다.
    return async(dispatch,getState) =>{
        const data = await axios({url:`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a518ac821866c4aab5c088ad4a9b6f16`})
        // console.log(data)
        // getState이게 뭔지
        // console.log(getState());
        dispatch({type:"GET_WREATHER_DATA",payload: data})
        // getState이게 뭔지
        // console.log(getState());
        // getState() 함수는 store 저장소에 있는 state 객체를 반환해준다.
    }

}
export const weather = {getWeather}