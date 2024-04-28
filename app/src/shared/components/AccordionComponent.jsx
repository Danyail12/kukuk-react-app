import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import React from "react";
// Initialization for ES Users

const AccordionComponent = (props) => {
  return (
    <>
      <MDBAccordion initialActive={props.initActive} className="mt-5">
        <MDBAccordionItem
          collapseId={props.collapseId}
          headerTitle={props.title}
        >
          {props.text}
        </MDBAccordionItem>
      </MDBAccordion>
    </>
  );
};

export default AccordionComponent;
