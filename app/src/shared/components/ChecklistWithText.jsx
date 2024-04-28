import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function ChecklistWithText() {
  const { t } = useTranslation();
  return (
    <div className="row col-12  position-relative my-5 d-flex align-items-center m-0 py-5">
      <div className="col-12 col-lg-6 p-5">
        <h1
          className=" kasko"
          style={{
            lineHeight: "initial",
            fontSize: "2rem",
            color: "#fefefe",
            textTransform: "uppercase",
          }}
        >
          {t(translations.SCH_WIR)}
        </h1>
        <p style={{ color: "#F7F7F7", fontWeight: 300 }} className="mt-5">
          {t(translations.SCH_WIR_DESC)}
        </p>
        <button className="border border-dark border-rounded rounded-pill px-4 fw-light bg-white text-dark mt-3">
          <text
            style={{
              fontFamily: "Neue Haas Grotesk Display Pro",
              color: "#0F1115",
              fontWeight: "bold",
            }}
          >
            {t(translations.SCH_BTN)}
          </text>
          <i className="fas fa-arrow-right-long text-dark ms-2"></i>
        </button>
      </div>
      <div className="col-12 col-lg-6 p-5">
        <div className="p-3 " style={{ borderBottom: "solid" }}>
          <h1
            style={{
              color: "#737373",
              textTransform: "uppercase",
              fontFamily: 'Neue Haas Grotesk Display Pro',
              fontSize: "1.5rem",
            }}
            className="textChecklist"
          >
            {t(translations.SCH_WIR_H1)}
          </h1>
        </div>
        <div className="p-3 textChecklist" style={{ borderBottom: "solid" }}>
          <h1
            style={{
              color: "#737373",
              textTransform: "uppercase",
              fontFamily: 'Neue Haas Grotesk Display Pro',
              fontSize: "1.5rem",
            }}
            className="textChecklist"
          >
            {t(translations.SCH_WIR_H2)}
          </h1>
        </div>
        <div className="p-3 textChecklist" style={{ borderBottom: "solid" }}>
          <h1
            style={{
              color: "#737373",
              textTransform: "uppercase",
              fontFamily: 'Neue Haas Grotesk Display Pro',
              fontSize: "1.5rem",
            }}
            className="textChecklist"
          >
            {t(translations.SCH_WIR_H3)}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ChecklistWithText;
