import { useTranslation } from "react-i18next";
import RoundedButton from "../shared/components/RoundedButton";
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
import NewsLetter from "../shared/components/NewsLetter";
import ContactUs from "../shared/components/ContactUs";
import { Link } from "react-router-dom";
import { translations } from "../Constants/translation.constants";

function News(props) {
    const { t } = useTranslation();

    return (
        <>
            <div className="p-5" style={{ backgroundColor: "black" }}>
                <div className="col-12 justify-content-end d-flex" style={{ borderBottom: "2px solid white" }}>
                    <div className="col-6 justify-content-between d-flex" >
                        <h1 className="ffam-Druk-Cond text-white">{t(translations.WER_NEWS)}</h1>
                        <Link
                            to={"/wert"}
                        >
                            <RoundedButton
                                text={"Back"}
                            />
                        </Link>
                    </div>
                </div>
                <div className="d-flex col-12 mt-5 flex-wrap">
                    <NewsCards
                        img={newscard1}
                        head1={t(translations.NEWS_CARDS_1_HEAD1)}
                        head2={t(translations.NEWS_CARDS_1_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />


                    <NewsCards
                        img={newscard2}
                        head1={t(translations.NEWS_CARDS_2_HEAD1)}
                        head2={t(translations.NEWS_CARDS_2_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                        route={"/CardDetails"}
                    />
                    <NewsCards
                        img={newscard3}
                        head1={t(translations.NEWS_CARDS_3_HEAD1)}
                        head2={t(translations.NEWS_CARDS_3_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                        route={"/CardDetails2"}

                    />

                    <NewsCards
                        img={newscard4}
                        head1={t(translations.NEWS_CARDS_1_HEAD1)}
                        head2={t(translations.NEWS_CARDS_1_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard5}
                        head1={t(translations.NEWS_CARDS_2_HEAD1)}
                        head2={t(translations.NEWS_CARDS_2_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard6}
                        head1={t(translations.NEWS_CARDS_3_HEAD1)}
                        head2={t(translations.NEWS_CARDS_3_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard7}
                        head1={t(translations.NEWS_CARDS_1_HEAD1)}
                        head2={t(translations.NEWS_CARDS_1_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard8}
                        head1={t(translations.NEWS_CARDS_2_HEAD1)}
                        head2={t(translations.NEWS_CARDS_2_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard9}
                        head1={t(translations.NEWS_CARDS_3_HEAD1)}
                        head2={t(translations.NEWS_CARDS_3_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard10}
                        head1={t(translations.NEWS_CARDS_1_HEAD1)}
                        head2={t(translations.NEWS_CARDS_1_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard11}
                        head1={t(translations.NEWS_CARDS_2_HEAD1)}
                        head2={t(translations.NEWS_CARDS_2_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard12}
                        head1={t(translations.NEWS_CARDS_3_HEAD1)}
                        head2={t(translations.NEWS_CARDS_3_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard1}
                        head1={t(translations.NEWS_CARDS_1_HEAD1)}
                        head2={t(translations.NEWS_CARDS_1_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard2}
                        head1={t(translations.NEWS_CARDS_2_HEAD1)}
                        head2={t(translations.NEWS_CARDS_2_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard3}
                        head1={t(translations.NEWS_CARDS_3_HEAD1)}
                        head2={t(translations.NEWS_CARDS_3_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard1}
                        head1={t(translations.NEWS_CARDS_1_HEAD1)}
                        head2={t(translations.NEWS_CARDS_1_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard2}
                        head1={t(translations.NEWS_CARDS_2_HEAD1)}
                        head2={t(translations.NEWS_CARDS_2_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                    <NewsCards
                        img={newscard3}
                        head1={t(translations.NEWS_CARDS_3_HEAD1)}
                        head2={t(translations.NEWS_CARDS_3_HEAD2)}
                        desc={t(translations.NEWS_DESC)}
                    />
                </div>
            </div>
            <ContactUs />

        </>
    );
}
export default News;
