import React from "react";
import TurnedArrowText from "./TurnedArrowText";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import Rightimg  from "../../assets/images/rightarrow.png"


function TurnedArrowAndTextContainerAuth2(props) {
  const { t } = useTranslation();
  return (
    <section className="row" id="ORIGINALITÄTSFESTSTELLUNG">
      <section className="col-12 col-lg-4">
        <h2 className="ffam-druk-cond text-uppercase">
          {t(translations.AUTH_RTARROW3HEAD)}
        </h2>
      </section>
      <hr className="d-block d-lg-none mb-2 mt-2" />
      <section className="col-12 col-lg-8 padding mx-2 mx-lg-0">
        <p className="fw-lighter mb-4">{t(translations.AUTH_RTARROW3RIGHT)}</p>
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW3H1)}
          text={t(translations.AUTH_RTARROW3DESC1)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW3H2)}
          text={t(translations.AUTH_RTARROW3DESC2)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW3H3)}
          text={t(translations.AUTH_RTARROW3DESC3)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW3H4)}
          text={t(translations.AUTH_RTARROW3DESC4)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.AUTH_RTARROW3H5)}
          text={t(translations.AUTH_RTARROW3DESC5)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
      </section>
    </section>
  );
}

export default TurnedArrowAndTextContainerAuth2;
