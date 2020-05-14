import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-ebe20.firebaseio.com/"
});

export default instance;
