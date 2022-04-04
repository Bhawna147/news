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
import Axios from "axios";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/isAuth`, {})
      .then((res) => {
        sessionStorage.setItem("LoggedIn", res.data.isAuth);
        setLoggedIn(res.data.isAuth);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // for checking authentication
  // const isAuth = () => {
  //   if (sessionStorage.getItem("LoggedIn") === "true") {
  //     setLoggedIn(true);
  //     return true;
  //   } else {
  //     setLoggedIn(false);
  //     return false;
  //   }
  // };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />}></Route>
        <Route
          exaxct
          path="/signin"
          element={
            loggedIn === true ? (
              <Navigate replace to="/profile" />
            ) : (
              <Signin setLoggedIn={setLoggedIn} />
            )
          }
        ></Route>
        <Route
          exact
          path="/signup"
          element={
            loggedIn === true ? <Navigate replace to="/profile" /> : <Signup />
          }
        ></Route>
        <Route
          exact
          path="/profile"
          element={
            loggedIn === true ? (
              <Profile setLoggedIn={setLoggedIn} />
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
