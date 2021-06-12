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

const registerAsyncAction = (email,password) => {
  return async (dispatch) => {
    try {
      let newUser = await register(email,password);
      console.log(newUser)
      dispatch(registerOnSuccess());
    } catch (e) {
      console.log(e.message);
      dispatch(registerOnFail());
    }
  };
};

export  { registerOnFail, registerOnSuccess, registerAsyncAction };
