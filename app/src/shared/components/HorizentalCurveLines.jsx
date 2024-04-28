import React, { useState } from "react";

function HorizentalCurveLines(props) {
  const [text1,settext1] = useState(props.txt1);
  const [text2,settext2] = useState(props.txt2);
  const [text3,settext3] = useState(props.txt3);
  const [text4,settext4] = useState(props.txt4);
  // const [hoverText1,setHoverText1] = useState(props.hoverTxt1);
  // const [hoverText2,setHoverText2] = useState(props.hoverTxt2);
  // const [hoverText3,setHoverText3] = useState(props.hoverTxt3);
  // const [hoverText4,setHoverText4] = useState(props.hoverTxt4);


  return (
    <div className="main text-uppercase">
      <div className="rotate-heading pt-5" style={{ paddingLeft: "52%", width:"154%",marginLeft:"-50%" }}  onMouseOver={()=>{settext1(props.hoverTxt1)}} onMouseOut={()=>{settext1(props.txt1)}} onClick={()=>{
           document.querySelector(`#${props.firstTxtDivId}`).scrollIntoView();
      }} >
        <h1 className="lines-fonts">{text1}</h1>
      </div>
      <div className="rotate-heading pt-4" style={{ paddingLeft: "66%", width:"154%",marginLeft:"-50%" }} onMouseOver={()=>{settext2(props.hoverTxt2)}} onMouseOut={()=>{settext2(props.txt2)}} onClick={()=>{
           document.querySelector(`#${props.secondTxtDivId}`).scrollIntoView();
      }}>
        <h1 className="lines-fonts">{text2}</h1>
      </div>
      <div className="rotate-heading pt-4" style={{ paddingLeft: "79%", width:"154%",marginLeft:"-50%" }} onMouseOver={()=>{settext3(props.hoverTxt3)}} onMouseOut={()=>{settext3(props.txt3)}} onClick={()=>{
           document.querySelector(`#${props.thirdTxtDivId}`).scrollIntoView();
      }}>
        <h1 className="lines-fonts">{text3}</h1>
      </div>
      <div
        className="rotate-heading border-0 pt-4"
        style={{ paddingLeft: "85%", width:"154%",marginLeft:"-50%" }} onMouseOver={()=>{settext4(props.hoverTxt4)}} onMouseOut={()=>{settext4(props.txt4)}}
        onClick={()=>{
          document.querySelector(`#${props.fourthTxtDivId}`).scrollIntoView();
     }}
      >
        <h1 className="lines-fonts">{text4}</h1>
      </div>
    </div>
  );
}

export default HorizentalCurveLines;
