import React, { useEffect, useState } from "react";
import Axios from "axios";
import Mainnews from "./Main_News";
import "./interviews.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Interviews = () => {
  const navigate = useNavigate();

  const [interview, setinterview] = useState([]);
  useEffect(() => {
    getinterview();
  }, []);

  const getinterview = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/interview/1000`
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
    <>
      <Nav />
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
