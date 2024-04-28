import { MDBIcon, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../Constants/translation.constants";
import { Link } from "react-router-dom";

const NewsCards = (props) => {
  const { t } = useTranslation();
  return (
    <>

      <div className="col-12 col-md-6 col-lg-4 p-2" style={{ height: 450 }}>
        <Link
          to={props.route}
        >
          <img src={props.img} width={"100%"} height={"70%"} />
          <div>
            <h3 className="text-white my-2">{props.head1} </h3>
            <h3 className="text-white">{props.head2}</h3>
            <p style={{ color: "#737373" }}>{props.desc}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewsCards;
