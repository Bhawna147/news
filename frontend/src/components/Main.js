import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "./main.css";
import Axios from "axios";
function truncate(str) {
  return str.length > 10 ? str.substring(0, 150) + "..." : str;
}
const Main = () => {
  const navigate = useNavigate();
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    Latestnews();
  }, []);

  const Latestnews = async () => {
    await Axios.get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/news/all/8`
    ).then((res) => {
      console.log(res.data.data);
      setLatest([...res.data.data]);
    });
    console.log("latest", latest);
  };
  return (
    <>
      <Nav />

      <div className="top-heading">
        <h1 className="main-heading">Today's Top Stories</h1>
        <div className="top-heading-filler"></div>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
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
                    <p>{truncate(item.desc)}</p>
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
          <div className="top-news">
            <h4 className="top-news-heading">
              Politicians, clerics, envoys pay last respects to Gen Rawat ahead
              of funeral Politicians, clerics, envoys pay last respects to Gen
              Rawat
            </h4>
            <div
              className=" main-right-container"
              style={{
                backgroundImage: `url("https://c.ndtvimg.com/2021-12/mt9avqvg_chennai-airport-_625x300_01_December_21.jpg")`,
              }}
            ></div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
