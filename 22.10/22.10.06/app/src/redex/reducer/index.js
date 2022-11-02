// redux에서 지원해주는 함수
// 리듀서 함수를 합쳐준다 하나로
// combineReducers() 함숭레 객체로 전달하면 끝
// 객체로 전달하면 그냥 몇개가 있던 합쳐준다 리듀서 함수를
import { combineReducers } from "redux";
import login from './login'
import weather from "./weater"


const rootReducer = combineReducers({
    login,
    weather
})

export default rootReducer;

