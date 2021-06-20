import { updateProfile } from "../../services/updateProfileService";

import {
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../types/types";

const updateProfileOnSuccess = (data) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
};

const updateProfileOnFail = (error) => {
  return {
    type: UPDATE_PROFILE_FAIL,
    payload: error,
  };
};

const updateProfileAsyncAction = (email) => {
  return async (dispatch) => {
    try {
      let user = await updateProfile(email);
      console.log("user:", user);
      if (user.status) {
        dispatch(updateProfileOnSuccess(user));
        localStorage.setItem("connectedUser", JSON.stringify(user.message));
      } else {
        dispatch(updateProfileOnFail(user.message));
      }
    } catch (e) {
      dispatch(updateProfileOnFail(e.message));
    }
  };
};

export {
  updateProfileOnSuccess,
  updateProfileOnFail,
  updateProfileAsyncAction,
};
