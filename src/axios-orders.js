import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-74667.firebaseio.com/",
});

export default instance;
