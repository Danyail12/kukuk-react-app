import React from "react";
import map from "../../assets/images/map.png";
import prof1 from "../../assets/images/prof_1.svg";
import prof2 from "../../assets/images/prof_2.svg";
import prof3 from "../../assets/images/prof_3.svg";
import prof4 from "../../assets/images/prof_4.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function Map() {
  const { t } = useTranslation();
  return (
    <section className="d-flex flex-column flex-md-row flex-lg-row justify-content-between">
      <section>
        <h1
          className="text-uppercase ffam-Druk-Cond"
          style={{ fontSize: "3rem" }}
        >
          {t(translations.WER_MAP_H1)}
        </h1>
        <p>{t(translations.WER_MAP_DESC1)}</p>
        <h5 className="mt-4 fw-bold">{t(translations.WER_MAP_DATE)}</h5>
        <hr className="w-75" />
        <span className="fw-light">{t(translations.WER_MAP_LOC)}</span>
        <section>
          <h5 className="mt-4 fw-bold">{t(translations.WER_MAP_WER)}</h5>
          <hr className="w-75" />
          <section className="d-block d-lg-flex">
            <img
              src={prof1}
              height={50}
              width={50}
              alt="prof1"
              className="border-rounded ms-1"
            />
            <img
              src={prof2}
              height={50}
              width={50}
              alt="prof2"
              className="border-rounded ms-1"
            />
            <img
              src={prof3}
              height={50}
              width={50}
              alt="prof3"
              className="border-rounded ms-1"
            />
            <img
              src={prof4}
              height={50}
              width={50}
              alt="prof4"
              className="border-rounded ms-1"
            />
          </section>
        </section>
      </section>
      <section>
        <img className="w-75" src={map} alt="MAP" />
      </section>
    </section>
  );
}

export default Map;
