import Topbar from "../container/Layout/topbar/Topbar.jsx";
import WERT_IMG from "../assets/images/WERT.png";
import ListWithArrow from "../shared/components/ListWithArrow.jsx";
import Footer from "../container/Layout/footer/Footer.jsx";
import ContactUs from "../shared/components/ContactUs.jsx";
import CardWithImageWhite from "../shared/components/Cards/CardWithImageWhite.tsx";
import smallracecar from "../assets/images/small-race-car.svg";
import MediaSection from "../shared/components/MediaSection.jsx";
import { useTranslation } from "react-i18next";
import { translations } from "../Constants/translation.constants.js";
import OurPromise from "../shared/components/OurPromise.jsx";
import VehiclesLogos from "../shared/components/VehiclesLogos.jsx";
import Marquee from "../shared/components/Marquee.jsx";
import HorizentalCurveLines from "../shared/components/HorizentalCurveLines.jsx";
import TurnedArrowAndTextContainer from "../shared/components/TurnedArrowAndTextContainer.jsx";
import OurValues from "../shared/components/OurValues.jsx";
import Valuation from "../shared/components/Valuation.jsx";
import ValueMaintaing from "../shared/components/ValueMaintaing.jsx";
import DetectionMethods from "../shared/components/DetectionMethods.jsx";
import CustomerAsk from "../shared/components/CustomerAsk.jsx";
import TurnedArrowAndTextContainerSideHeading from "../shared/components/TurnedArrowAndTextContainerSideHeading.jsx";
import NewsWrapper from "../shared/components/NewsWrapper.jsx";
import CommunitySaying from "../shared/components/CommunitySaying.jsx";
import Stats from "../shared/components/stats.jsx";
import ChecklistWithText from "../shared/components/ChecklistWithText.jsx";
import Iphone from "../shared/components/Iphone.jsx";
import wert_iphone from "../assets/images/wert_iphone.svg";
import WERTAccordionWrapper from "../shared/components/WERTAccordionWrapper.jsx";
import Map from "../shared/components/Map.jsx";
import MainSection from "../shared/components/MainSection.jsx";
import test from "../assets/images/test.svg"

function Wert() {
  const { t } = useTranslation();
  return (
    <>
      <Topbar />
      <>
      <div className="container-fluid mr-auto bg-img " style={{overflow:"hidden"}}>
        {/* <div className="col-12"> */}

        <div className="row">
          <MainSection
            src={WERT_IMG}
            alt="WERT_IMG"
            head={t(translations.VALUE)}
            subHead={t(translations.VALUE_SUBTEXT)}
          />
        </div>
        <div className="container-fluid text-light bg-img">
          <section id="stats">
            <Stats
              num1={t(translations.WER_STAT_NUM1)}
              txt1={t(translations.WER_STAT_TX1)}
              num2={t(translations.WER_STAT_NUM2)}
              txt2={t(translations.WER_STAT_TXT2)}
              num3={t(translations.WER_STAT_NUM3)}
              txt3={t(translations.WER_STAT_TXT3)}
              num4={t(translations.WER_STAT_NUM4)}
              txt4={t(translations.WER_STAT_TXT4)}
              num5={t(translations.WER_STAT_NUM5)}
              txt5={t(translations.WER_STAT_TXT5)}
              num6={t(translations.WER_STAT_NUM6)}
              txt6={t(translations.WER_STAT_TXT6)}
            />
          </section>
          <section id="Vehicle-Logos" className="pt-5 mb-5">
            <VehiclesLogos />
          </section>
          <section id="marquee">
            <Marquee text={t(translations.WER_MARQUEE)} />
          </section>
          <section id="List-with-arrow">
            <p className="fw-medium ms-2 mb-5 mt-5">
              {t(translations.WERT_LISTWITHARROW1_HEAD)}
            </p>
            <ListWithArrow
              showNumber={true}
              number={1}
              text={t(translations.WERT_CHECKARROW1)}
              innerDesc={t(translations.WERT_CHECKARROW_DESC1)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={2}
              text={t(translations.WERT_CHECKARROW2)}
              innerDesc={t(translations.WERT_CHECKARROW_DESC2)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={3}
              text={t(translations.WERT_CHECKARROW3)}
              innerDesc={t(translations.WERT_CHECKARROW_DESC3)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={4}
              text={t(translations.WERT_CHECKARROW4)}
              innerDesc={t(translations.WERT_CHECKARROW_DESC4)}
              innerImg={test}
            />
          </section>
          <section id="diagnoal-lines">
            <HorizentalCurveLines
              txt1={t(translations.WER_HOR_1)}
              txt2={t(translations.WER_HOR_2)}
              txt3={t(translations.WER_HOR_3)}
              txt4={t(translations.WER_HOR_4)}
              hoverTxt1={t(translations.WER_HOR_HOV_1)}
              hoverTxt2={t(translations.WER_HOR_HOV_2)}
              hoverTxt3={t(translations.WER_HOR_HOV_3)}
              hoverTxt4={t(translations.WER_HOR_HOV_4)}
              firstTxtDivId={"WERT"}
              secondTxtDivId={"Wertermittlung"}
              thirdTxtDivId={"WERTERHALT"}
              fourthTxtDivId={"ANVERKAUF"}
            />
          </section>
          <TurnedArrowAndTextContainer />
          <OurValues />
          <Valuation />
          <ValueMaintaing />
          <section id="detection-methods" className="mb-5">

          <DetectionMethods />
          </section>
          <Marquee text={t(translations.WERT_MARQUEE2)} />
          <section className="mt-5">

          <CustomerAsk />
          </section>
          <section className="mt-5">

          <TurnedArrowAndTextContainerSideHeading />
          </section>
          <OurPromise />
          <section id="card-with-image" className="mt-5 pt-5">
            <section
              id="card-with-image-white-background"
              className="d-block d-lg-flex"
            >
              <section id="label" className="col-3 mt-4">
                <h1
                  className="ffam-Druk-Cond text-uppercase ms-2"
                  style={{ fontSize: "4vw" }}
                >
                  {t(translations.WER_WHITE_CAR_SIDE_HEAD)}
                </h1>
              </section>
              <section id="our-range" className="col-12 col-lg-9">
                <p className="margin-left-lg-25 w-50">
                  {t(translations.WER_WHITE_CAR_RTSIDE_DESC)}
                </p>

                <section className="d-flex flex-wrap col-12">
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C1HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C1DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C2HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C2DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C3HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C3DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C4HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C4DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C5HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C5DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C6HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C6DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C7HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C7DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C8HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C8DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.WER_WHITE_CAR_RTSIDE_C9HEAD)}
                    body={t(translations.WER_WHITE_CAR_RTSIDE_C9DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                </section>
              </section>
            </section>
            <section>
              <ChecklistWithText />
            </section>
            <section>
              <Iphone
                heading={t(translations.WER_PHONE_HEAD)}
                desc={t(translations.WER_PHONE_DESC)}
                btnText={t(translations.SCH_IPHONE_BTN_TXT)}
                src={wert_iphone}
              />
            </section>
            <NewsWrapper />
            <section className="mt-5 mb-5"></section>
            <CommunitySaying />
            <section className="mt-5 mb-5 pt-5 pb-5 text-center" id="FAQ">
              <h1
                style={{
                  textTransform: "uppercase",
                  fontFamily: 'Neue Haas Grotesk Display Pro',
                  fontSize: "2rem",
                  marginTop: "5%",
                }}
              >
                {t(translations.WER_ACCRODION_HEAD)}
              </h1>
              <WERTAccordionWrapper />
            </section>
            <section className="mb-5">
              <Map />
            </section>
            <section id="Media" className="mt-5 mb-5">
              <MediaSection />
            </section>
          </section>
          <section>
            <ContactUs />
          </section>
          <section id="footer">
          <Footer
              link1="our-range"
              link2="FAQ"
              link3="#"
              link4="detection-methods"
              link5="#"
              link6="#"
            />
          </section>
        </div>

      
      {/* </div> */}
      </div>
      </>
    </>
  );
}
export default Wert;
