import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";

function CardWithImageWhite(props) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <MDBCard
      className={`fw-bolder border-rounded card text-black my-3 px-2 ${props.className}`}
      style={{ marginRight: "0", background: "transparent", border: "none" }}
    >
      <div className="bg-light" style={{ borderRadius: "10px" }}>
        <MDBCardBody className="d-flex flex-column justify-content-between" style={{ minHeight: "530px" }}>
          <MDBCardTitle className="fw-bold mb-5 text-uppercase">
            {props.title}
          </MDBCardTitle>
          <MDBCardText className="fw-light">
            {showFullText ? props.body : props.body.slice(0, 100)}
          </MDBCardText>
          <section>
            {props.body.length > 100 && (
              <MDBBtn
                className="rounded-pill border border-rounded border-dark bg-light text-black me-2"
                onClick={toggleShowFullText}
                style={{ fontSize: "10px" }}
              >
                {showFullText ? "Read Less" : "Read More"}
              </MDBBtn>
            )}
            <MDBBtn
              className="rounded-pill border  px-5 border-rounded text-black"
              style={{ backgroundColor: "#90ff79", fontSize: "10px" }}
              href="#"
            >
              {props.btn2Text}
            </MDBBtn>
          </section>
        </MDBCardBody>
      </div>
    </MDBCard>
  );
}

export default CardWithImageWhite;
