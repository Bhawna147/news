import React, { useEffect, useState } from "react";
import Mainnews from "./Main_News";
import Axios from "axios";
import Nav from "./Nav";
import "./interviews.css";
import { useNavigate } from "react-router-dom";

const AllNews = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    await Axios.get(`/api/news/all/1000`).then((res) => {
      // console.log(res.data.data);
      setNews([...res.data.data]);
    });
    // console.log("all-news", news.length);
  };
  function fullpage(index, link) {
    if (link) {
      navigate("/video", { state: news[index] });
    } else {
      alert("You are not subscribed");
    }
  }
  return (
    <div>
      <Nav />
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
        {/* <Mainnews classN="main-news-container-vertical" /> */}
      </div>
    </div>
  );
};

export default AllNews;
