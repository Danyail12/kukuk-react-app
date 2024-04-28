import RoundedButton from "../shared/components/RoundedButton";
import React from "react";
import img1 from "../assets/images/review_pg_img1.svg";
import img2 from "../assets/images/review_pg_img2.svg";
import ImageWithStar from "../shared/components/ImageWithStar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { translations } from "../Constants/translation.constants";
import ContactUs from "../shared/components/ContactUs";

function Reviews(props) {
  const { t } = useTranslation();
  return (
    <>
      <section className="" style={{ backgroundColor: "black" }}>
        <section className="container">
        <div
          className="col-12 justify-content-start d-flex pt-4 mb-5"
          style={{ borderBottom: "2px solid white" }}
        >
          <div className="col-12 justify-content-between d-flex text-uppercase ffam-cond fs-1">
            <h1 className="ffam-Druk-Cond text-white fs-1">{t(translations.COMMUNITY_SAY)}</h1>
            <Link to={"/wert"}>
              <RoundedButton text={"Back"} />
            </Link>
          </div>
        </div>
        <section className="row" style={{color:"white"}}>
        <section className="col-4">
          <div>
            <h1
              className="ffam-Druk-Cond font-3rem text-light-green"
              style={{ fontSize: "6rem" }}
            >
              {t(translations.WER_COMMU_NUM1)}
            </h1>
            <span className="text-color-hellgrau text-uppercase">
              {t(translations.WER_COMMU_SUBTXT1)}
            </span>
          </div>
          <div>
            <h1
              className="ffam-Druk-Cond font-3rem text-light-green"
              style={{ fontSize: "6rem" }}
            >
              {t(translations.WER_COMMU_NUM2)}
            </h1>
            <span className="text-color-hellgrau text-uppercase">
              {t(translations.WER_COMMU_SUBTXT2)}
            </span>
          </div>
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS1HEAD)}
            designation={t(translations.REVIEWS1DESIG)}
            desc={t(translations.REVIEWS1DESC)}
            starsValue={5}
          />
        </section>
        
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img2}
            title={t(translations.REVIEWS2HEAD)}
            designation={t(translations.REVIEWS2DESIG)}
            desc={t(translations.REVIEWS2DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS3HEAD)}
            designation={t(translations.REVIEWS3DESIG)}
            desc={t(translations.REVIEWS3DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS4HEAD)}
            designation={t(translations.REVIEWS4DESIG)}
            desc={t(translations.REVIEWS4DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS5HEAD)}
            designation={t(translations.REVIEWS5DESIG)}
            desc={t(translations.REVIEWS5DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img2}
            title={t(translations.REVIEWS6HEAD)}
            designation={t(translations.REVIEWS6DESIG)}
            desc={t(translations.REVIEWS6DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS7HEAD)}
            designation={t(translations.REVIEWS7DESIG)}
            desc={t(translations.REVIEWS7DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img2}
            title={t(translations.REVIEWS8HEAD)}
            designation={t(translations.REVIEWS8DESIG)}
            desc={t(translations.REVIEWS8DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS9HEAD)}
            designation={t(translations.REVIEWS9DESIG)}
            desc={t(translations.REVIEWS9DESC)}
            starsValue={5}
          />
        </section>
        <section className="col-12 col-md-4 col-lg-4 col-sm-4">
          <ImageWithStar
            img={img1}
            title={t(translations.REVIEWS10HEAD)}
            designation={t(translations.REVIEWS10DESIG)}
            desc={t(translations.REVIEWS10DESC)}
            starsValue={5}
          />
        </section>
        </section>
        </section>
      </section>
      <section>
        <ContactUs />
      </section>
    </>
  );
}
export default Reviews;
