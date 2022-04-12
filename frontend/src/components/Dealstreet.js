import React, { useEffect, useState } from "react";
import Maincolumn from "./Main_column";

import Axios from "axios";
import "./interviews.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

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
    <div id="columns">
      <h1 className="section-heading">DealStreet</h1>

      <div className="columns">
        <Carousel breakPoints={breakPoints}>
          {dealStreet.length > 0 &&
            dealStreet.map((item, index) => {
              return (
                <React.Fragment id={index}>
                  <div
                    onClick={() => fullpage(index, item.video_link)}
                    className="clickable"
                  >
                    <Maincolumn
                      classN="main-column-container-vertical"
                      item={{
                        head: item.heading,
                        img: item.thumbnail,
                        paid: item.paid,
                      }}
                      characters={150}
                    />
                  </div>
                </React.Fragment>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default Dealstreet;
