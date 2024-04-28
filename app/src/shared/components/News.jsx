import React from "react";

function News(props) {
  return (
    <section className={`d-flex flex-column ${props.className}`}>
      <img src={props.img} />
      <h3 className="mt-2">{props.title}</h3>
      <span className="text-color-hellgrau mt-4">{props.time}</span>
    </section>
  );
}

export default News;
