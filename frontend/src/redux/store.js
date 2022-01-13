import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import initState from "./initState";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import searchSagaWatcher from './saga/filterRestSaga';



const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))


sagaMiddleware.run(searchSagaWatcher)
export default store
