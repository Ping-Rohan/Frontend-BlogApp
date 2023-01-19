import axios from "axios";
import store from "../Redux/index";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const privateInstance = axios.create({
  baseURL: "http://localhost:5000",
});

privateInstance.interceptors.request.use((request) => {
  let accessToken = store.getState().user.accessToken;
  console.log(accessToken);
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});
export { privateInstance };
export default axiosInstance;
