import React from "react";
import Mainnews from "./Main_News";
import "./interviews.css";

const News = () => {
  return (
    <div>
      <h1 className="heading">News</h1>

      <div className="interviews">
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

export default News;
