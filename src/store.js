import {applyMiddleware, createStore, compose} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"
import rootSaga from "./sagas/index"
import thunk from "redux-thunk"


const initialState = {}

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk,sagaMiddleware]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))) 


sagaMiddleware.run(rootSaga)

export default store;