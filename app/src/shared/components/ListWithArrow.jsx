import React, { useState } from "react";
import RIGHT_ARROW from "../../assets/images/right-arrow.svg";
import test from "../../assets/images/test.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function ListWithArrow(props) {
  const [showInnerText, setShowInnerText] = useState(false);

  const { t } = useTranslation();

  const toggleInnerText = () => {
    setShowInnerText((prev) => !prev);
  };

  const arrowRotation = showInnerText ? 90 : 0;

  return (
    <section className="row container-fluid">
      <section className="col-1 col-lg-1 d-flex flex-column justify-content-center px-0">
        {props.showNumber && (
          <span className="text-dark bg-white d-block circle">
            {props.number}
          </span>
        )}
      </section>
      <section className="col-10 col-lg-10">
        <span
          className="list-text text-color-Weiß-Akzent text-uppercase"
          style={{ letterSpacing: "1px" }}
        >
          {props.text}
        </span>
      </section>
      <section className="col-1 col-lg-1 mx-auto">
        <img
          className="float-end"
          height={40}
          width={25}
          src={RIGHT_ARROW}
          alt="right-arrow"
          style={{ transform: `rotate(${arrowRotation}deg)`, transition: "transform 0.3s ease" }}
          onClick={toggleInnerText}
        />
      </section>
      <hr className="mt-3" style={{ borderTop: "1px solid", opacity: "1", color: "#F7F7F7" }} />
      <section className={`${showInnerText ? "" : "d-none"}`}>
        <section className="d-flex flex-lg-row flex-md-row flex-column">
          <section className="" style={{ paddingLeft: "9%" }}>
            <p style={{ maxWidth: "70%" }}>{props.innerDesc}</p>
          </section>
          <section className="px-sm-5">
            <img src={props.innerImg} style={{ maxWidth: "400px" }} alt="test" />
          </section>
        </section>
        <section className="d-lg-flex px-sm-5 justify-content-end">
          <button
            className="rounded-pill px-3 text-white rounded-pill-spacing mt-3"
            style={{ backgroundColor: "transparent" }}
            onClick={toggleInnerText}
          >
            {t(translations.MEHR)}
          </button>
        </section>
      </section>
    </section>
  );
}

export default ListWithArrow;
