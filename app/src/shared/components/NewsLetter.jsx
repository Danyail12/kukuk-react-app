import { MDBIcon, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

const NewsLetter = () => {
  const { t } = useTranslation();
  return (
    <>
      <hr />
      <div className="align-items-center d-flex flex-column flex-wrap mt-5 mb-5 pt-5 pb-5 text-center">
        <h1 className="ffam-Druk-Cond" style={{letterSpacing:'2px'}}>{t(translations.NEWSLETTER_SIGNUP)}</h1>
        <p style={{ fontWeight: "300" }}>{t(translations.NEWSLETTER_DESC)}</p>
        <section
          id="wrapper"
          className="w-lg-50 w-sm-100 position-relative"
          style={{ fontFamily: "Clash Display" }}
        >
          <MDBInput
            className=""
            label={t(translations.NEWSLETTER_PLACEHOLDER)}
            id="typeEmail"
            type="email"
            contrast
          />
          <MDBIcon
            className="text-light position-absolute"
            style={{ bottom: "20%", left: "90%", fontSize: "18px" }}
            far
            icon="envelope"
          />
        </section>
      </div>
      <hr />
    </>
  );
};

export default NewsLetter;
