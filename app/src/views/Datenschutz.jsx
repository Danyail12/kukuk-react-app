import React from "react";
import AUTHENTIFIZIERUNG_VERTICAL from "../assets/images/AUTHENTIFIZIERUNG_VERTICAL.png";
import SCHADEN_VERTICAL from "../assets/images/SCHADEN_VERTICAL.png";
import WERT_VERTICAL from "../assets/images/WERT_VERTICAL.png";
import LOGO_KUKUK from "../assets/images/LOGO_KUKUK.png";
import HomeConstants from "../Constants/home.constants.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translations } from "../Constants/translation.constants.js";

const Datenschutz = () => {
    const { t } = useTranslation()
    return (
        <div className="p-5" style={{ backgroundColor: 'black' }}>
            <div className="mx-3" style={{ borderBottom: "1px solid white" }}>
                <h1 className="text-white">{t(translations.DATENSCHUTZ_MAIN_HEAD)}</h1>
            </div>
            <div className="mx-3 mt-5">
                <h3 className="text-white" style={{ fontWeight: '500' }}>{t(translations.DATENSCHUTZ_SEC1_MAINHEAD)}</h3>
                <div className="mt-5">
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC1_HEAD1)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA1)}</p>
                </div>
                <div>
                    <h5 className="text-white" >{t(translations.DATENSCHUTZ_SEC1_HEAD2)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA2)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC1_HEAD3)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA3)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC1_HEAD4)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA4)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC1_HEAD5)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA5)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC1_HEAD6)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA6)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC1_HEAD7)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC1_PARA7)}</p>
                </div>

            </div>
            <div className="mx-3 mt-5">
                <h3 className="text-white" style={{ fontWeight: '500' }}>{t(translations.DATENSCHUTZ_SEC2_MAINHEAD)}</h3>
                <div className="mt-5">
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD1)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA1)}</p>
                </div>
                <div>
                    <h5 className="text-white" >{t(translations.DATENSCHUTZ_SEC2_HEAD2)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA2)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD3)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA3)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD4)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA4)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD5)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA5)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD6)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA6)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD7)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA7)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD8)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA8)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD9)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA9)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC2_HEAD10)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC2_PARA10)}</p>
                </div>

            </div>
            <div className="mx-3 mt-5">
                <h3 className="text-white" style={{ fontWeight: '500' }}>{t(translations.DATENSCHUTZ_SEC3_MAINHEAD)}</h3>
                <div className="mt-5">
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC3_HEAD1)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC3_PARA1)}</p>
                </div>
                <div>
                    <h5 className="text-white" >{t(translations.DATENSCHUTZ_SEC3_HEAD2)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC3_PARA2)}</p>
                </div>
                <div>
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC3_HEAD3)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC3_PARA3)}</p>
                </div>
            </div>
            <div className="mx-3 mt-5">
                <h3 className="text-white" style={{ fontWeight: '500' }}>{t(translations.DATENSCHUTZ_SEC4_MAINHEAD)}</h3>
                <div className="mt-5">
                    <h5 className="text-white">{t(translations.DATENSCHUTZ_SEC4_PARA1)}</h5>
                    <p className="text-white" style={{ fontWeight: '100',whiteSpace:'pre-line' }}>{t(translations.DATENSCHUTZ_SEC4_HEAD1)}</p>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;