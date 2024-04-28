import React from "react";
import AccordionComponent from "./AccordionComponent";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function AUTHAccordionWrapper(props) {
  const { t } = useTranslation();
  return (
    <>
      <AccordionComponent
        initActive="1"
        collapseId="2"
        title={t(translations.AUTH_ACCRODION_TXT1)}
        text={t(translations.AUTH_ACCRODION_DESC1)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="2"
        title={t(translations.AUTH_ACCRODION_TXT2)}
        text={t(translations.AUTH_ACCRODION_DESC2)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="3"
        title={t(translations.AUTH_ACCRODION_TXT3)}
        text={t(translations.AUTH_ACCRODION_DESC3)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="4"
        title={t(translations.AUTH_ACCRODION_TXT4)}
        text={t(translations.AUTH_ACCRODION_DESC4)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="5"
        title={t(translations.AUTH_ACCRODION_TXT5)}
        text={t(translations.AUTH_ACCRODION_DESC5)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="6"
        title={t(translations.AUTH_ACCRODION_TXT6)}
        text={t(translations.AUTH_ACCRODION_DESC6)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="7"
        title={t(translations.AUTH_ACCRODION_TXT7)}
        text={t(translations.AUTH_ACCRODION_DESC7)}
      />
      <AccordionComponent
        initActive="1"
        collapseId="8"
        title={t(translations.AUTH_ACCRODION_TXT8)}
        text={t(translations.AUTH_ACCRODION_DESC8)}
      />
    </>
  );
}

export default AUTHAccordionWrapper;
