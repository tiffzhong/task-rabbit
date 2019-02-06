import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import clientReducer from "../ducks/clientReducer";
import taskerReducer from "../ducks/taskerReducer";

const reducer = combineReducers({
  tasker: taskerReducer,
  client: clientReducer
});

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware));

export default store;
