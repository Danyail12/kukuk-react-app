import React from "react";
import methoduse from "../../assets/images/longmethoduse.svg";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";

function MethodsInUse() {
  const { t } = useTranslation();
  return (
    <section className="d-flex flex-column overflow-auto">
      <h1 className="text-uppercase">{t(translations.METHODUSE)}</h1>
      <img src={methoduse} alt="methoduse" />
    </section>
  );
}

export default MethodsInUse;
