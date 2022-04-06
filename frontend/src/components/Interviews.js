import React, { useEffect, useState } from "react";
// import Axios from "axios";
import Mainnews from "./Main_News";
import "./interviews.css";
import { useNavigate } from "react-router-dom";
import data from "./newss.js";

const Interviews = () => {
  const navigate = useNavigate();

  const [interview, setinterview] = useState([]);
  useEffect(() => {
    getinterview();
  }, []);

  const getinterview = async () => {
    // await Axios.get(
    //   `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/interview/6`
    // ).then((res) => {

    // });
    setinterview([...data]);
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
    <>
      <h1 className="section-heading">Interviews</h1>

      <div className="section-container">
        {interview.length > 0 &&
          interview.map((item, index) => {
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
    </>
  );
};

export default Interviews;
