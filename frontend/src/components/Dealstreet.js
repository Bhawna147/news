import React from 'react'
import Mainnews from "./Main_News"
import "./interviews.css"

const Dealstreet = () => {
    return (
      <div>
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
}

export default Dealstreet
