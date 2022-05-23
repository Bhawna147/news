import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"] && auth.access !== undefined) {
          config.headers["Authorization"] = `JWT ${auth?.access}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            const newAccessToken = await refresh();
            prevRequest.headers["Authorization"] = `JWT ${newAccessToken}`;
            setAuth((prev) => {
              return { ...prev, access: newAccessToken };
            });
            return axiosPrivate(prevRequest);
          } catch (error) {
            // navigate("/signin");
            return Promise.reject(error);
          }
        } else if (error?.response?.status === 401 && prevRequest.sent) {
          sessionStorage.removeItem("refresh_token");
          setAuth({});
          // navigate("/signin");
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosPrivate;
};

export default useAxiosPrivate;
