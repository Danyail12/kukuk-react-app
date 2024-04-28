import React, { useState } from "react";
import DiagonalArrow from "../../assets/images/diagonal-arrow.svg";

function RectangleCard(props) {
  const [shoudlShowInnerText, setShouShowInnerText] = useState(false);

  const handleShouShowInnerText = () => {
    setShouShowInnerText((prev) => !prev);
  };
  return (
    <div>
      <section className="mt-4 container-fluid">
        <section className="row border border-light rounded">
          <section
            id="number"
            className="text-dark bg-light py-2 col-1 d-flex justify-content-center border-right border-dark"
          >
            <span
              className="px-2 px-sm-3 px-md-3 px-lg-3 border border-dark rounded d-flex align-items-center"
              style={{
                fontFamily: 'Neue Haas Grotesk Display Pro',
                fontWeight: "950",
                maxHeight: "2rem",
              }}
            >
              {props.number}
            </span>
          </section>
          <section id="text" className="col-9 py-3 px-lg-5">
            {props.text}
            <section
              className={`mb-4 mt-3 ${!shoudlShowInnerText && "d-none"}`}
            >
              <br />
              Informieren Sie unverzüglich Ihre Kaskoversicherung. Eine zeitnahe
              Meldung ist entscheidend für eine reibungslose Schadenabwicklung.
            </section>
          </section>
          <section
            role="button"
            onClick={handleShouShowInnerText}
            id="diagonal-arrow-icon"
            className="col-1 py-2 px-0 px-sm-2 px-md-2 px-lg-2 pt-3 mx-3 mx-sm-3 mx-md-4 mx-lg-3 mx-xl-4 mx-xxl-4 cursor-pointer"
          >
            <img src={DiagonalArrow}  alt="diagonal-arrow" />
          </section>
        </section>
      </section>
    </div>
  );
}

export default RectangleCard;
