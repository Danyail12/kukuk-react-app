import React from "react";
import AUTHENTIFIZIERUNG_VERTICAL from "../assets/images/AUTHENTIFIZIERUNG_VERTICAL.png";
import SCHADEN_VERTICAL from "../assets/images/SCHADEN_VERTICAL.png";
import WERT_VERTICAL from "../assets/images/WERT_VERTICAL.png";
import LOGO_KUKUK from "../assets/images/LOGO_KUKUK.png";
import HomeConstants from "../Constants/home.constants.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translations } from "../Constants/translation.constants.js";

const Impression = () => {
    const { t } = useTranslation()
    return (
        <div className="p-5" style={{ backgroundColor: 'black' }}>
            <div className="mx-3" style={{ borderBottom: "1px solid white" }}>
                <h1 className="text-white text-uppercase">{t(translations.IMPRESSUM_MAIN_HEAD)}</h1>
            </div>
            <div className="mx-3 mt-5">
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD1)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA1)}</p>
                </div>
                <div>
                <h4 className="text-white" >{t(translations.IMPRESSUM_HEAD2)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA2)}</p>
                </div>
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD3)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA3)}</p>
                </div>
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD4)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA4)}</p>
                </div>
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD5)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA5)}</p>
                </div>
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD6)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA6)}</p>
                </div>
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD7)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA7)}</p>
                </div>
                <div>
                <h4 className="text-white">{t(translations.IMPRESSUM_HEAD8)}</h4>
                <p className="text-white" style={{fontWeight:'100'}}>{t(translations.IMPRESSUM_PARA8)}</p>
                </div>

            </div>
        </div>
    );
};

export default Impression;