import axios from "axios";
export const url = "http://localhost:3000";

const API = axios.create({
  baseURL: url,
});

export default API;
