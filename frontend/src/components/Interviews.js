import React, { useEffect, useState } from "react";
import Mainnews from "./Main_News";
import Axios from "axios";
import "./interviews.css";

const Interviews = () => {
  const [interview, setinterview] = useState([]);
  useEffect(() => {
    getinterview();
  }, []);

  const getinterview = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/interview/6`
    ).then((res) => {
      console.log(res.data.data);
      setinterview([...res.data.data]);
    });
    console.log("all-news", interview.length);
  };
  return (
    <>
      <h1 className="section-heading">Interviews</h1>

      <div className="section-container">
        {interview.length > 0 &&
          interview.map((item, index) => {
            return (
              <Mainnews
                classN="main-news-container-vertical"
                item={{ head: item.heading, img: item.thumbnail }}
                characters={200}
              />
            );
          })}
      </div>
    </>
  );
};

export default Interviews;
