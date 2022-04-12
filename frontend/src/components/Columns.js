import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Maincolumn from "./Main_column";

import Axios from "axios";
import "./interviews.css";
import { useNavigate } from "react-router-dom";
// import data from "./newss.js";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Columns = () => {
  const navigate = useNavigate();

  const [column, setcolumn] = useState([]);
  useEffect(() => {
    getcolumn();
  }, []);

  const getcolumn = async () => {
    await Axios.get(`/api/news/section/column/20`).then((res) => {
      setcolumn([...res.data.data]);
    });
  };
  function fullpage(index, link) {
    if (link) {
      navigate("/video", { state: column[index] });
    } else {
      alert("You are not subscribed");
    }
  }
  return (
    <div id="columns">
      <h1 className="section-heading">Columns</h1>

      <div className="columns">
        <Carousel breakPoints={breakPoints}>
          {column.length > 0 &&
            column.map((item, index) => {
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

export default Columns;
