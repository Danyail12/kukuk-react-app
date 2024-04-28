import React from "react";
import ListWithArrow from "./ListWithArrow";
import TurnedArrowText from "./TurnedArrowText";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function CustomerAsk() {
  const { t } = useTranslation();
  return (
    <>
      <section className="mb-5 ms-3">
        <h6>{t(translations.WERT_ARROW3HEAD)}</h6>
      </section>
      <section>
      
        <ListWithArrow
          showNumber={true}
          number="1"
          text={t(translations.WER_ARROW3_1)}
        />
      
        <ListWithArrow
          showNumber={true}
          number="2"
          text={t(translations.WER_ARROW3_2)}
        />
      
        <ListWithArrow
          showNumber={true}
          number="3"
          text={t(translations.WER_ARROW3_3)}
        />
        <ListWithArrow
          showNumber={true}
          number="4"
          text={t(translations.WER_ARROW3_4)}
        />
      </section>
    </>
  );
}

export default CustomerAsk;
