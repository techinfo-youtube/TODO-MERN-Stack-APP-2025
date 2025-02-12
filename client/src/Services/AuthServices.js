import axios from "axios";

const registerUser = (data) => {
  return axios.post("/user/register", data);
};

const loginUSer = (data) => {
  return axios.post("/user/login", data);
};

const AuthServices = { registerUser, loginUSer };

export default AuthServices;
