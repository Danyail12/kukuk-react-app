import React from "react";

function Stats(props) {
  return (
    <div className="pt-5 text-uppercase">
      <div className="pt-5 d-lg-flex p-0 pb-5 pl-5 pr-0 mb-5 justify-content-center">
        <div className="col-12 col-lg-2 text-center d-flex flex-column align-content-center flex-wrap">
          <h1 className="h-text">{props.num1}</h1>
          <div className="w-25 text-center ">
            <label className="label-txt">{props.txt1}</label>
          </div>
        </div>
        <div className="col-12 col-lg-2 text-center d-flex flex-column align-content-center flex-wrap">
          <h1 className="h-text">{props.num2}</h1>
          <div className="w-50 text-center">
            <label className="label-txt">{props.txt2}</label>
          </div>
        </div>
        <div className="col-12 col-lg-2 text-center d-flex flex-column align-content-center flex-wrap">
          <h1 className="h-text">{props.num3}</h1>
          <div className="w-100 text-center ">
            <label className="label-txt">{props.txt3}</label>
          </div>
        </div>
        <div className="col-12 col-lg-2 text-center d-flex flex-column align-content-center flex-wrap">
          <h1 className="h-text">{props.num4}</h1>
          <div className="w-50 text-center ">
            <label className="label-txt">{props.txt4}</label>
          </div>
        </div>
        <div className="col-12 col-lg-2 text-center d-flex flex-column align-content-center flex-wrap">
          <h1 className="h-text">{props.num5}</h1>
          <div className="w-100 text-center ">
            <label className="label-txt">{props.txt5}</label>
          </div>
        </div>
        <div className="col-12 col-lg-2 text-center d-flex flex-column align-content-center flex-wrap">
          <h1 className="h-text">{props.num6}</h1>
          <div className="w-100 text-center ">
            <label className="label-txt">{props.txt6}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
