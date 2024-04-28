import Topbar from "../container/Layout/topbar/Topbar.jsx";
import AUTH_IMG from "../assets/images/AUTHENTIFIZIERUNG.png";
import auth_phone from "../assets/images/auth_phone.svg";
import ListWithArrow from "../shared/components/ListWithArrow.jsx";
import Footer from "../container/Layout/footer/Footer.jsx";
import ContactUs from "../shared/components/ContactUs.jsx";
import CardWithImageWhite from "../shared/components/Cards/CardWithImageWhite.tsx";
import smallracecar from "../assets/images/small-race-car.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../Constants/translation.constants.js";
import OurPromise from "../shared/components/OurPromise.jsx";
import VehiclesLogos from "../shared/components/VehiclesLogos.jsx";
import Marquee from "../shared/components/Marquee.jsx";
import HorizentalCurveLines from "../shared/components/HorizentalCurveLines.jsx";
import OurValues from "../shared/components/OurValues.jsx";
import DetectionMethods from "../shared/components/DetectionMethods.jsx";
import TurnedArrowAndTextContainerAuth from "../shared/components/TurnedArrowAndTextContainerAuth.jsx";
import TurnedArrowAndTextContainerAuth2 from "../shared/components/TurnedArrowAndTextContainerAuth2.jsx";
import TurnedArrowAndTextContainerAuth3 from "../shared/components/TurnedArrowAndTextContainerAuth3.jsx";
import NewsWrapperAuth from "../shared/components/NewsWrapperAuth.jsx";
import CommunitySayingAuth from "../shared/components/CommunitySayingAuth.jsx";
import ValueMaintaingAuth from "../shared/components/ValueMaintaingAuth.jsx";
import ChecklistWithText from "../shared/components/ChecklistWithText.jsx";
import Iphone from "../shared/components/Iphone.jsx";
import Stats from "../shared/components/stats.jsx";
import Map from "../shared/components/Map.jsx";
import AUTHAccordionWrapper from "../shared/components/AUTHAccordionWrapper .jsx";
import MainSection from "../shared/components/MainSection.jsx";
import MethodsInUse from "../shared/components/MethodsInUse.jsx";
import test from "../assets/images/test.svg";
import turned_arrow_circle_icon from "../assets/images/TurnedArrow.svg";
import turned_arrow_circle_2 from "../assets/images/turned-arrow-circle-2.svg"
import { useTransition } from "react";
import { useState } from "react";

const NumberCircle = ({ number }) => {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        border: "1px solid black", // Add border for visibility
      }}
    >
      <div style={{ fontSize: "16px" ,color:"black" }}>{number}
      </div>
          </div>
  );
};
function TurnedArrowText(props) {
  const [shoudlShowInnerText, setShouShowInnerText] = useState(false);

  const { t } = useTransition();

  const handleShouShowInnerText = () => {
    setShouShowInnerText((prev) => !prev);
  };
  return (
    <section style={{ paddingBottom: "2%", borderBottom: "1px solid white", marginBottom: "1%"}}>
       <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      <NumberCircle number={props.number}/>
      <h4 style={{ marginLeft: "5.5rem",fontFamily: "Poppins" }}>{props.heading}</h4>
      </div>
      <section className=" d-flex justify-content-between justify-content-lg-start mb-3">
        <p className="fw-lighter w-responsive text-color-hellgrau">{shoudlShowInnerText?props.desc:props.text}</p>
        <img
          onClick={handleShouShowInnerText}
          src={shoudlShowInnerText?turned_arrow_circle_2:turned_arrow_circle_icon}
          height={24}
          width={24}
          className="ms-2 mb-2"
        />
      </section>
      <section className={`${!shoudlShowInnerText && "d-none"}`}>
        <section className={` flex-md-row flex-column`}>
          <section className="">
            <img src={props.img} style={{ maxWidth: "400px" }} alt="test" />
          </section>
        </section>
      </section>
    </section>
  );
}



function AUTHENTIFIZIERUNG() {
  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <>
      <div className="container-fluid mr-auto bg-img" style={{overflow:"hidden"}}>
        {/* <div className="col-12"> */}

        <div className="row">
          <MainSection
            src={AUTH_IMG}
            alt="AUTH_IMG"
            head={t(translations.AUTHENTICATION)}
            subHead={t(translations.AUTHENTICATION_SUBTEXT)}
          />
        </div>
        <div className="container-fluid mr-auto text-light bg-img">
          <section id="stats">
            <Stats
              num1={t(translations.AUTH_STAT_NUM1)}
              txt1={t(translations.AUTH_STAT_TX1)}
              num2={t(translations.AUTH_STAT_NUM2)}
              txt2={t(translations.AUTH_STAT_TXT2)}
              num3={t(translations.AUTH_STAT_NUM3)}
              txt3={t(translations.AUTH_STAT_TXT3)}
              num4={t(translations.AUTH_STAT_NUM4)}
              txt4={t(translations.AUTH_STAT_TXT4)}
              num5={t(translations.AUTH_STAT_NUM5)}
              txt5={t(translations.AUTH_STAT_TXT5)}
              num6={t(translations.AUTH_STAT_NUM6)}
              txt6={t(translations.AUTH_STAT_TXT6)}
            />
          </section>
          <section id="Vehicle-Logos" className="pt-5">
            <VehiclesLogos shouldShow={false} />
          </section>
          <section id="marquee" className="mt-5">
            <Marquee text={t(translations.AUTH_MARQUEE)} />
          </section>
          <section id="List-with-arrow" className="mt-5">
            <p className="fw-medium ms-2 mb-5">
              {t(translations.AUTH_LISTWITHARROW1_HEAD)}
            </p>
            <ListWithArrow
              showNumber={true}
              number={1}
              text={t(translations.AUTH_CHECKARROW1)}
              innerDesc={t(translations.AUTH_CHECKARROW_DESC1)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={2}
              text={t(translations.AUTH_CHECKARROW2)}
              innerDesc={t(translations.AUTH_CHECKARROW_DESC2)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={3}
              text={t(translations.AUTH_CHECKARROW3)}
              innerDesc={t(translations.AUTH_CHECKARROW_DESC3)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={4}
              text={t(translations.AUTH_CHECKARROW4)}
              innerDesc={t(translations.AUTH_CHECKARROW_DESC4)}
              innerImg={test}
            />
            <ListWithArrow
              showNumber={true}
              number={5}
              text={t(translations.AUTH_CHECKARROW5)}
              innerDesc={t(translations.AUTH_CHECKARROW_DESC5)}
              innerImg={test}
            />
          </section>
          <section id=  "diagnoal-lines">
            <HorizentalCurveLines
              txt1={t(translations.AUTH_HOR_1)}
              txt2={t(translations.AUTH_HOR_2)}
              txt3={t(translations.AUTH_HOR_3)}
              txt4={t(translations.AUTH_HOR_4)}
              hoverTxt1={t(translations.AUTH_HOR_HOV_1)}
              hoverTxt2={t(translations.AUTH_HOR_HOV_2)}
              hoverTxt3={t(translations.AUTH_HOR_HOV_3)}
              hoverTxt4={t(translations.AUTH_HOR_HOV_4)}
              firstTxtDivId={"TECHNICALDUEDILIGENCE"}
              secondTxtDivId={"ORIGINALITÄTSFESTSTELLUNG"}
              thirdTxtDivId={"Ergebnisanalyse"}
              fourthTxtDivId={"RECHTEFAKTEN"}
            />
          </section>
          <OurValues shouldGreen={false} />
          <section className="mt-5">

          <TurnedArrowAndTextContainerAuth />
          </section>
          <section id="detection-methods">

          <DetectionMethods />
          </section>
          <section className="mt-5 mb-5" id="MethodInUse">
            <MethodsInUse />
          </section>
          <section className="mt-3">
          <TurnedArrowAndTextContainerAuth2 />

          </section>
          <section>
            <ValueMaintaingAuth />
          </section>
          <TurnedArrowAndTextContainerAuth3 />
          <OurPromise />
          <section id="card-with-image" className="mt-5 pt-5">
            <section
              id="card-with-image-white-background"
              className="d-flex flex-column flex-sm-column flex-xs-column flex-md-row flex-lg-row"
            >
              <section id="label" className="col-2 mt-4">
                <h1
                  className="ffam-Druk-Cond text-uppercase ms-2"
                  style={{ fontSize: "4rem" }}
                >
                  {t(translations.AUTH_WHITE_CAR_SIDE_HEAD)}
                </h1>
              </section>
              <section id="our-range" className="col-10">
                <p className="margin-left-lg-25 w-50">
                  {t(translations.AUTH_WHITE_CAR_RTSIDE_DESC)}
                </p>

                <section className="row ms-md-5">
                  <CardWithImageWhite
                    className="col-12 col-md-6  col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C1HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C1DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C2HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C2DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C3HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C3DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C4HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C4DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C5HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C5DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C6HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C6DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C7HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C7DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                  <CardWithImageWhite
                    className="col-12 col-md-6 col-lg-4"
                    src={smallracecar}
                    title={t(translations.AUTH_WHITE_CAR_RTSIDE_C8HEAD)}
                    body={t(translations.AUTH_WHITE_CAR_RTSIDE_C8DESC)}
                    btn1Text={t(translations.BLIND_TEXT)}
                    btn2Text={t(translations.MEHR)}
                  />
                </section>
              </section>
            </section>
          </section>
          <Marquee text={t(translations.AUTH_MARQUEE_2)} />
          <section className="mb-4">
            <ListWithArrow number={1} text={t(translations.AUTH_ARROW_5_H1)} />
            <ListWithArrow number={2} text={t(translations.AUTH_ARROW_5_H2)} />
            <ListWithArrow number={3} text={t(translations.AUTH_ARROW_5_H3)} />
          </section>
          <section>
            <Iphone
              src={auth_phone}
              btnText={t(translations.SCH_IPHONE_BTN_TXT)}
              desc={t(translations.AUTH_PHONE_DESC)}
              heading={t(translations.AUTH_PHONE_HEAD)}
            />
          </section>
          <NewsWrapperAuth />
          <CommunitySayingAuth />
          <section id="FAQ" className="mt-3">
            <AUTHAccordionWrapper />
          </section>
          <section>
            <ChecklistWithText />
          </section>
          <section>
            <Map />
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
export default AUTHENTIFIZIERUNG;
