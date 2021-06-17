import $ from "jquery";
const API_URL = "http://localhost:3001/api/";

const userInfo = JSON.parse(localStorage.getItem("connectedUser"));

const showSupervisorContent = () => {
  return $.ajax({
    method: "GET",
    url: API_URL + "supervisorBoard",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

export { showSupervisorContent };
