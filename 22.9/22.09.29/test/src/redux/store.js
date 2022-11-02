import {combineReducers,createStore} from "redux"
import {test1,test2} from "./reducer"
const test3 = combineReducers({
    test1,
    test2
})
let store = createStore(test3)


export default store