import { NavLink } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import BannerTop from "./BannerTop";
import "./nav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Axios from "axios";
function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    Axios.get(`/api/auth/isAuth`, {})
      .then((res) => {
        sessionStorage.setItem("LoggedIn", res.data.isAuth);
        setLoggedIn(res.data.isAuth);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      {/* <BannerTop/> */}
      <div className="nav-hub">
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <Link
              exact
              to="/"
              className="nav-logo"
              style={{ color: "white", padding: 0 }}
            >
              Academy Hub
              {/* <div className="nav-logo-main"></div> */}
              {/* <img src="./" alt="Academy Hub" /> */}
            </Link>

            <ul
              className={click ? "nav-menu active" : "nav-menu"}
              style={{ marginBottom: 0 }}
            >
              <li className="nav-item">
                <Link
                  exact
                  to="/allnews"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{ color: "white" }}
                >
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  exact
                  to="/allcolumns"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{ color: "white" }}
                >
                  Columns
                </Link>

                {/* <a href="#Nav-column">column new</a> */}
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/alldealstreet"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{ color: "white" }}
                >
                  Dealstreet
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/allinterviews"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{ color: "white" }}
                >
                  Interviews
                </Link>
              </li>
              {loggedIn ? (
                <li className="nav-item nav-button-active">
                  <Link
                    exact
                    to="/profile"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                    style={{ color: "white" }}
                  >
                    Profile
                  </Link>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="nav-item nav-button-active">
                    <Link
                      exact
                      to="/signin"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                      style={{ color: "white" }}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item nav-button-active">
                    <Link
                      exact
                      to="/signup"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                      style={{ color: "white" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i
                className={click ? "fa fa-times" : "fa fa-bars"}
                style={{ color: "white" }}
              ></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Nav;
