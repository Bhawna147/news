import React from "react";
import Mainnews from "./Main_News";
import "./interviews.css";
import Nav from "./Nav";

const AllNews = () => {
  return (
    <div>
      <Nav />
      <h1 className="section-heading">News</h1>

      <div className="section-container">
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        <Mainnews classN="main-news-container-vertical" />
        {/* <Mainnews classN="main-news-container-vertical" /> */}
      </div>
    </div>
  );
};

export default AllNews;
