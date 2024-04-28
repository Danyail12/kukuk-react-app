import React from "react";
import KEY_IMG from "../../assets/images/key.PNG";
import DIAMOND_IMG from "../../assets/images/diamond.PNG";
import LOCATION_IMG from "../../assets/images/location.PNG";
import CAR_IMG from "../../assets/images/car.PNG";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function OurPromise() {
  const { t } = useTranslation();
  return (
    <div className="row w-100 p-3 pb-0 p-0 m-0" id="our-promises">
      <h5 className="p-4 pt-0">{t(translations.OUR_PROMISE)}</h5>
      <div className="col-md-3 p-4 pt-0 pb-0 margin-left-auto">
        <div className="border-top pt-4 border-2 border-groove">
          <img src={KEY_IMG} alt="KEY_IMG"/>
          <h6 className="pt-4">{t(translations.OUR_PROMISE_H1)}</h6>
          <p className="cards-para">{t(translations.OUR_PROMISE_DESC1)}</p>
        </div>
      </div>
      <div className="col-md-3 p-4 pt-0 pb-0 margin-left-auto">
        <div className="border-top pt-4 border-2 border-groove">
          <img src={DIAMOND_IMG} alt="diamond_img"/>
          <h6 className="pt-4">{t(translations.OUR_PROMISE_H2)}</h6>
          <p className="cards-para">{t(translations.OUR_PROMISE_DESC2)}</p>
        </div>
      </div>
      <div className="col-md-3 p-4 pt-0 pb-0 margin-left-auto">
        <div className="border-top pt-4 border-2 border-groove">
          <img src={LOCATION_IMG} alt="location_img"/>
          <h6 className="pt-4">{t(translations.OUR_PROMISE_H3)}</h6>
          <p className="cards-para">{t(translations.OUR_PROMISE_DESC3)}</p>
        </div>
      </div>
      <div className="col-md-3 p-4 pt-0 pb-0 margin-left-auto">
        <div className="border-top pt-4 border-2 border-groove">
          <img src={CAR_IMG} alt="CAR_IMG"/>
          <h6 className="pt-4">{t(translations.OUR_PROMISE_H4)}</h6>
          <p className="cards-para">{t(translations.OUR_PROMISE_DESC4)}</p>
        </div>
      </div>
    </div>
  );
}

export default OurPromise;
