import React from "react";
import AccordionComponent from "./AccordionComponent";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function SCHAccordionWrapper(props) {
  const { t } = useTranslation();
  return (
    <>
      <AccordionComponent
        initActive="1"
        collapseId="2"
        title={t(translations.SCH_ACCORDION_TXT1)}
        text={t(translations.SCH_ACCORDION_DESC1)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="2"
        title={t(translations.SCH_ACCORDION_TXT2)}
        text={t(translations.SCH_ACCORDION_DESC2)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="3"
        title={t(translations.SCH_ACCORDION_TXT3)}
        text={t(translations.SCH_ACCORDION_DESC3)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="4"
        title={t(translations.SCH_ACCORDION_TXT4)}
        text={t(translations.SCH_ACCORDION_DESC4)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="5"
        title={t(translations.SCH_ACCORDION_TXT5)}
        text={t(translations.SCH_ACCORDION_DESC5)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="6"
        title={t(translations.SCH_ACCORDION_TXT6)}
        text={t(translations.SCH_ACCORDION_DESC6)}
      />
    </>
  );
}

export default SCHAccordionWrapper;
