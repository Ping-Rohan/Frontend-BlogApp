import axios from "axios";

axios.create({
  baseURL: `https://backend-blog-omega.vercel.app`,
});

export default axios;
