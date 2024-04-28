import React, { useState, useTransition } from "react";
import turned_arrow_circle_icon from "../../assets/images/TurnedArrow.svg";
import turned_arrow_circle_2 from "../../assets/images/turned-arrow-circle-2.svg"

function TurnedArrowText(props) {
  const [shoudlShowInnerText, setShouShowInnerText] = useState(false);

  const { t } = useTransition();

  const handleShouShowInnerText = () => {
    setShouShowInnerText((prev) => !prev);
  };
  return (
    <section style={{paddingBottom:"2%",borderBottom:"1px solid white",marginBottom:"1%"}}>
      
      <h3>{props.heading}</h3>
      <section className=" d-flex justify-content-between justify-content-lg-start mb-3">
        <p className="fw-lighter w-responsive text-color-hellgrau">{shoudlShowInnerText?props.desc:props.text}</p>
        <img
          onClick={handleShouShowInnerText}
          src={shoudlShowInnerText?turned_arrow_circle_2:turned_arrow_circle_icon}
          height={24}
          width={24}
          className="ms-2 mb-2"
        />
      </section>
      <section className={`${!shoudlShowInnerText && "d-none"}`}>
        <section className={` flex-md-row flex-column`}>
          <section className="">
            <img src={props.img} style={{ maxWidth: "400px" }} alt="test" />
          </section>
        </section>
      </section>
    </section>
  );
}

export default TurnedArrowText;
