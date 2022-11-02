import {createStore,applyMiddleware} from "redux"
import thunk from  "redux-thunk"
import ruducer from "./reducer"


const store  = createStore(ruducer,applyMiddleware(thunk))

export default store;
