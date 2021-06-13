import login from "../../services/loginService";
import {LOGIN_FAIL,LOGIN_SUCCESS} from "../types/types"

const LoginOnSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const LoginOnFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

const loginAsyncAction = (email, password) => {
  return async (dispatch) => {
    try {
      let userConnected = await login(email, password);
      dispatch(LoginOnSuccess(userConnected));
    } catch (e) {
      console.log(e.message);
      dispatch(LoginOnFail(e.message));
    }
  };
};

module.exports = { loginAsyncAction, LoginOnFail, LoginOnSuccess };
