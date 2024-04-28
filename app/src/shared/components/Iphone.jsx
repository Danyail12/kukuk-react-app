import React from "react";

function Iphone(props) {
  return (
    <div className="row w-100  position-relative my-5 bg-light-green d-flex align-items-center m-0 py-5">
      <div className="col-md-6 p-5">
        <h1
          className=" kasko text-uppercase"
          style={{ lineHeight: "initial", fontSize: "2rem", color: "#0F1115",letterSpacing:'2px' }}
        >
          {props.heading}
        </h1>
        <p style={{ color: "#0F1115", fontWeight: 300 }}>{props.desc}</p>
        <button className="border border-dark border-rounded rounded-pill px-4 fw-light bg-black text-light">
          {props.btnText}
          <i className="fas fa-arrow-right-long text-white ms-2"></i>
        </button>
      </div>
      <div className="col-md-6 img-setting">
        <img src={props.src} alt="iphone_img" className={props.page === 1 ? "w-50":"w-100"} style={{ marginLeft: props.page === 1 ? "18%":"0%" }} />
      </div>
    </div>
  );
}

export default Iphone;
