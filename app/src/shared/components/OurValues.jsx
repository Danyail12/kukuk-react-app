import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function OurValues(props) {
  const { shouldGreen = true } = props;
  const { t } = useTranslation();
  return (
    <section
      className="d-flex flex-column text-uppercase"
      style={{ marginTop: "10rem" }}
    >
      <section>
        <h1
          className={`border-bottom mb-2 ${
            shouldGreen && "text-light-green"
          }`}
          style={{ fontSize: "4vw", fontFamily:'roboto', letterSpacing:"1px" }}
        >
          {t(translations.OUR_VALUE)}
        </h1>
      </section>
      <section
        className="ffam-Druk-Cond d-flex font-4rem justify-content-between flex-wrap"
        style={{ fontSize: "5vw", fontFamily:'roboto' }}
      >
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_1)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_2)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_3)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_4)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_5)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_6)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_7)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_8)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_9)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_10)}</span>
        <span className="ms-1 ms-lg-0">{t(translations.WER_VAL_11)}</span>
      </section>
    </section>
  );
}

export default OurValues;
