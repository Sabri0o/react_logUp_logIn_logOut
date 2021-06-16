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

const getAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: API_URL + "getAllUsers",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

const getAllSupervisors = () => {
  return $.ajax({
    method: "GET",
    url: API_URL + "getAllSupervisors",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

const addSupervisor = (email) => {
  console.log("addSupervisor data", email);
  return $.ajax({
    method: "PUT",
    data: { email: email },
    url: API_URL + "addSupervisor",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

const removeSupervisor = (email) => {
  console.log("removeSupervisor data", email);
  return $.ajax({
    method: "PUT",
    data: { email: email },
    url: API_URL + "removeSupervisor",
    headers: { "x-access-token": userInfo.accessToken },
  });
};

export {
  showAdminContent,
  getAllUsers,
  getAllSupervisors,
  addSupervisor,
  removeSupervisor,
};
