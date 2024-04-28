import React from "react";
import arrow_down from "../../assets/images/down-arrow.svg";

function MainSection(props) {
  return (
    <div className="col-md-12 m-0 p-0">
      <div className="d-flex align-items-center justify-content-center m-0 p-0 position-relative">
        <img className="w-100 m-0 p-0" src={props.src} alt={props.alt} />
        <h1
          className="position-absolute text-light pb-1  text-uppercase"
          style={{ fontSize: "5vw", fontFamily: 'Neue Haas Grotesk Display Pro' }}
        >
          <b>{props.head}</b>
        </h1>
        <p className="position-absolute text-subhead text-center w-50">{props.subHead}</p>
      </div>
    </div>
  );
}

export default MainSection;
