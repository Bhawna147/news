import React, { useEffect, useState } from "react";
import Axios from "axios";

import Carousel from "react-elastic-carousel";
import Maincolumn from "./Main_column";
import "./interviews.css";
import { useNavigate } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Interviews = () => {
  const navigate = useNavigate();

  const [interview, setinterview] = useState([]);
  useEffect(() => {
    getinterview();
  }, []);

  const getinterview = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/interview/6`
    ).then((res) => {
      // console.log(res.data.data);
      setinterview([...res.data.data]);
    });
    // console.log("all-news", interview.length);
  };
  function fullpage(index, link) {
    if (link) {
      navigate("/video", { state: interview[index] });
    } else {
      alert("You are not subscribed");
    }
  }
  return (
    <div id="columns" className="interviewBox">
      <h1 className="section-heading">Interview</h1>

      <div className="columns">
        <Carousel breakPoints={breakPoints}>
          {interview.length > 0 &&
            interview.map((item, index) => {
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

export default Interviews;
