import $ from "jquery";
const API_URL = "http://localhost:3001/api/";

const userInfo = JSON.parse(localStorage.getItem("connectedUser"));

const showAdminContent = () => {
  return $.ajax({
    method: "GET",
    url: API_URL + "adminBoard",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

const showAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: API_URL + "getAllUsers",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

export { showAdminContent, showAllUsers };
