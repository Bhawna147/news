import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Mainnews from "./Main_News";
import Axios from "axios";
import "./interviews.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Columns = () => {
  const [column, setcolumn] = useState([]);
  useEffect(() => {
    getcolumn();
  }, []);

  const getcolumn = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/column/20`
    ).then((res) => {
      // console.log(res.data.data);
      setcolumn([...res.data.data]);
    });
    // console.log("all-news", column.length);
  };
  return (
    <div id="columns">
      <h1 className="section-heading">Columns</h1>

      <div className="columns">
        <Carousel breakPoints={breakPoints}>
          {column.length > 0 &&
            column.map((item, index) => {
              return (
                <Mainnews
                  classN="main-news-container-vertical"
                  item={{ head: item.heading, img: item.thumbnail }}
                  characters={200}
                />
              );
            })}
        
        </Carousel>
      </div>
    </div>
  );
};

export default Columns;
