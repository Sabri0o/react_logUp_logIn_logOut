import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../types/types";

const defaultState = {
  registrationStatus: false,
  registrationMessage: "",
  loginStatus: false,
  loginMessage: "",
};

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationStatus: action.payload.status,
        registrationMessage: action.payload.message,
      };
    case REGISTER_FAIL:
      return { ...state, registrationMessage: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: action.payload.status,
        loginMessage: action.payload.message,
      };
    case LOGIN_FAIL:
      return { ...state, loginMessage: action.payload.message };
    default:
      return state;
  }
};

export default authenticationReducer;
