import React from "react";
import ZDF from "../../assets/images/ZDF.svg";
import MarksLanz from "../../assets/images/markus-lanz.svg";
import BMWGroup from "../../assets/images/bmw-group-classic.svg";
import Christophorus from "../../assets/images/christophorus.svg";
import DIEWELT from "../../assets/images/die-welt.svg";
import RTL from "../../assets/images/RTL.svg";
import ClassicTrader from "../../assets/images/classic_trader.svg";
import AutoMotor from "../../assets/images/Auto_Motor_und_Sport.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function MediaSection() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="label-and-button"
        className="d-flex justify-content-between container "
      >
        <h1
          className="kasko text-uppercase"
          style={{ fontSize: "2rem", lineHeight: "normal" }}
        >
          {t(translations.SCH_MEDIA_HEAD)}
        </h1>
        <button
          style={{ maxHeight: "45px" }}
          className="fw-light border border-light rounded-pill border-rounded bg-black px-4 text-light"
        >
          {t(translations.MEHR)}
        </button>
      </section>
      <section
        id="media-images"
        className="d-flex justify-content-evenly flex-wrap mt-2"
      >
        <img src={ZDF} width={135} height={135} alt="media-ZDF" />
        <img src={MarksLanz} width={135} height={135} alt="media-MLazn" />
        <img src={BMWGroup} width={135} height={135} alt="media-BMW" />
        <img src={Christophorus} width={135} height={135} alt="media-Chris" />
        <img src={DIEWELT} width={135} height={135} alt="media-DIE" />
        <img src={RTL} width={135} height={135} alt="media-RTL" />
        <img src={ClassicTrader} width={135} height={135} alt="media-Classic" />
        <img src={AutoMotor} width={135} height={135} alt="media-AUTO" />
      </section>
    </>
  );
}

export default MediaSection;
