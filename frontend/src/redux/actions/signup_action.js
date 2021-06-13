import signup from "../../services/signupService";

import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types/types";
const signupOnSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const signupOnFail = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};

const signupAsyncAction = (email, password) => {
  return async (dispatch) => {
    try {
      let newUser = await signup(email, password);
      dispatch(signupOnSuccess(newUser));
    } catch (e) {
      console.log(e.message);
      dispatch(signupOnFail(e.message));
    }
  };
};

export { signupOnFail, signupOnSuccess, signupAsyncAction };
