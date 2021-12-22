import React, { useEffect, useState } from "react";
import Mainnews from "./Main_News";
import Axios from "axios";
import "./interviews.css";
import { useNavigate } from "react-router-dom";
const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/all/6`
    ).then((res) => {
      // console.log(res.data.data);
      setNews([...res.data.data]);
    });
    // console.log("all-news", news.length);
  };
  function fullpage(index) {
    // alert(index);
    navigate("/video", { state: news[index] });
  }

  return (
    <div>
      <h1 className="section-heading">News</h1>
      <div className="section-container">
        {news.length > 0 &&
          news.map((item, index) => {
            return (
              <div onClick={() => fullpage(index)}>
                <Mainnews
                  classN="main-news-container-vertical"
                  item={{ head: item.heading, img: item.thumbnail }}
                  characters={200}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
