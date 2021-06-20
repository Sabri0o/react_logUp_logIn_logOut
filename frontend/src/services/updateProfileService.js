import $ from "jquery";
const API_URL = "http://localhost:3001/api/";

const userInfo = JSON.parse(localStorage.getItem("connectedUser"));

const updateProfile = (email) => {
  let data = {
    email: email,
  };
  return $.ajax({
    method: "PUT",
    data: data,
    url: API_URL + "updateProfile",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

export { updateProfile };
