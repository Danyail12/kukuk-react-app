import React from "react";

function RoundedButton(props) {
  return (
    <div>
      <button className="px-5 fs-6 border border-rounded fw-lighter border-light bg-transparent text-white rounded-pill text-uppercase">
        {props.text}
      </button>
    </div>
  );
}

export default RoundedButton;
