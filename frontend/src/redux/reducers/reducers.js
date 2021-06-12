import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const defaultState = {
  registrationStatus: false,
  registrationMessage: "",
};

const registerReducer = (state = defaultState, action) => {
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

export default registerReducer;
