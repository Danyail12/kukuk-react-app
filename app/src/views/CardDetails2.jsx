import { useTranslation } from "react-i18next";
import carddetail2 from "../assets/images/newscard2.jpg"
import StepperListing from "../shared/components/StepperListing";
import { translations } from "../Constants/translation.constants";
import NewsCards from "../shared/components/NewsCards";
import newscard1 from "../assets/images/newscard1.jpg"
import newscard2 from "../assets/images/newscard2.jpg"
import newscard3 from "../assets/images/newscard3.jpg"
import newscard4 from "../assets/images/newscard4.jpg"
import newscard5 from "../assets/images/newscard5.jpg"
import newscard6 from "../assets/images/newscard6.jpg"
import newscard7 from "../assets/images/newscard7.jpg"
import newscard8 from "../assets/images/newscard8.jpg"
import newscard9 from "../assets/images/newscard9.jpg"
import newscard10 from "../assets/images/newscard10.jpg"
import newscard11 from "../assets/images/newscard11.jpg"
import newscard12 from "../assets/images/newscards12.jpg"
import NewsCards2 from "../shared/components/NewsCards2";

function CardDetails2(props) {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <img src={newscard3} width={"100%"} height={"700px"} />
                <div className="col-12 d-flex justify-content-center" style={{ position: 'absolute', top: "50%" }}>
                    <h1 className="ffa-druk-cond text-white">{t(translations.CARD_DETAIL2_HEAD)}</h1>
                </div>
            </div>
            <div className="p-5" style={{ backgroundColor: 'black' }}>
                <div className="p-5">
                    <h3 className="text-white col-12">{t(translations.CARD_DETAIL2_HEAD1)}</h3>
                    <p className="text-white mt-5 col-12" style={{ fontWeight: '100' ,whiteSpace:'pre-line'  }}>{t(translations.CARD_DETAIL2_DESC1)}</p>

                    <h1 className="text-white col-12 mt-5" style={{fontSize:"4.5rem"}}>{t(translations.CARD_DETAIL2_HEAD2)}</h1>
                    <p className="text-white col-12" style={{ fontWeight: '100',whiteSpace:'pre-line'  }}>{t(translations.CARD_DETAIL2_DESC2)}</p>
                    <div className="d-flex col-12 mt-5 flex-wrap">
                <NewsCards2
                    img={newscard1}
                    head1={t(translations.NEWS_CARDS_1_HEAD1)}
                    head2={t(translations.NEWS_CARDS_1_HEAD2)}
                    desc={t(translations.NEWS_DESC)}
                />


                <NewsCards2
                    img={newscard2}
                    head1={t(translations.NEWS_CARDS_2_HEAD1)}
                    head2={t(translations.NEWS_CARDS_2_HEAD2)}
                    desc={t(translations.NEWS_DESC)}
                />
                <NewsCards2
                    img={newscard3}
                    head1={t(translations.NEWS_CARDS_3_HEAD1)}
                    head2={t(translations.NEWS_CARDS_3_HEAD2)}
                    desc={t(translations.NEWS_DESC)}
                />

                <NewsCards2
                    img={newscard4}
                    head1={t(translations.NEWS_CARDS_1_HEAD1)}
                    head2={t(translations.NEWS_CARDS_1_HEAD2)}
                    desc={t(translations.NEWS_DESC)}
                />
                <NewsCards2
                    img={newscard5}
                    head1={t(translations.NEWS_CARDS_2_HEAD1)}
                    head2={t(translations.NEWS_CARDS_2_HEAD2)}
                    desc={t(translations.NEWS_DESC)}
                />
                <NewsCards2
                    img={newscard6}
                    head1={t(translations.NEWS_CARDS_3_HEAD1)}
                    head2={t(translations.NEWS_CARDS_3_HEAD2)}
                    desc={t(translations.NEWS_DESC)}
                />
            </div>
                </div>
               
            </div>
           
        </>
    );
}
export default CardDetails2;
