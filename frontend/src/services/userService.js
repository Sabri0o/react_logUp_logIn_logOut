import $ from "jquery";
const API_URL = "http://localhost:3001/api/";

const userInfo = JSON.parse(localStorage.getItem("connectedUser"));

const showUserContent = () => {
  return $.ajax({
    method: "GET",
    url: API_URL + "userBoard",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

export { showUserContent };
