import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Mainnews from "./Main_News";
import "./interviews.css";
import { useNavigate } from "react-router-dom";

const Interviews = () => {
  const Axios = useAxiosPrivate();
  const navigate = useNavigate();

  const [interview, setinterview] = useState([]);
  useEffect(() => {
    getinterview();
  }, []);

  const getinterview = async () => {
    await Axios.get(`/api/news?section=interviews&offset=0&limit=10`).then(
      (res) => {
        // console.log(res.data.data);
        setinterview([...res.data.results]);
      }
    );
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
