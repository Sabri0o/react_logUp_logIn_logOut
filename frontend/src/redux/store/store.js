import registerReducer from "../reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(registerReducer, applyMiddleware(thunk));
export default store;
