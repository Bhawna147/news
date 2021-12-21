import React from "react";
import Columns from "./components/Columns";
import Dealstreet from "./components/Dealstreet";
import Footer from "./components/Footer";
import Interviews from "./components/Interviews";
import Main from "./components/Main";
import News from "./components/News";

const Home = () => {
  return (
    <>
      <Main />
      <Columns />
      <News />
      <Dealstreet />
      <Interviews />
      <Footer />
    </>
  );
};

export default Home;
