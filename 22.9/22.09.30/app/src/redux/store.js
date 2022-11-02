import {combineReducers,createStore} from "redux"
import {JoinReducer,LoginReducer,BorderReducer} from "./reducer"
const test3 = combineReducers({
    JoinReducer,
    LoginReducer,
    BorderReducer
})
let store = createStore(test3)


export default store