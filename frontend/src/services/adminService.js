import $ from "jquery";
const API_URL = "http://localhost:3001/api/adminBoard";

const userInfo = JSON.parse(localStorage.getItem("connectedUser"));

const showAdminContent = () => {
  return $.ajax({
    method: "GET",
    url: API_URL,
    headers: { "x-access-token": userInfo.accessToken },
  });
};

export default showAdminContent;
