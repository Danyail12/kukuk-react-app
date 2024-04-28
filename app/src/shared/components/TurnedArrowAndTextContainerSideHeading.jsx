import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import TurnedArrowText from "./TurnedArrowText";
import Rightimg  from "../../assets/images/rightarrow.png"

function TurnedArrowAndTextContainerSideHeading(props) {
  const { t } = useTranslation();
  return (
    <section className="row" id="ANVERKAUF">
      <section className="col-12 col-lg-4">
        <h1 className="ffam-druk-cond text-uppercase">
          {t(translations.WER_RTARROW2SIDE_HEAD)}
        </h1>
      </section>
      <hr className="d-block d-lg-none mb-2 mt-2" />
      <section className="col-12 col-lg-8 padding mx-2 mx-lg-0">
        <p className="fw-lighter">{t(translations.WER_RTARROW2RIGHTDESC)}</p>
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H1)}
          text={t(translations.WER_RTARROW2DESC1)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H2)}
          text={t(translations.WER_RTARROW2DESC2)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H3)}
          text={t(translations.WER_RTARROW2DESC3)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H4)}
          text={t(translations.WER_RTARROW2DESC4)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H5)}
          text={t(translations.WER_RTARROW2DESC5)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H6)}
          text={t(translations.WER_RTARROW2DESC6)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
        <TurnedArrowText
          heading={t(translations.WER_RTARROW2H7)}
          text={t(translations.WER_RTARROW2DESC7)}
          img={Rightimg}
          desc={t(translations.WERT_RT_ARROW_DETAIL_DESC1)}
        />
      </section>
    </section>
  );
}

export default TurnedArrowAndTextContainerSideHeading;
