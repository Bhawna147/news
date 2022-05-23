import { axiosPublic } from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    return await new Promise((resolve, reject) => {
      axiosPublic
        .post("/auth/jwt/refresh", {
          withCredentials: true,
          refresh: sessionStorage.getItem("refresh_token"),
        })
        .then((res) => {
          setAuth((prev) => {
            return { ...prev, access: res.data.access };
          });
          resolve(res.data.access);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  };
  return refresh;
};

export default useRefreshToken;
