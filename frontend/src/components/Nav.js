import { NavLink } from 'react-bootstrap';
import React from 'react'
import "./nav.css";



function Nav() {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""} onClick={()=>Close()} />
        <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo" 
             style={{color: "white"}}> 
              NewsNation
              <i className="fa fa-code"></i>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <NavLink
                  exact
                  to="/news"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{color: "white"}}
                >
                  News
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/columns"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{color: "white"}}
                >
                  Columns
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/dealstreet"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{color: "white"}}
                >
                  Dealstreet
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/interviews"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  style={{color: "white"}}
                >
                  Interviews
                </NavLink>
              </li>

             
            </ul>
           

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
  }
  export default Nav


//                 <button>SignIn</button>
//                 <button>SignIn</button>


