import React, { useEffect, useState } from "react";
import Axios from "axios";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import HomeIcon from "@mui/icons-material/Home";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Row, Col } from "react-bootstrap";

Axios.defaults.withCredentials = true;

const Profile = (props) => {
  document.title = "Profile";
  const navigate = useNavigate();

  const [info, setInfo] = useState({ name: "", email: "", mobile: "" });

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/isAuth`).then(
      (res) => {
        setInfo(res.data.info);
      }
    );
  }, []);
  const logout = () => {
    Axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/logout`)
      .then((res) => {
        if (res.data.success === true) {
          props.setLoggedIn(false);
          alert(res.data.message);
          navigate("/");
        } else if (res.data.success === false && res.data.err === true) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("OOPS something went wrong");
      });
  };

  return (
    <div className="profile-container">
      <Row className="profile-buttons-row">
        <Col lg={4} md={4} className="profile-left">
          {/* <Row> */}
          <div className="profile-img">{/* <User/>  */}</div> {/* </Row> */}
          {/* <h2>Go To -</h2> */}
          {/* <Row className="Profile-btn-bg"> */}
          <div className="profile-buttons">
            <Link to="/">
              <button className="profile-button">
                <HomeIcon className="profile-icon" style={{ fontSize: 20 }} />{" "}
                <span>Home</span>
              </button>
            </Link>
            <br />

            <button className="profile-button" onClick={logout}>
              <ExitToAppIcon
                className="profile-icon"
                style={{ fontSize: 20 }}
              />{" "}
              <span>Log Out</span>
            </button>
          </div>
        </Col>

        <Col lg={8} md={8} className="profile-right">
          <h1>Hi {info.name}</h1>
          <div className="profile-data">
            <p className="line">Email -{info.email}</p>
            <p className="line">Mobile -{info.phone}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
