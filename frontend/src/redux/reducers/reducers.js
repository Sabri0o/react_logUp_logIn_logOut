import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types/types";

const defaultState = {
  registrationStatus: false,
  registrationMessage: "",
};

const signupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationStatus: action.payload.status,
        registrationMessage: action.payload.message,
      };
    case REGISTER_FAIL:
      return { ...state, registrationMessage: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
