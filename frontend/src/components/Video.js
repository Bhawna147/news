import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";
import "./video.css";
import ReactPlayer from "react-player";

const Video = () => {
  const { state } = useLocation();
  // console.log(state);

  return (
    <>
      <div className="video-container">
        <Nav />

        <div className="video-display">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={state.video_link}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>

        <div className="video-content">
          <p>{state.full_story}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
