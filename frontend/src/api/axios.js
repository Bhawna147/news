import axios from "axios";
export const axiosPrivate = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Credentials": true,
  },
  // withCredentials: true,
});

export const axiosPublic = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Credentials": true,
  },
});
