import React from "react";
import Columns from "./components/Columns";
import Dealstreet from "./components/Dealstreet";
import Footer from "./components/Footer";
import Interviews from "./components/Interviews";
import Main from "./components/Main";
import News from "./components/News";
import BannerTop from "./components/BannerTop";

const Home = (props) => {
  return (
    <>
      <Main loggedIn={props.loggedIn} />
      <Columns />
      <News />
      <Dealstreet />
      <Interviews />
      <Footer />
      <BannerTop />
    </>
  );
};

export default Home;
