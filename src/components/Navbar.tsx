import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import newLogo from "../images/white-png.png";

const Navbar: FunctionComponent = () => {
  const [showBtn, setBtn] = useState("item");
  let setClass = () => {
    if (showBtn === "showBtn") {
      setBtn("item");
    } else {
      setBtn("showBtn");
    }
    return showBtn;
  };
  const currentURL = window.location.hash;
  return (
    <div className="navBackground">
      <nav className="navbar">
        <div className="d-flex flex-wrap justify-content-between logoConteiner">
          <div className="logoImg">
            <img className="logoPicture" alt="Git_logo" src={newLogo} />
          </div>
          <div className="title">
            {currentURL === "#/convert" && <h1>Convert</h1>}
            {currentURL === "#/deconvert" && <h1>Deconvert</h1>}
            {currentURL === "#/rates" && <h1>Rates</h1>}
          </div>
        </div>
        <div className="blockBeetween"></div>
        <ul className="headerBlock">
          <li className={showBtn} onClick={() => setClass()}>
            <NavLink className="nav-link" to="/convert" exact>
              <div>Convert</div>
            </NavLink>
          </li>
          <li className={showBtn} onClick={() => setClass()}>
            <NavLink className="nav-link" to="/deconvert" exact>
              <div>Deconvert</div>
            </NavLink>
          </li>
          <li className={showBtn} onClick={() => setClass()}>
            <NavLink className="nav-link" to="/rates" exact>
              <div>Rates</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
