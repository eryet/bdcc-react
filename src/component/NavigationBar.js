import React, { Fragment } from "react";
import "./header.css";
import Jellyfish from "../img/jellyfish.png";

const NavigationBar = () => {
  return (
    <Fragment>
      <div>
        <img
          src={Jellyfish}
          style={{
            width: "150px",
            height: "161px",
          }}
          alt="Choco cornet logo for navigation bar"
        ></img>
      </div>
    </Fragment>
  );
};

export default NavigationBar;
