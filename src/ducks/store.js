import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import clientReducer from "../ducks/clientReducer";
import taskerReducer from "../ducks/taskerReducer";
import messagesReducer from '../ducks/messagesReducer';

const reducer = combineReducers({
  tasker: taskerReducer,
  client: clientReducer,
  messages: messagesReducer
});

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware));

export default store;
