import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// import Main from "./components/Main";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AllNews from "./components/AllNews";
import News from "./components/News";
import Interviews from "./components/Interviews";
import Dealstreet from "./components/Dealstreet";
import Columns from "./components/Columns";
import AllInterviews from "./components/AllInterviews";
import AllDealstreet from "./components/AllDealstreet";
import AllColumns from "./components/AllColumns";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Video from "./components/Video";
import Home from "./Home";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import useAuth from "./hooks/useAuth";
import useRefreshToken from "./hooks/useRefreshToken";
const App = () => {
  const { auth, setAuth } = useAuth();
  const Axios = useAxiosPrivate();
  const refresh = useRefreshToken();
  React.useEffect(() => {
    (async () => {
      if (sessionStorage.getItem("refresh_token")) {
        refresh();
        Axios.get(`/api/customer/me`)
          .then((res) => {
            setAuth((prev) => {
              return { ...prev, user: res.data };
            });
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    })();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home loggedIn={auth.user !== undefined} />}
        ></Route>
        <Route
          exaxct
          path="/signin"
          element={
            auth.user !== undefined ? (
              <Navigate replace to="/profile" />
            ) : (
              <Signin />
            )
          }
        ></Route>
        <Route
          exact
          path="/signup"
          element={
            auth.user !== undefined ? (
              <Navigate replace to="/profile" />
            ) : (
              <Signup />
            )
          }
        ></Route>
        <Route
          exact
          path="/profile"
          element={
            auth.user !== undefined ? (
              <Profile />
            ) : (
              <Navigate replace to="/signin" />
            )
          }
        />
        <Route exact path="/video" element={<Video />}></Route>
        <Route exact path="/news" element={<News />}></Route>
        <Route exact path="/allnews" element={<AllNews />}></Route>
        <Route exact path="/columns" element={<Columns />}></Route>
        <Route exact path="/dealstreet" element={<Dealstreet />}></Route>
        <Route exact path="/interviews" element={<Interviews />}></Route>
        <Route exact path="/allcolumns" element={<AllColumns />}></Route>
        <Route exact path="/alldealstreet" element={<AllDealstreet />}></Route>
        <Route exact path="/allinterviews" element={<AllInterviews />}></Route>
        <Route exact path="/footer" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
