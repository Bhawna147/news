import React, { useEffect, useState } from "react";
import Mainnews from "./Main_News";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "./interviews.css";
import { useNavigate } from "react-router-dom";
// import data from "./newss.js";

const News = () => {
  const Axios = useAxiosPrivate();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    await Axios.get(`/api/news?section=news&offset=0&limit=10`).then((res) => {
      setNews([...res.data.results]);
    });
    // setNews([...data]);
  };
  function fullpage(index, link) {
    if (link) {
      navigate("/video", { state: news[index] });
    } else {
      alert("not subscribed");
    }
  }

  return (
    <div>
      <h1 className="section-heading">News</h1>
      <div className="section-container">
        {news.length > 0 &&
          news.map((item, index) => {
            return (
              <div onClick={() => fullpage(index, item.video_link)}>
                <Mainnews
                  classN="main-news-container-vertical"
                  item={{
                    head: item.heading,
                    img: item.thumbnail,
                    paid: item.paid,
                  }}
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
