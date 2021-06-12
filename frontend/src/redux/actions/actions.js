import register from "../../services/registerService";

const registerOnSuccess = () => {
  return {
    type: "REGISTER_SUCCESS",
  };
};

const registerOnFail = () => {
  return {
    type: "REGISTER_FAIL",
  };
};

const registerAsyncAction = (dispatch) => {
  return async () => {
    try {
      await register;
      dispatch(registerOnSuccess());
    } catch (e) {
      console.log(e.message);
      dispatch(registerOnFail());
    }
  };
};

module.exports = { registerOnFail, registerOnSuccess, registerAsyncAction };
