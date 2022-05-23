import axios from "axios";
export const axiosPrivate = axios.create({
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Credentials": true,
  },
  // withCredentials: true,
});

export const axiosPublic = axios.create({
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Credentials": true,
  },
});
