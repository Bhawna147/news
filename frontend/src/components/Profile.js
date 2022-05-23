import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Row, Col } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
const Profile = (props) => {
  const Axios = useAxiosPrivate();
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    Axios.get(`/api/customer/me/`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err.config);
        console.log(err.response.data);
      });
  }, []);
  const logout = () => {
    setAuth({});
    sessionStorage.removeItem("refresh_token");
    navigate("/");
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
          <h1>Hi {info?.name}</h1>
          <div className="profile-data">
            <p className="line">Email - {info?.email}</p>
            <p className="line">Mobile - {info?.phone}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
