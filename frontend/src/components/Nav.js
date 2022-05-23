import React, { useEffect, useState } from "react";
import "./nav.css";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
function Nav() {
  const navigate = useNavigate();
  const Axios = useAxiosPrivate();
  const [click, setClick] = React.useState(false);
  const { auth } = useAuth();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(auth?.user !== undefined);
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
