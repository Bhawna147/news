import React from "react";
import Mainnews from "./Main_News";
import "./interviews.css";

const Interviews = () => {
  return (
    <>
      <h1 className="section-heading">Interviews</h1>

      <div className="section-container">
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
        <Mainnews classN="main-news-container-horizontal" />
      </div>
    </>
  );
};

export default Interviews;
