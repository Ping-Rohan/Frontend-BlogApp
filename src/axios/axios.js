import axios from "axios";
import store from "../Redux";

axios.create({
  baseURL: "http://localhost:5000",
});

const privateInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

privateInstance.interceptors.request.use((request) => {
  let accessToken = store.getState().user.accessToken;
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});
export { privateInstance };
export default axios;
