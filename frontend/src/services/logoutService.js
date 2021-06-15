const logoutService = () => {
  localStorage.removeItem("connectedUser");
};

export default logoutService;
