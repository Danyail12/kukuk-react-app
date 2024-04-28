import React from "react";
import KUKUK_LOGO_BLACK from "../../assets/images/KUKUK_LOGO_BLACK.svg";
import CallUs from "../../assets/images/CallUs.svg";
import MailUs from "../../assets/images/MailUs.svg";
import SaveUs from "../../assets/images/SaveUs.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="bg-light text-black mt-5">
      <section>
        <div className="d-flex justify-content-center m-0 p-0 mb-5 mt-2">
          <img
            src={KUKUK_LOGO_BLACK}
            alt="KUKUK_LOGO_BLACK"
            className="text-center"
          />
        </div>
      </section>
      <section className="align-items-center d-flex flex-column justify-content-center mt-5 pb-5">
        <h1
          style={{
            fontFamily: 'Neue Haas Grotesk Display Pro',
            fontSize: "1rem",
            textAlign: "center",
          }}
          className="text-uppercase col-12 col-lg-3 "
        >
          {t(translations.INTER_WORK)}
        </h1>
        <section>
          <img className="mx-2" height={70} src={CallUs} alt="CallUs" />
          <img className="mx-2" height={70} src={MailUs} alt="MailUs" />
          <img className="mx-2" height={70} src={SaveUs} alt="SaveUs" />
        </section>
      </section>
      <section className="d-flex justify-content-center text-black mt-5 pb-5 flex-sm-column flex-md-row flex-lg-row flex-column">
        <button className="fw-normal border border-rounded border-dark bg-light rounded-pill px-3 mx-2 mb-2 mb-sm-2 mb-md-0 mb-lg-0">
          INSTAGRAM
        </button>
        <button className="fw-normal border border-rounded border-dark bg-light rounded-pill px-3 mx-2 mb-2 mb-sm-2 mb-md-0 mb-lg-0">
          LINKEDIN
        </button>
        <button className="fw-normal border border-rounded border-dark bg-light rounded-pill px-3 mx-2 mb-2 mb-sm-2 mb-md-0 mb-lg-0">
          YOUTUBE
        </button>
      </section>
    </div>
  );
}

export default ContactUs;
