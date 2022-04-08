import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BannerTop from "./BannerTop";
import "./main.css";
import Axios from "axios";
function truncate(str, length) {
  return str.length > 10 ? str.substring(0, length) + "..." : str;
}
const Main = (props) => {
  const navigate = useNavigate();
  const [latest, setLatest] = useState([]);
  const [channel, setLatestchannel] = useState([]);

  console.log(props);
  // const [loggedIn, setLoggedIn] = useState(false);

  function Example(props) {
    return (
      <Carousel
        indicators={false}
        navButtonsAlwaysInvisible={true}
        animation={"fade"}
        duration={800}
        interval={3000}
      >
        {channel.length > 0 &&
          channel.map((item, i) => <Item key={i} item={item} />)}
      </Carousel>
    );
  }

  function Item(props) {
    return (
      <div className="top-news">
        <h4 className="top-news-heading">{props.item.heading}</h4>
        <div
          className=" main-right-container"
          style={{
            backgroundImage: `url("${props.item.thumbnail}")`,
          }}
        ></div>
      </div>
    );
  }

  useEffect(() => {
    Latestnews();
    Latestchannel();
  }, []);

  const Latestnews = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/all/8`
    ).then((res) => {
      setLatest([...res.data.data]);
    });
  };
  const Latestchannel = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/section/channel/10`
    ).then((res) => {
      setLatestchannel([...res.data.data]);

    });
  };
  return (
    <>
      <BannerTop/>
      <Nav />

      <div className="top-heading">
        <h1 className="main-heading">Today's Top Stories</h1>
        <div className="top-heading-filler"></div>
        {props.loggedIn === false ? (
          <div>
            <button className="sign-button" onClick={() => navigate("/signin")}>
              Sign In
            </button>
            <button
              className="signup-button"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <button
            className="account-button"
            onClick={() => navigate("/profile")}
          >
            Account
          </button>
        )}
      </div>

      <Row className="main">
        <Col
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="main-left"
          style={{ padding: "0px" }}
        >
          <div className="latest-news">
            <h3 className="latest-news-heading">Latest News</h3>
            {latest.length > 0 &&
              latest.slice(0, 4).map((item, index) => {
                return (
                  <div className="latest-news-item" key={index}>
                    <p>{truncate(item.desc, 150)}</p>
                  </div>
                );
              })}
          </div>
        </Col>

        <Col
          lg={8}
          md={12}
          sm={12}
          xs={12}
          className="main-right"
          style={{ padding: "0px" }}
        >
          <Example />
        </Col>
      </Row>
    </>
  );
};

export default Main;
