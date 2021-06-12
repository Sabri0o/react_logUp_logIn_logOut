import register from "../../services/registerService";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
const registerOnSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const registerOnFail = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};

const registerAsyncAction = (email, password) => {
  return async (dispatch) => {
    try {
      let newUser = await register(email, password);
      dispatch(registerOnSuccess(newUser));
    } catch (e) {
      console.log(e.message)
      dispatch(registerOnFail(e.message));
    }
  };
};

export { registerOnFail, registerOnSuccess, registerAsyncAction };
