import { useTranslation } from "react-i18next";
import carddetail2 from "../assets/images/newscard2.jpg"
import StepperListing from "../shared/components/StepperListing";
import { translations } from "../Constants/translation.constants";
function CardDetails(props) {
    const { t } = useTranslation();
    const steps = [
        {
            label: t(translations.CARD_DETAIL_STEP1),
            description: t(translations.CARD_DETAIL_STEP1_DESC),
        },
        {
            label: t(translations.CARD_DETAIL_STEP2),
            description: t(translations.CARD_DETAIL_STEP2_DESC),
        },
        {
            label: t(translations.CARD_DETAIL_STEP3),
            description: t(translations.CARD_DETAIL_STEP3_DESC),
        },
        {
            label: t(translations.CARD_DETAIL_STEP4),
            description: t(translations.CARD_DETAIL_STEP4_DESC),
        },
        {
            label: t(translations.CARD_DETAIL_STEP5),
            description: t(translations.CARD_DETAIL_STEP5_DESC),
        },
        {
            label: t(translations.CARD_DETAIL_STEP6),
            description: t(translations.CARD_DETAIL_STEP6_DESC),
        },
        {
            label: t(translations.CARD_DETAIL_STEP7),
            description: t(translations.CARD_DETAIL_STEP7_DESC),
        },
    ];
    return (
        <>
            <div>
                <img src={carddetail2} width={"100%"} height={"700px"} />
                <div className="col-12 d-flex justify-content-center" style={{ position: 'absolute', top: "50%" }}>
                    <h1 className="ffa-druk-cond text-white">{t(translations.CARD_DETAIL_HEAD)}</h1>
                </div>
            </div>
            <div className="p-5" style={{ backgroundColor: 'black' }}>
                <div className="p-5">
                    <h3 className="text-white col-12 col-lg-6">{t(translations.CARD_DETAIL_HEAD1)}</h3>
                    <p className="text-white mt-5 col-12 col-lg-6" style={{ fontWeight: '100' }}>{t(translations.CARD_DETAIL_DESC1)}</p>
                    <section className="mt-5">
                        <StepperListing
                            steps={steps} />

                    </section>
                    <h3 className="text-white col-12 col-lg-6 mt-5">{t(translations.CARD_DETAIL_HEAD2)}</h3>
                    <p className="text-white col-12 col-lg-6" style={{ fontWeight: '100' }}>{t(translations.CARD_DETAIL_DESC2)}</p>
                </div>
            </div>

        </>
    );
}
export default CardDetails;
