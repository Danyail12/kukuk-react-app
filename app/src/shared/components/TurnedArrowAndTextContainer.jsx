import React from "react";
import TurnedArrowText from "./TurnedArrowText";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import Rightimg  from "../../assets/images/rightarrow.png"

function TurnedArrowAndTextContainer(props) {
  const { t } = useTranslation();
  return (
    <section className="row" id="WERT" >
      <section className="col-12 col-lg-4">
        <h1 className="ffam-druk-cond text-uppercase">
          {t(translations.VALUE)}
        </h1>
        <p className="fw-lighter">{t(translations.WERT_RT_ARROW_SIDE)}</p>
      </section>
      <hr className="d-block d-lg-none mb-2 mt-2" />
      <section className="col-12 col-lg-8 padding mx-2 mx-lg-0">
        <TurnedArrowText
          heading={t(translations.WERT_RT_ARROW_H1)}
          text={t(translations.WERT_RT_ARROW_DESC1)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WERT_RT_ARROW_H2)}
          text={t(translations.WERT_RT_ARROW_DESC2)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WERT_RT_ARROW_H3)}
          text={t(translations.WERT_RT_ARROW_DESC3)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WERT_RT_ARROW_H4)}
          text={t(translations.WERT_RT_ARROW_DESC4)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
      </section>
    </section>
  );
}

export default TurnedArrowAndTextContainer;
