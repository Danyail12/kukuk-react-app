import React from "react";
import RectangleCard from "./RectangleCard";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function CheckListWithImage(props) {
  const { t } = useTranslation();
  return (
    <section className="row mt-5">
      <section className="col-lg-6 col-sm-12">
        <p style={{fontWeight:'300'}}>{t(translations.SCH_CHECKLIST_DESC)}</p>
        <RectangleCard number={1} text={t(translations.SCH_CHECKLIST_TXT1)} />
        <RectangleCard number={2} text={t(translations.SCH_CHECKLIST_TXT2)} />
        <RectangleCard number={3} text={t(translations.SCH_CHECKLIST_TXT3)} />
        <RectangleCard number={4} text={t(translations.SCH_CHECKLIST_TXT4)} />
        <RectangleCard number={5} text={t(translations.SCH_CHECKLIST_TXT5)} />
      </section>
      <section
        className="col-lg-6 col-sm-12 mt-3 mt-sm-3 mt-md-3 mt-lg-0"
        style={{ paddingLeft: "2%" }}
      >
        <img
          className="float-end checklist-image border-rounded"
          src={props.image}
          alt="ReactangleSectionImage"
          style={{ height: "81%", width: "100%",borderRadius:'5px',objectFit:'cover' }}
        />
      </section>
    </section>
  );
}

export default CheckListWithImage;
