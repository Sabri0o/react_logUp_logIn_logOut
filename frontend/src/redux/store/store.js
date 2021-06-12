import registerReducer from "../reducers/reducers";

import { createStore } from "redux";

const store = createStore(registerReducer);
export default store;
