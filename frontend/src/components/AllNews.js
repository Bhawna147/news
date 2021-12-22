import React, { useEffect, useState } from "react";
import Mainnews from "./Main_News";
import Axios from "axios";
import Nav from "./Nav";
import "./interviews.css";

const AllNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/all/1000`
    ).then((res) => {
      // console.log(res.data.data);
      setNews([...res.data.data]);
    });
    // console.log("all-news", news.length);
  };
  return (
    <div>
      <Nav />
      <h1 className="section-heading">News</h1>

      <div className="section-container">
        {news.length > 0 &&
          news.map((item, index) => {
            return (
              <Mainnews
                classN="main-news-container-vertical"
                item={{ head: item.heading, img: item.thumbnail }}
                characters={200}
              />
            );
          })}
        {/* <Mainnews classN="main-news-container-vertical" /> */}
      </div>
    </div>
  );
};

export default AllNews;
