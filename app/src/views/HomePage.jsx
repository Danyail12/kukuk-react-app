import React from "react";
import AUTHENTIFIZIERUNG_VERTICAL from "../assets/images/AUTHENTIFIZIERUNG_VERTICAL.png";
import SCHADEN_VERTICAL from "../assets/images/SCHADEN_VERTICAL.png";
import WERT_VERTICAL from "../assets/images/WERT_VERTICAL.png";
import LOGO_KUKUK from "../assets/images/LOGO_KUKUK.png";
import HomeConstants from "../Constants/home.constants.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translations } from "../Constants/translation.constants.js";
import '../css/pages/HomePage.css'

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="justify-content-center m-0 p-0 position-absolute d-block home-logo">
           <img
            src={LOGO_KUKUK}
            alt="LOGO_KUKUK"
            className="z-2 text-center"
          />
          <h2 className="text-light d-flex flex-column align-items-center z-2 mt-2">
            <b className="text-uppercase fs-6 text-center">
              {t(translations.TAGLINE)}
            </b>
            <p className="fs-6 text-center">
              {t(translations.TAGLINE_SUBTEXT)}
            </p>
          </h2>
        </div>
      <div className="d-flex w-100 m-0 p-0">     
        <div className="col-12 col-md-6 col-lg-4 m-0 p-0">
          <div className="d-flex align-items-center justify-content-center m-0 p-0 position-relative">
            <h2 className="position-absolute text-light d-flex flex-column align-items-center">
              <b className="fs-1 text-uppercase ffam-Druk home-head">{t(translations.DAMAGE)}</b>
              <p className="fs-7 text-center p-2 pb-0"  style={{fontSize:"0.7rem"}}>{t(translations.DAMAGE_SUBTEXT)}</p>
              <Link to={`${HomeConstants.SCHADEN_PAGE}`}>
                <button className="border border-light text-light rounded-pill border-rounded px-5 fs-6 bg-transparent  fw-medium">
                  {t(translations.ENTER)}
                </button>
              </Link>
            </h2>
            <img
              className="w-100 vh-100"
              src={SCHADEN_VERTICAL}
              alt="SCHADEN_VERTICAL"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 m-0 p-0">
          <div className="m-0 p-0 d-flex align-items-center justify-content-center m-0 p-0 position-relative">
            <h2 className="position-absolute text-light d-flex flex-column align-items-center mt-4">
              <b className="fs-1 ffam-Druk home-head text-uppercase">{t(translations.VALUE)}</b>
              <p className="fs-7 text-center p-2 pb-0" style={{fontSize:"0.7rem"}}>
                {t(translations.VALUE_SUBTEXT)}
              </p>
              <Link to={`${HomeConstants.WERT_PAGE}`}>
                <button className="border border-light text-light rounded-pill border-rounded px-5 fs-6 bg-transparent fw-medium">
                  {t(translations.ENTER)}
                </button>
              </Link>
            </h2>
            <img
              className="w-100 vh-100"
              src={WERT_VERTICAL}
              alt="WERT_VERTICAL"
            />
            <section className="position-absolute text-black fs-7"  style={{fontSize:"0.7rem",bottom:"12px"}}>
              <a
                href="https://www.instagram.com"
                className="bg-transparentc fw-lighter text-white ms-2"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedIn.com"
                className="bg-transparent fw-lighter text-white ms-2"
              >
                LINKEDIN
              </a>
              <a
                href="https://www.facebook.com"
                className="bg-transparent fw-lighter text-white ms-2"
              >
                FACEBOOK
              </a>
              <a
                href="https://www.xing.com"
                className="bg-transparent fw-lighter text-white ms-2"
              >
                XING
              </a>
            </section>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 m-0 p-0 d-flex align-items-center justify-content-center m-0 p-0 position-relative">
          <h2 className="position-absolute text-light d-flex flex-column align-items-center">
            <b className="fs-1  ffam-Druk home-head  text-uppercase">{t(translations.AUTHENTICATION)}</b>
            <p className="fs-7 text-center p-2 pb-0"  style={{fontSize:"0.7rem"}}>
              {t(translations.AUTHENTICATION_SUBTEXT)}
            </p>
            <Link to={`${HomeConstants.AUTHENTIFIZIERUNG_PAGE}`}>
              <button className="border border-light text-light rounded-pill border-rounded px-5 fs-6 bg-transparent fw-medium">
                {t(translations.ENTER)}
              </button>
            </Link>
          </h2>
          <img
            className="w-100 vh-100"
            src={AUTHENTIFIZIERUNG_VERTICAL}
            alt="AUTHENTIFIZIERUNG_VERTICAL"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;


// import React from "react";
// import AUTHENTIFIZIERUNG_VERTICAL from "../assets/images/AUTHENTIFIZIERUNG_VERTICAL.png";
// import SCHADEN_VERTICAL from "../assets/images/SCHADEN_VERTICAL.png";
// import WERT_VERTICAL from "../assets/images/WERT_VERTICAL.png";
// import LOGO_KUKUK from "../assets/images/LOGO_KUKUK.png";
// import HomeConstants from "../Constants/home.constants.js";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { translations } from "../Constants/translation.constants.js";

// const HomePage = () => {
//   const { t } = useTranslation();
//   return (
//     <div>
//       {/* <div className="justify-content-center m-0 p-0 position-absolute d-block home-logo">
//           <img
//             src={LOGO_KUKUK}
//             alt="LOGO_KUKUK"
//             className="z-2 text-center"
//           />
//           <h2 className="text-light d-flex flex-column align-items-center z-2 mt-5">
//             <b className="text-uppercase fs-6 text-center">
//               {t(translations.TAGLINE)}
//             </b>
//             <p className="fs-6 text-center">
//               {t(translations.TAGLINE_SUBTEXT)}
//             </p>
//           </h2>
//         </div> */}
//       <div className="d-flex w-100 m-0 p-0">
//         <div className="col-md-4 m-0 p-0">
//           <div className="d-flex align-items-center justify-content-center m-0 p-0 position-relative">
//             <div className="position-absolute text-light d-flex flex-column align-items-center" >
//               <b className=" text-uppercase ffam-Druk home-head" style={{fontSize:"4vw"}} >{t(translations.DAMAGE)}</b>
//               <p className="text-center p-3" style={{fontSize:"1.2vw"}}>{t(translations.DAMAGE_SUBTEXT)}</p>
//               <Link to={`${HomeConstants.SCHADEN_PAGE}`} className="d-flex justify-content-center">
//                 <button className="d-flex w-50 justify-content-center border border-light text-light rounded-pill border-rounded px-5 bg-transparent  fw-medium" style={{fontSize:"1.2vw"}}>
//                   {t(translations.ENTER)}
//                 </button>
//               </Link>
//             </div>
//             <img
//               className="w-100 h-100"
//               src={SCHADEN_VERTICAL}
//               alt="SCHADEN_VERTICAL"
//             />
//           </div>
//         </div>
//         <div className="col-md-4 m-0 p-0">
//           <div className="m-0 p-0 d-flex align-items-center justify-content-center m-0 p-0 position-relative">
//             <h2 className="position-absolute text-light d-flex flex-column align-items-center">
//               <b className=" ffam-Druk home-head text-uppercase" style={{fontSize:"4vw"}}>{t(translations.VALUE)}</b>
//               <p className=" text-center p-3" style={{fontSize:"1.2vw"}}>
//                 {t(translations.VALUE_SUBTEXT)}
//               </p>
//               <Link to={`${HomeConstants.WERT_PAGE}`}>
//                 <button className="border border-light text-light rounded-pill border-rounded px-5 fs-6 bg-transparent fw-medium">
//                   {t(translations.ENTER)}
//                 </button>
//               </Link>
//             </h2>
//             <img
//               className="w-100 h-100"
//               src={WERT_VERTICAL}
//               alt="WERT_VERTICAL"
//             />
//             <section className="position-absolute text-black bottom-0">
//               <a
//                 href="https://www.instagram.com"
//                 className="bg-transparentc fw-lighter text-white ms-2"
//               >
//                 INSTAGRAM
//               </a>
//               <a
//                 href="https://www.linkedIn.com"
//                 className="bg-transparent fw-lighter text-white ms-2"
//               >
//                 LINKEDIN
//               </a>
//               <a
//                 href="https://www.facebook.com"
//                 className="bg-transparent fw-lighter text-white ms-2"
//               >
//                 FACEBOOK
//               </a>
//               <a
//                 href="https://www.xing.com"
//                 className="bg-transparent fw-lighter text-white ms-2"
//               >
//                 XING
//               </a>
//             </section>
//           </div>
//         </div>
//         <div className="col-md-4 m-0 p-0 d-flex align-items-center justify-content-center m-0 p-0 position-relative">
//           <h2 className="position-absolute text-light d-flex flex-column align-items-center" >
//             <b className=" ffam-Druk home-head  text-uppercase" style={{fontSize:"4vw"}}>{t(translations.AUTHENTICATION)}</b>
//             <p className="text-center p-3" style={{fontSize:"1.2vw"}}>
//               {t(translations.AUTHENTICATION_SUBTEXT)}
//             </p>
//             <Link to={`${HomeConstants.AUTHENTIFIZIERUNG_PAGE}`}>
//               <button className="border border-light text-light rounded-pill border-rounded px-5 fs-6 bg-transparent fw-medium">
//                 {t(translations.ENTER)}
//               </button>
//             </Link>
//           </h2>
//           <img
//             className="w-100 h-100"
//             src={AUTHENTIFIZIERUNG_VERTICAL}
//             alt="AUTHENTIFIZIERUNG_VERTICAL"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

