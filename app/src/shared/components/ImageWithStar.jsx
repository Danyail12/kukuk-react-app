import React from "react";
import ReactStars from "react-stars";

function ImageWithStar(props) {
  return (
    <section>
      <img className="w-100" src={props.img} alt="user_img"/>
      <h3 className="text-uppercase ffam-Druk-Cond">{props.title}</h3>
      <h6 className="text-color-hellgrau">{props.designation}</h6>
      <p className="fw-light">{props.desc}</p>
      <ReactStars
        count={5}
        onChange={(ratingChanged) => console.log(ratingChanged)}
        size={26}
        color2={"#90FF79"}
        value={props.starsValue}
      />
    </section>
  );
}

export default ImageWithStar;
