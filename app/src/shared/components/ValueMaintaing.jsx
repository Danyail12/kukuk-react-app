import React from "react";
import value1 from "../../assets/images/ValueMaintaing_1.svg";
import value2 from "../../assets/images/ValueMaintaing_2.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function ValueMaintaing() {
  const { t } = useTranslation();
  return (
    <section className="d-flex flex-column mx-2 mt-5" id="WERTERHALT">
      <section className="mb-3">
        <h1 className="ffam-Druk-Cond">
          {t(translations.WER_VALUE_MAINTAINING_H)}
        </h1>
        <p className="fw-lighter w-75">
          {t(translations.WER_VALUE_MAINTAINING_DESC)}
        </p>
      </section>
      <section className="row mt-3">
        <section className="col-12 col-lg-6 p-3">
          <img className="w-100" src={value1} alt="val1" height={"auto"} />
          <h5 className="mt-3 mb-3">
            {t(translations.WER_VALUE_MAINTAINING_IMG1_H)}
          </h5>
          <p className="fw-lighter text-color-hellgrau">
            {t(translations.WER_VALUE_MAINTAINING_IMG1_DESC)}
          </p>
        </section>
        <section className="col-12 col-lg-6 p-3">
          <img className="w-100" src={value2} alt="val2" height={"auto"} />
          <h5 className="mt-3 mb-3">
            {t(translations.WER_VALUE_MAINTAINING_IMG2_H)}
          </h5>
          <p className="fw-lighter text-color-hellgrau">
            {t(translations.WER_VALUE_MAINTAINING_IMG2_DESC)}
          </p>
        </section>
      </section>
    </section>
  );
}

export default ValueMaintaing;
