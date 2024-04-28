import React from "react";
import ListWithArrow from "./ListWithArrow";
import TurnedArrowText from "./TurnedArrowText";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import test from "../../assets/images/test.svg"

function Valuation() {
  const { t } = useTranslation();
  return (
    <section className="d-flex flex-column mx-2 mt-5" id="Wertermittlung">
      <section className="mb-3">
        <h1 className="text-uppercase">{t(translations.VALUATION)}</h1>
        <p className="fw-lighter w-75">
          {t(translations.WER_CHECKARROW2_HEAD)}
        </p>
      </section>
      <section className="text-uppercase">
      {/* <p className="fw-lighter fs-5">{t(translations.WER_CHECKARROW2H1)}</p> */}
        <ListWithArrow
          showNumber={true}
          number="1"
          text={t(translations.WER_CHECKARROW2H1)}
          innerDesc={t(translations.WER_CHECKARROW2H_DESC1)}
          innerImg={test}
        />
        {/* <p className="fw-lighter fs-5">{t(translations.WER_CHECKARROW2H2)}</p> */}
        <ListWithArrow
          showNumber={true}
          number="2"
          text={t(translations.WER_CHECKARROW2H2)}
          innerDesc={t(translations.WER_CHECKARROW2H_DESC2)}
          innerImg={test}
        />
        {/* <p className="fw-lighter fs-5">{t(translations.WER_CHECKARROW2H3)}</p> */}
        <ListWithArrow
          showNumber={true}
          number="3"
          text={t(translations.WER_CHECKARROW2H3)}
          innerDesc={t(translations.WER_CHECKARROW2H_DESC3)}
          innerImg={test}
        />
      </section>
    </section>
  );
}

export default Valuation;
