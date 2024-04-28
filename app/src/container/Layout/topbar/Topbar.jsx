import React, { useState } from "react";
import LOGO_KUKUK from "../../../assets/images/logo-kukuk-rep.png";
import constants from "../../../Constants/home.constants";
import { Link } from "react-router-dom";

import { translations } from "../../../Constants/translation.constants";
import { useTranslation } from "react-i18next";
import { color } from "@mui/system";
const Topbar = () => {
  const [lang, setLang] = useState("de");
  const [otherlang, setOtherlang] = useState("en");

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    if (lang === "de") {
      i18n.changeLanguage("en");
      setLang("en");
      setOtherlang("de");
    } else {
      i18n.changeLanguage("de");
      setLang("de");
      setOtherlang("en");
    }
  };

  return (
    <nav
      className="navbar navbar-expand navbar-light"
      style={{ backgroundColor: "#0F1115",position:"sticky",top:"0",zIndex:"1000" }}
    >
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-lg-start">
        <div className="col-12 d-block d-lg-flex" id="navbarSupportedContent">
          {/* Navigation Links on the Left */}
          <ul className="navbar-nav mr-auto col-12 col-lg-4 justify-content-center justify-content-lg-start align-items-center">
            <li className="nav-item active">
              <Link
                to={`/${constants.SCHADEN_PAGE}`}
                className="nav-link text-light text-uppercase light-font"
              >
                {t(translations.DAMAGE)}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/${constants.WERT_PAGE}`}
                className="nav-link text-light text-uppercase light-font"
              >
                {t(translations.VALUE)}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/${constants.AUTHENTIFIZIERUNG_PAGE}`}
                className="nav-link text-light text-uppercase light-font"
              >
                {t(translations.AUTHENTICATION)}
              </Link>
            </li>
          </ul>

          {/* Logo in the Center */}
          <div className=" col-12 col-lg-4 navbar-brand d-flex align-items-lg-center align-items-start justify m-lg-auto col-4 justify-content-center">
            <Link to="/">
              <img
                src={LOGO_KUKUK}
                style={{ cursor: "pointer" }}
                alt="LOGO_KUKUK"
                width={67}
                height={67}
                className="text-center"
              />
            </Link>
          </div>

          {/* Buttons on the Right */}
          <div className="col-12 col-lg-4 ml-auto flex-wrap d-flex align-items-lg-center jsutify-items-center jutify-content-end margin-left-auto justify-content-center">
            <button
              onClick={handleChangeLanguage}
              className="bg-transparent m-2 btn-md border-0 text-light light-font"
            >
              <span style={{ color: "#90ff79" }}>{lang.toUpperCase()}</span>/
              <span>{otherlang.toUpperCase()}</span>
            </button>
            <button className="badge badge-pill bg-transparent m-2 btn-md rounded-pill border border-light text-uppercase light-font">
              {t(translations.SHOP)}
            </button>
            <button className="badge badge-pill m-2 bg-light rounded-pill text-dark px-4 p-2 text-uppercase">
              {t(translations.CONTACT_US)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
