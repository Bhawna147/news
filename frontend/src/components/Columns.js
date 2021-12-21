import React from "react";
import "./interviews.css";
import Carousel from "react-elastic-carousel";
import Mainnews from "./Main_News";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Columns = () => {
  return (
    <div id="columns">
      <h1 className="section-heading">Columns</h1>

      <div className="columns">
        <Carousel
          breakPoints={breakPoints}
          // enableAutoPlay={true}
          // autoPlaySpeed={2000}
        >
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />

          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />

          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
          <Mainnews classN="main-news-container-vertical" color="white" />
        </Carousel>
      </div>
    </div>
  );
};

export default Columns;
