import signupReducer from "../reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(signupReducer, applyMiddleware(thunk));
export default store;
