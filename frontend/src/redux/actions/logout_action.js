import logoutService from "../../services/logoutService";
import { LOGOUT } from "../types/types";

const logout = () => {
  return {
    type: LOGOUT,
  };
};

const logOutAction = () => {
  return (dispatch) => {
    logoutService();
    dispatch(logout());
  };
};

export default logOutAction;
