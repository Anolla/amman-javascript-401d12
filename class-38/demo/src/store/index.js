import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from './todo';
import thunk from './middleware/thunk'

let reducers = combineReducers({ todoReducer });

const store = () =>
    createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
