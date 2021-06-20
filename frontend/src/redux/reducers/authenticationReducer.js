import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../types/types";

const connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
const defaultState = {
  registrationStatus: false,
  registrationMessage: "",
  loginStatus: connectedUser ? true : false,
  loginMessage: connectedUser ? connectedUser : null,
  updateProfileStatus: false,
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
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfileStatus: action.payload.status,
        loginMessage: action.payload.message,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        updateProfileStatus: false,
        updateProfileMessage: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        updateProfileStatus: false,
        loginStatus: false,
        loginMessage: null,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
