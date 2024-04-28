import React from "react";
import News from "./News";
import v1 from "../../assets/images/news_auth_1.svg";
import v2 from "../../assets/images/news_auth_2.svg";
import v3 from "../../assets/images/news_auth_3.svg";
import RoundedButton from "./RoundedButton";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function NewsWrapperAuth() {
  const { t } = useTranslation();
  return (
    <section className="pt-5">
      <section className="d-flex justify-content-center border-bottom border-light">
        <h3
          className="text-uppercase ffam-Druk-Cond"
          style={{ fontSize: "4rem" }}
        >
          {t(translations.AUTH_NEWS)}
        </h3>
      </section>
      <section className="row mt-3">
        <News
          className="col-12 col-lg-4 col-md-6"
          img={v1}
          title={t(translations.AUTH_NEWS1_HEAD)}
          time={t(translations.AUTH_NEWS1_DESC)}
        />
        <News
          className="col-12 col-lg-4 col-md-6"
          img={v2}
          title={t(translations.AUTH_NEWS2_HEAD)}
          time={t(translations.AUTH_NEWS2_DESC)}
        />
        <News
          className="col-12 col-lg-4 col-md-6"
          img={v3}
          title={t(translations.AUTH_NEWS3_HEAD)}
          time={t(translations.AUTH_NEWS3_DESC)}
        />
      </section>
      <section className="mt-3">
        <RoundedButton text={t(translations.MEHR)} />
      </section>
    </section>
  );
}

export default NewsWrapperAuth;
