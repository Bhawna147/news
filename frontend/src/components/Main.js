import React from "react";
import Nav from "./Nav";
// import
// import { Container , Row, Col } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";
// import Mainnews from "./Main_News";

const Main = () => {
  const arr = [
    " 1. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 2. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 3. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 4. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
    " 5. Politicians, clerics, envoys pay last respects to Gen Rawat ahead of funeral",
  ];
  return (
    <div>
      <Nav />

      <h1 className="main-heading">Today's Top Stories</h1>

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

            <button class="latest-news-btn"> View all</button>
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
    </div>
  );
};

export default Main;
