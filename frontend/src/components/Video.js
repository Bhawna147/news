import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";
import "./video.css";

const Video = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div className="video-container">
        <Nav />

        <div
          className="video-display"
          // style={{
          //   background: `url("${state.video_link}")`,
          // }}
        >
          <video className="videoTag" autoPlay loop muted>
            <source
              src="https://www.youtube.com/watch?v=uvOx8y7Ne5k"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="video-content">
          <p>{state.full_story}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
