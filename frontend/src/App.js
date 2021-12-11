import React from "react";
// import { Route, Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import News from "./components/News";
import Interviews from "./components/Interviews";
import Dealstreet from "./components/Dealstreet";
import Columns from "./components/Columns";
import Footer from "./components/Footer";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exaxct path="/signin" element={<Signin />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/news" element={<News />}></Route>
        <Route exact path="/columns" element={<Columns />}></Route>
        <Route exact path="/dealstreet" element={<Dealstreet />}></Route>
        <Route exact path="/interviews" element={<Interviews />}></Route>
        <Route exact path="/footer" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
