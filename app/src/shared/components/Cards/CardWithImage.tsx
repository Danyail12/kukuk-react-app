import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function CardWithImage(props) {
  return (
    <div className={props.className}>
      <MDBCard
        className={`bg-black border border-light border-rounded card text-light`}
      >
        <MDBCardImage
          className="px-3 pt-3"
          src={props.src}
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle className="fw-bold">{props.title}</MDBCardTitle>
          <MDBCardText className="fw-lighter">{props.body}</MDBCardText>
          <MDBBtn
            className="rounded-pill border border-rounded border-light bg-black"
            href="#"
          >
            {props.btn1Text}
          </MDBBtn>
          <MDBBtn
            className="rounded-pill border mx-md-2 border-rounded border-light text-black"
            style={{ backgroundColor: "#90ff79" }}
            href="#"
          >
            {props.btn2Text}
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default CardWithImage;
