const defaultState = { signUpDone: false };

const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return { signUpDone: true };
    default:
      return state;
  }
};

export default registerReducer;
