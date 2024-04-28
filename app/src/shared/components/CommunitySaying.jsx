import React from "react";
import v1 from "../../assets/images/comm_1.svg";
import v2 from "../../assets/images/comm_2.svg";
import ImageWithStar from "./ImageWithStar";
import RoundedButton from "./RoundedButton";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import { Link } from "react-router-dom";

function CommunitySaying(props) {
  const { t } = useTranslation();
  return (
    <section className="row mt-5">
      <section className="col-4">
        <div>
          <h1
            className="ffam-Druk-Cond text-light-green"
            style={{ fontSize: "6rem" }}
          >
            {t(translations.WER_COMMU_NUM1)}
          </h1>
          <span className="text-color-hellgrau">
            {t(translations.WER_COMMU_SUBTXT1)}
          </span>
        </div>
        <div>
          <h1
            className="ffam-Druk-Cond text-light-green"
            style={{ fontSize: "6rem" }}
          >
            {t(translations.WER_COMMU_NUM2)}
          </h1>
          <span className="text-color-hellgrau">
            {t(translations.WER_COMMU_SUBTXT2)}
          </span>
        </div>
      </section>
      <section className="col-12 col-md-4 col-lg-4 col-sm-4">
        <ImageWithStar
          img={v1}
          title={t(translations.WER_COMMU_IMG1_HEAD)}
          designation={t(translations.WER_COMMU_IMG1_SUBTXT)}
          desc={t(translations.WER_COMMU_IMG1_DESC)}
          starsValue={5}
        />
      </section>
      <section className="col-12 col-md-4 col-lg-4 col-sm-4">
        <ImageWithStar
          img={v2}
          title={t(translations.WER_COMMU_IMG2_HEAD)}
          designation={t(translations.WER_COMMU_IMG2_SUBTXT)}
          desc={t(translations.WER_COMMU_IMG2_DESC)}
          starsValue={5}
        />
      </section>
      <section>
      <Link
        to={`/Reviews`}
        className="nav-link text-light text-uppercase light-font"
      >
        <section className="mt-3">
          <RoundedButton text={t(translations.MEHR)} />
        </section>
      </Link>
      </section>
    </section>
  );
}

export default CommunitySaying;
