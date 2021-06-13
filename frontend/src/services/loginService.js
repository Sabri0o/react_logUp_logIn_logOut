import $ from "jquery";
const API_URL = "http://localhost:3001/api/signIn";

const login = (email, password) => {
  let data = {
    email: email,
    password: password,
  };
  return $.post(API_URL, data);
};

export default login;
