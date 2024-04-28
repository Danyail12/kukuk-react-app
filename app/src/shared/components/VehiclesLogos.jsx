import React from "react";
import alfaromeo from "../../assets/images/VehicleBrandLogos/alfaromeo.svg";
import AUDI from "../../assets/images/VehicleBrandLogos/AUDI.svg";
import AUTORUF from "../../assets/images/VehicleBrandLogos/AUTORUF.svg";
import bentley from "../../assets/images/VehicleBrandLogos/bentley.svg";
import BMW from "../../assets/images/VehicleBrandLogos/BMW.svg";
import Bugatti from "../../assets/images/VehicleBrandLogos/Bugatti.svg";
import Chevrolte from "../../assets/images/VehicleBrandLogos/Chevrolte.svg";
import chrysler from "../../assets/images/VehicleBrandLogos/chrysler.svg";
import CITROEN from "../../assets/images/VehicleBrandLogos/CITROEN.svg";
import FERRARI from "../../assets/images/VehicleBrandLogos/FERRARI.svg";
import koenigsegg from "../../assets/images/VehicleBrandLogos/koenigsegg.svg";
import lamborghini from "../../assets/images/VehicleBrandLogos/lamborghini.svg";
import Lancia from "../../assets/images/VehicleBrandLogos/Lancia.svg";
import LandRover from "../../assets/images/VehicleBrandLogos/LandRover.svg";
import martin from "../../assets/images/VehicleBrandLogos/martin.svg";
import maserati from "../../assets/images/VehicleBrandLogos/maserati.svg";
import McLaren from "../../assets/images/VehicleBrandLogos/McLaren.svg";
import mercedes from "../../assets/images/VehicleBrandLogos/mercedes.svg";
import MG from "../../assets/images/VehicleBrandLogos/MG.svg";
import PORSCHE from "../../assets/images/VehicleBrandLogos/PORSCHE.svg";
import Renault from "../../assets/images/VehicleBrandLogos/Renault.svg";
import Tesla from "../../assets/images/VehicleBrandLogos/Tesla.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function VehiclesLogos(props) {
  const { t } = useTranslation();
  const { shouldShow = true } = props;
  return (
    <>
      <section
        id="label-and-button"
        className="d-flex justify-content-center container "
      >
        <h1 className="kasko text-uppercase" style={{ fontSize: "2rem", lineHeight:"normal" }}>
          {t(translations.LOGOS_HEAD)}
        </h1>
      </section>
      <section
        id="media-images"
        className="d-flex justify-content-center flex-wrap mt-2"
      >
        <img src={BMW} width={100} height={50} alt="media-BMW" />
        <img src={PORSCHE} width={100} height={50} alt="media-PORSCHE" />
        <img src={FERRARI} width={100} height={50} alt="media-FERRARI" />
        <img
          src={lamborghini}
          width={100}
          height={50}
          alt="media-lamborghini"
        />
        <img src={martin} width={100} height={50} alt="media-martin" />
        <img src={maserati} width={100} height={50} alt="media-maserati" />
        <img src={AUDI} width={100} height={50} alt="media-AUDI" />
        <img src={mercedes} width={100} height={50} alt="media-mercedes" />
        <img src={Tesla} width={100} height={50} alt="media-Tesla" />
        {shouldShow && (
          <img src={bentley} width={100} height={50} alt="media-bentley" />
        )}
        <img src={McLaren} width={100} height={50} alt="media-McLaren" />
        <img src={CITROEN} width={100} height={50} alt="media-CITROEN" />
        <img src={AUTORUF} width={100} height={50} alt="media-AUTORUF" />
        <img src={koenigsegg} width={100} height={50} alt="media-koenigsegg" />
        <img src={LandRover} width={100} height={50} alt="media-LandRover" />
        <img src={Renault} width={100} height={50} alt="media-Renault" />
        <img src={Bugatti} width={100} height={50} alt="media-Bugatti" />
        <img src={Lancia} width={100} height={50} alt="media-Lancia" />
        <img src={MG} width={100} height={50} alt="media-MG" />
        {shouldShow && (
          <>
            <img
              src={Chevrolte}
              width={100}
              height={50}
              alt="media-Chevrolte"
            />
            <img src={chrysler} width={100} height={50} alt="media-chrysler" />
            <img src={alfaromeo} width={100} height={50} alt="media-alfaremo" />
          </>
        )}
      </section>
    </>
  );
}

export default VehiclesLogos;
