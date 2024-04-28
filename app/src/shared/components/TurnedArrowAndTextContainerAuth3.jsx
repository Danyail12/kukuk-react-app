import React from "react";
import TurnedArrowText from "./TurnedArrowText";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import Rightimg  from "../../assets/images/rightarrow.png"

function TurnedArrowAndTextContainerAuth3(props) {
  const { t } = useTranslation();
  return (
    <section className="row" id="RECHTEFAKTEN">
      <section className="col-12 col-lg-4">
        <h1 className="ffam-druk-cond text-uppercase">
          {t(translations.AUTH_RTARROW4_HEAD)}
        </h1>
      </section>
      <hr className="d-block d-lg-none mb-2 mt-2" />
      <section className="col-12 col-lg-8 padding mx-2 mx-lg-0">
        <p className="fw-lighter mb-4">{t(translations.AUTH_RTARROW4_DESC)}</p>
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW4_H1)}
          text={t(translations.AUTH_RTARROW4_DESC1)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW4_H2)}
          text={t(translations.AUTH_RTARROW4_DESC2)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW4_H3)}
          text={t(translations.AUTH_RTARROW4_DESC3)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW4_H4)}
          text={t(translations.AUTH_RTARROW4_DESC4)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
      </section>
    </section>
  );
}

export default TurnedArrowAndTextContainerAuth3;
