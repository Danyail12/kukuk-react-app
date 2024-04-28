import { MDBIcon, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import { Link } from "react-router-dom";

const NewsCards2 = (props) => {
  const { t } = useTranslation();
  return (
    <>
      
        <div className="col-12 col-md-6 col-lg-4 p-2" style={{ height: 550 }}>
          <img src={props.img} width={"100%"} height={"100%"} />
        </div>
    </>
  );
};

export default NewsCards2;
