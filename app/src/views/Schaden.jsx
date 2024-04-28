import Topbar from "../container/Layout/topbar/Topbar.jsx";
import SCHADEN_IMG from "../assets/images/SCHADEN.png";
// import TurnedArrowText from "../shared/components/TurnedArrowText.jsx";
import ListWithArrow from "../shared/components/ListWithArrow.jsx";
import ReactangleSectionImage from "../assets/images/ReactangleSectionImage.svg";
import ReactangleSectionImage_2 from "../assets/images/RectangleSectionImage_2.svg";
import SteppersImage from "../assets/images/stepper.jpg";
import CheckListWithImage from "../shared/components/CheckListWithImage.jsx";
import NewsLetter from "../shared/components/NewsLetter.jsx";
import Footer from "../container/Layout/footer/Footer.jsx";
import ContactUs from "../shared/components/ContactUs.jsx";
import CardWithImageWhite from "../shared/components/Cards/CardWithImageWhite.tsx";
import smallracecar from "../assets/images/small-race-car.svg";
import MediaSection from "../shared/components/MediaSection.jsx";
import { translations } from "../Constants/translation.constants.js";
import { useTranslation } from "react-i18next";
import Carousel from "../shared/components/Carousel/Carousel.jsx";
import HorizentalCurveLines from "../shared/components/HorizentalCurveLines.jsx";
import StepperListing from "../shared/components/StepperListing.jsx";
import Stats from "../shared/components/stats.jsx";
import ChecklistWithText from "../shared/components/ChecklistWithText.jsx";

import Iphone from "../shared/components/Iphone.jsx";
import Marquee from "../shared/components/Marquee.jsx";
import OurPromise from "../shared/components/OurPromise.jsx";
import IPHONE_IMG from "../assets/images/iphone.png";
import SCHAccordionWrapper from "../shared/components/SCHAccordionWrapper.jsx";
import Slide from "../shared/components/Carousel/Slide.jsx";
import MainSection from "../shared/components/MainSection.jsx";
import arrow_down from "../assets/images/down-arrow.svg";
import test from "../assets/images/test.svg";


// const { t } = useTranslation();

const Schaden = () => {
  const items = [
    <Slide
      description={
        "Frau Kukuk sollte für mich ein Auto in Köln für den Kauf bewerten. Sie hat das innerhalb 24 Stunden perfekt erledigt. Habe selten so einen guten Service ..."
      }
      date={"09/05/2022"}
    />,
    <Slide
      description={
        "Frau Kukuk sollte für mich ein Auto in Köln für den Kauf bewerten. Sie hat das innerhalb 24 Stunden perfekt erledigt. Habe selten so einen guten Service ..."
      }
      date={"09/05/2022"}
    />,
    <Slide
      description={
        "Frau Kukuk sollte für mich ein Auto in Köln für den Kauf bewerten. Sie hat das innerhalb 24 Stunden perfekt erledigt. Habe selten so einen guten Service ..."
      }
      date={"09/05/2022"}
    />,
    <Slide
      description={
        "Frau Kukuk sollte für mich ein Auto in Köln für den Kauf bewerten. Sie hat das innerhalb 24 Stunden perfekt erledigt. Habe selten so einen guten Service ..."
      }
      date={"09/05/2022"}
    />,
    <Slide
      description={
        "Frau Kukuk sollte für mich ein Auto in Köln für den Kauf bewerten. Sie hat das innerhalb 24 Stunden perfekt erledigt. Habe selten so einen guten Service ..."
      }
      date={"09/05/2022"}
    />,
  ];
  const { t } = useTranslation();
  const steps = [
    {
      label: t(translations.STEP_LBL1),
      description: t(translations.STEP_DESC1),
    },
    {
      label: t(translations.STEP_LBL2),
      description: t(translations.STEP_DESC2),
    },
    {
      label: t(translations.STEP_LBL3),
      description: t(translations.STEP_DESC3),
    },
  ];

  return (
    <>


      <img
        src={arrow_down}
        className="arrow-down"
        alt="arrow-down"
        onClick={() => {
          window.scrollTo(0, document.body.scrollHeight);
        }}
        />

      {/* <div className="vertical-head" id="vertical-head">
        <p>Das Team</p>
        <p
        className="mx-3"
        onClick={() => {
          document?.getElementById("our-promises")?.scrollIntoView();
        }}
        >
        Our promise
        </p>
        <p className="mx-3">QuickCheck</p>
      </div> */}
      <Topbar />
      <>
      <div className="container-fluid bg-img " style={{overflow: "hidden"}} >
        {/* <div className="col-12"> */}
          
        <div className="row ">
          <MainSection
            src={SCHADEN_IMG}
            alt="SCHADEN_IMG"
            head={t(translations.DAMAGE)}
            subHead={t(translations.DAMAGE_SUBTEXT)}
          />
        </div>
        <div className="text-light bg-img"   >
          <Stats
            num1={t(translations.SCH_STAT_NUM1)}
            txt1={t(translations.SCH_STAT_TXT1)}
            num2={t(translations.SCH_STAT_NUM2)}
            txt2={t(translations.SCH_STAT_TXT2)}
            num3={t(translations.SCH_STAT_NUM3)}
            txt3={t(translations.SCH_STAT_TXT3)}
            num4={t(translations.SCH_STAT_NUM4)}
            txt4={t(translations.SCH_STAT_TXT4)}
            num5={t(translations.SCH_STAT_NUM5)}
            txt5={t(translations.SCH_STAT_TXT5)}
            num6={t(translations.SCH_STAT_NUM6)}
            txt6={t(translations.SCH_STAT_TXT6)}
            />
          <OurPromise />
          <HorizentalCurveLines
            txt1={t(translations.SCH_HOR_1)}
            txt2={t(translations.SCH_HOR_2)}
            txt3={t(translations.SCH_HOR_3)}
            txt4={t(translations.SCH_HOR_4)}
            hoverTxt1={t(translations.SCH_HOR_HOV_1)}
            hoverTxt2={t(translations.SCH_HOR_HOV_2)}
            hoverTxt3={t(translations.SCH_HOR_HOV_3)}
            hoverTxt4={t(translations.SCH_HOR_HOV_4)}
            firstTxtDivId={"UNFALLRATGEBER"}
            secondTxtDivId={"HAFTPFLICHT"}
            thirdTxtDivId={"KASKO"}
            fourthTxtDivId={"marquee"}
          />
          <div className="p-5 text-uppercase">
            <h1
              style={{
                fontFamily: "Neue Haas Grotesk Display Pro",
                fontSize: "calc(3rem + 0.6vw)",
                marginBottom: "7%",
              }}
              >
              {t(translations.COMMUNITY_SAY)}
            </h1>
            <Carousel items={items} />
          </div>
          <div className="p-5" id="UNFALLRATGEBER">
            <h1
              style={{
                fontFamily: "Neue Haas Grotesk Display Pro",
                fontSize: "calc(4rem + 0.6vw)",
                marginBottom: "7%",
                textTransform: "uppercase",
              }}
              >
              {t(translations.ACCIDENT_GUIDE)}
            </h1>
            <StepperListing src={SteppersImage} steps={steps} />
          </div>
          <Iphone
            heading={t(translations.SCH_IPHONE_H)}
            desc={t(translations.SCH_IPHONE_DESC)}
            btnText={t(translations.SCH_IPHONE_BTN_TXT)}
            src={IPHONE_IMG}
            page={1}
          />
          <div className="p-3 p-lg-5">
            <section className="row mt-5" id="KASKO">
              <section className="row mt-5">
                <section className="ncol-8">
                  <h3
                    className="ffam-Druk-Cond text-uppercase"
                    style={{ fontSize: "calc(4rem + 0.6vw)" }}
                  >
                    {t(translations.KASKO)}
                  </h3>
                  <button className="rounded-pill px-2 mt-3 app-bg-color rounded-pill-spacing">
                    {t(translations.KASKO_BTN)}
                  </button>
                </section>
              </section>
            </section>
            <section>
              <CheckListWithImage image={ReactangleSectionImage} />
            </section>
            <section id="HAFTPFLICHT">
              <section className="row mt-5">
                <section className="row mt-5">
                  <section className="col-8">
                    <h3
                      className="ffam-Druk-Cond text-uppercase"
                      style={{ fontSize: "4rem" }}
                    >
                      {t(translations.LIABILITY)}
                    </h3>
                    <button className="rounded-pill px-3 app-bg-color rounded-pill-spacing mt-3">
                      {t(translations.NOFAULT)}
                    </button>
                  </section>
                </section>
              </section>
            </section>
            <section id="ReactangleSectionImage_2">
              <CheckListWithImage image={ReactangleSectionImage_2} />
            </section>
            <section id="marquee" className="mt-5">
              <Marquee text={t(translations.SCH_MAQUEE)} />
            </section>
            <p style={{ fontWeight: "300" }} className="mt-5">
              {t(translations.SCH_CHECK_ARROW_DESC)}
            </p>
            <section id="List-with-arrow2" style={{ marginTop: "3rem" }}>
            {/* <NumberCircle number={1} /> */}
             {/* <p className="fs-5 fw-bold">{t(translations.SCH_CHECK_ARROW_TXT1)}</p> */}
              <ListWithArrow
                showNumber={true}
                number={1}
                text={t(translations.SCH_CHECK_ARROW_TXT1)}
                innerDesc={t(translations.SCH_CHECK_ARROW_DESc1)}
                innerImg={test}
                />
                {/* <NumberCircle number={2} /> */}
                {/* <p className="fs-5 fw-bold">{t(translations.SCH_CHECK_ARROW_TXT2)}</p> */}
              <ListWithArrow
                showNumber={true}
                number={2}
                text={t(translations.SCH_CHECK_ARROW_TXT2)}
                innerDesc={t(translations.SCH_CHECK_ARROW_DESc2)}
                innerImg={test}
                />
                {/* <p className="fs-5 fw-bold">{t(translations.SCH_CHECK_ARROW_TXT3)}</p> */}
              {/* <NumberCircle number={3} /> */}
              <ListWithArrow
                showNumber={true}
                number={3}
                text={t(translations.SCH_CHECK_ARROW_TXT3)}
                innerDesc={t(translations.SCH_CHECK_ARROW_DESc3)}
                innerImg={test}
                />
                {/* <NumberCircle number={4} /> */}
                {/* <p className="fs-5 fw-bold">{t(translations.SCH_CHECK_ARROW_TXT4)}</p> */}
              <ListWithArrow
                number={4}
                showNumber={true}
                text={t(translations.SCH_CHECK_ARROW_TXT4)}
                innerDesc={t(translations.SCH_CHECK_ARROW_DESc4)}
                innerImg={test}
                />
                {/* <p className="fs-5 fw-bold"> */}
                {/* <NumberCircle number={5} className="mb-5 mx-5"/> */}
                
                {/* {t(translations.SCH_CHECK_ARROW_TXT5)}</p> */}
              <ListWithArrow
                showNumber={true}
                number={5}
                text={t(translations.SCH_CHECK_ARROW_TXT5)}
                innerDesc={t(translations.SCH_CHECK_ARROW_DESc5)}
                innerImg={test}
              />
              
            </section>
            <section id="FAQ" className="mt-5 mb-5 pt-5 pb-5 text-center">
              <h1
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Neue Haas Grotesk Display Pro",
                  fontSize: "2rem",
                  marginTop: "5%",
                }}
                >
                {t(translations.SCH_ACCORDION_HEAD)}
              </h1>
                <SCHAccordionWrapper />
            </section>
            <section id="card-with-image" className="mt-5 pt-5">
              <section
                id="card-with-image-white-background"
                className="d-block d-lg-flex"
              >
                <section id="label" className="col-3 mt-4">
                  <h1
                    className="font-3rem ffam-Druk-Cond text-uppercase ms-2"
                    style={{ fontSize: "4vw" }}
                    >
                    {t(translations.SCH_CARDS_SIDE_HEADING)}
                  </h1>
                </section>
                <section id="our-range" className="col-12 col-lg-9">
                  <section className="d-flex flex-wrap col-12">
                    <CardWithImageWhite
                      className="col-12 col-md-6 col-lg-4"
                      src={smallracecar}
                      title={t(translations.SCH_CARD_H1)}
                      body={t(translations.SCH_CARD_DESC1)}
                      btn1Text={t(translations.BLIND_TEXT)}
                      btn2Text={t(translations.MEHR)}
                    />
                    <CardWithImageWhite
                      className="col-12 col-md-6 col-lg-4"
                      src={smallracecar}
                      title={t(translations.SCH_CARD_H2)}
                      body={t(translations.SCH_CARD_DESC2)}
                      btn1Text={t(translations.BLIND_TEXT)}
                      btn2Text={t(translations.MEHR)}
                    />
                    <CardWithImageWhite
                      className="col-12 col-md-6 col-lg-4"
                      src={smallracecar}
                      title={t(translations.SCH_CARD_H3)}
                      body={t(translations.SCH_CARD_DESC3)}
                      btn1Text={t(translations.BLIND_TEXT)}
                      btn2Text={t(translations.MEHR)}
                      />
                    <CardWithImageWhite
                      className="col-12 col-md-6 col-lg-4"
                      src={smallracecar}
                      title={t(translations.SCH_CARD_H4)}
                      body={t(translations.SCH_CARD_DESC4)}
                      btn1Text={t(translations.BLIND_TEXT)}
                      btn2Text={t(translations.MEHR)}
                    />
                    <CardWithImageWhite
                      className="col-12 col-md-6 col-lg-4"
                      src={smallracecar}
                      title={t(translations.SCH_CARD_H5)}
                      body={t(translations.SCH_CARD_DESC5)}
                      btn1Text={t(translations.BLIND_TEXT)}
                      btn2Text={t(translations.MEHR)}
                    />
                    <CardWithImageWhite
                      className="col-12 col-md-6 col-lg-4"
                      src={smallracecar}
                      title={t(translations.SCH_CARD_H6)}
                      body={t(translations.SCH_CARD_DES6)}
                      btn1Text={t(translations.BLIND_TEXT)}
                      btn2Text={t(translations.MEHR)}
                    />
                  </section>
                </section>
              </section>
              <ChecklistWithText />
            </section>
          </div>
          <section id="Media" className="mt-5 mb-5 pt-5 pb-5">
            <MediaSection />
          </section>
          <section id="newsletter">
            <NewsLetter />
          </section>
          <section>
            <ContactUs />
          </section>
          <section id="footer">
            <Footer
              link1="our-range"
              link2="FAQ"
              link3="#"
              link4="#"
              link5="#"
              link6="#"
            />
          </section>
        </div>
              </div>
          
      </>
    </>
  );
};

export default Schaden;
