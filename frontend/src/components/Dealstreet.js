import React, { useEffect, useState } from "react";
import Mainnews from "./Main_News";
import Axios from "axios";
import "./interviews.css";
import { useNavigate } from "react-router-dom";

const Dealstreet = () => {
  const navigate = useNavigate();

  const [dealStreet, setdealStreet] = useState([]);
  useEffect(() => {
    getdealStreet();
  }, []);

  const getdealStreet = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/deal_street/6`
    ).then((res) => {
      // console.log(res.data.data);
      setdealStreet([...res.data.data]);
    });
    // console.log("all-news", dealStreet.length);
  };
  function fullpage(index, link) {
    if (link) {
      navigate("/video", { state: dealStreet[index] });
    } else {
      alert("You are not subscribed");
    }
  }
  return (
    <div>
      <h1 className="section-heading">DealStreet</h1>

      <div className="section-container">
        {dealStreet.length > 0 &&
          dealStreet.map((item, index) => {
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

export default Dealstreet;
