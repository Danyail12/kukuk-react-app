import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function DetectionMethods() {
  const { t } = useTranslation();
  return (
    <section
      className="d-flex flex-column text-uppercase"
      style={{ marginTop: "10rem" }}
    >
      <section >
        <h1
          className="border-bottom mb-2"
          style={{ fontSize: "4vw", fontFamily:"roboto",letterSpacing:"1px" }}
        >
          {t(translations.DETEC_METHOD_H)}
        </h1>
      </section>
      <section
        className=" d-flex justify-content-between flex-wrap"
        style={{ fontFamily:'roboto' ,fontSize: "3vw" }}
      >
        <p>
          {t(translations.DETEC_METHOD_VA1)}
          <span className="text-light-green">{t(translations.MEHR)}</span>
        </p>
      </section>
    </section>
  );
}

export default DetectionMethods;
