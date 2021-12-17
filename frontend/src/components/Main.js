import React from "react";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Main = () => {
  const navigate = useNavigate();
  const arr = [
    " 1. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 2. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 3. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 4. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 5. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
  ];
  return (
    <>
      <Nav />

      <div className="top-heading">
        <h1 className="main-heading">Today's Top Stories</h1>
        <div className="top-heading-filler"></div>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        <button onClick={() => navigate("/signup" )}>Sign Up</button>
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
            <div className="latest-news-item">
              <p>
                Politicians, clerics, envoys pay last respects to Gen Rawat
                ahead of funeral
              </p>
            </div>
            <div className="latest-news-item">
              <p>
                Politicians, clerics, envoys pay last respects to Gen Rawat
                ahead of funeral
              </p>
            </div>
            <div className="latest-news-item">
              <p>
                Politicians, clerics, envoys pay last respects to Gen Rawat
                ahead of funeral
              </p>
            </div>
            <div className="latest-news-item">
              <p>
                Politicians, clerics, envoys pay last respects to Gen Rawat
                ahead of funeral
              </p>
            </div>
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
              of funeral
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
