import $ from "jquery";
const API_URL = "http://localhost:3001/api/signUp";

const signup = (email, password) => {
  let data = {
    email: email,
    password: password,
  };
  return $.post(API_URL, data);
};

export default signup;
