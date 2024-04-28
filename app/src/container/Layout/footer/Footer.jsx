import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../../Constants/translation.constants";
import { Link } from "react-router-dom";

function Footer(props) {
  const { t } = useTranslation();
  return (
    <div>
      <section className="d-block d-lg-flex p-5">
        <div className="col-lg-3 col-12">
          <h5
            style={{
              fontFamily: "Neue Haas Grotesk Display Pro",
              textTransform: "uppercase",
              color: "#90FF79",
              fontSize: "1rem",
            }}
          >
            {t(translations.OURCOMPANY)}
          </h5>
          <div style={{ width: "70%" }}>
            <p style={{ fontWeight: "300", fontSize: "0.7rem" }}>
              {t(translations.OUR_COMPANY_DESC)}
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column">
          <h5
            style={{
              fontFamily: "Neue Haas Grotesk Display Pro",
              textTransform: "uppercase",
              color: "#90FF79",
              fontSize: "1rem",
            }}
          >
            {t(translations.CONTACT)}
          </h5>
          <span style={{ fontWeight: "300" }}>{t(translations.C1)}</span>
          <span style={{ fontWeight: "300" }}>{t(translations.C2)}</span>
          <span style={{ fontWeight: "300" }}>{t(translations.C3)}</span>
          <span style={{ fontWeight: "300" }}>{t(translations.C4)}</span>
          <span style={{ fontWeight: "300" }}>{t(translations.C5)}</span>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column">
          <h5
            style={{
              fontFamily: "Neue Haas Grotesk Display Pro",
              textTransform: "uppercase",
              color: "#90FF79",
              fontSize: "1rem",
            }}
          >
            {t(translations.LINKS)}
          </h5>
          <a
            href={props.link1}
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById(props.link1)?.scrollIntoView();
            }}
            style={{ fontWeight: "300" }}
          >
            {t(translations.L1)}
          </a>
          <a
            href={props.link2}
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById(props.link2)?.scrollIntoView();
            }}
            style={{ fontWeight: "300" }}
          >
            {t(translations.L2)}
          </a>
          <a
            href={props.link3}
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById(props.link3)?.scrollIntoView();
            }}
            style={{ fontWeight: "300" }}
          >
            {t(translations.L3)}
          </a>
          <a
            href={props.link4}
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById(props.link4)?.scrollIntoView();
            }}
            style={{ fontWeight: "300" }}
          >
            {t(translations.L4)}
          </a>
          <a
            href={props.link5}
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById(props.link5)?.scrollIntoView();
            }}
            style={{ fontWeight: "300" }}
          >
            {t(translations.L5)}
          </a>
          <a
            href={props.link6}
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById(props.link6)?.scrollIntoView();
            }}
            style={{ fontWeight: "300" }}
          >
            {t(translations.L6)}
          </a>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column">
          <h5
            style={{
              fontFamily: "Neue Haas Grotesk Display Pro",
              textTransform: "uppercase",
              color: "#90FF79",
              fontSize: "1rem",
            }}
          >
            {t(translations.LOCATIONS)}
          </h5>
          <a style={{ fontWeight: "300" }}>{t(translations.LOC1)}</a>
          <a style={{ fontWeight: "300" }}>{t(translations.LOC2)}</a>
          <a style={{ fontWeight: "300" }}>{t(translations.LOC3)}</a>
          <a style={{ fontWeight: "300" }}>{t(translations.LOC4)}</a>
          <a style={{ fontWeight: "300" }}>{t(translations.LOC5)}</a>
          <a style={{ fontWeight: "300" }}>{t(translations.LOC6)}</a>
        </div>
      </section>
      <section className="d-flex justify-content-between p-5 flex-lg-row flex-xl-row flex-md-row flex-column">
        <p style={{ fontWeight: "300" }}>{t(translations.COPYRIGHT)}</p>
        <p style={{ fontWeight: "300" }}>2024</p>
        <div>
          <button className="fw-normal border border-rounded border-dark bg-light rounded-pill px-3 mx-2 mb-2 mb-sm-2 mb-md-0 mb-lg-0">
            {t(translations.DOCUMENTS)}
          </button>
          <Link
          to="/Impression"
          >
          <span style={{ fontWeight: "300" }} className="ms-4">
            {t(translations.IMPRINT)}
          </span>
          </Link>
          <Link 
           to={"/Datenschutz"}>
          <span className="ms-4" style={{ fontWeight: "300" }}>
            {t(translations.DATA_PROC)}
          </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
