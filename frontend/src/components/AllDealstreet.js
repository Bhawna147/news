import React from "react";
import Mainnews from "./Main_News";
import "./interviews.css";
import Nav from "./Nav";

const Dealstreet = () => {
  return (
    <div>
      <Nav />
      <h1 className="section-heading">DealStreet</h1>

      <div className="section-container">
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
      </div>
    </div>
  );
};

export default Dealstreet;
