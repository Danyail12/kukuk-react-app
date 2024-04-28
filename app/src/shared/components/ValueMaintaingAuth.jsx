import React from "react";
import value1 from "../../assets/images/ValueMaintaing_auth_1.svg";
import value2 from "../../assets/images/ValueMaintaing_auth_1.svg";
import value3 from "../../assets/images/ValueMaintaing_auth_3.svg";
import value4 from "../../assets/images/ValueMaintaing_auth_4.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function ValueMaintaingAuth() {
  const { t } = useTranslation();
  return (
    <section className="d-flex flex-column mx-2 mt-5" id="Ergebnisanalyse">
      <section className="mb-3">
        <h1 className="ffam-Druk-Cond">
          {t(translations.VALUE_MAINTAIN_HEAD)}
        </h1>
        <p className="fw-lighter w-75">{t(translations.VALUE_MAINTAIN_DESC)}</p>
      </section>
      <section className="row mt-3">
        <section className="col-12 col-lg-3 p-3 ">
          <img className="w-100" src={value1} alt="val1" height={"auto"} />
          <h5 className="mt-3 mb-3">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG1_H)}
          </h5>
          <p className="fw-lighter text-color-hellgrau">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG1_DESC)}
          </p>
        </section>
        <section className="col-12 col-lg-3 p-3">
          <img className="w-100" src={value2} alt="val2" height={"auto"} />
          <h5 className="mt-3 mb-3">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG2_H)}
          </h5>
          <p className="fw-lighter text-color-hellgrau">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG2_DESC)}
          </p>
        </section>
        <section className="col-12 col-lg-3 p-3">
          <img className="w-100" src={value3} alt="val2" height={"auto"} />
          <h5 className="mt-3 mb-3">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG3_H)}
          </h5>
          <p className="fw-lighter text-color-hellgrau">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG3_DESC)}
          </p>
        </section>
        <section className="col-12 col-lg-3 p-3">
          <img className="w-100" src={value4} alt="val2" height={"auto"} />
          <h5 className="mt-3 mb-3">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG4_H)}
          </h5>
          <p className="fw-lighter text-color-hellgrau">
            {t(translations.VALUE_MAINTAIN_HEAD_IMG4_DESC)}
          </p>
        </section>
      </section>
    </section>
  );
}

export default ValueMaintaingAuth;
