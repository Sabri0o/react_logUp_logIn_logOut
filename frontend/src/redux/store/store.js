import authenticationReducer from "../reducers/authenticationReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(authenticationReducer, applyMiddleware(thunk));
export default store;
