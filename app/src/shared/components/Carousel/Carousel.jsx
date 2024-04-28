import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// =========================
// Slide
// =========================
const Carousel = (props) => {
  useEffect(() => {
    const elements = document.getElementsByClassName("alice-carousel__stage-item __active");
    elements[0]?.style.setProperty('margin-top', '30px');
    elements[2]?.style.setProperty('margin-top', '30px');
    elements[1]?.style.setProperty('height', '440px');
    elements[1]?.style.setProperty('border', 'solid');


  }, [])
    

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 3 },
  };

  const slideChange = () => {
    const elementsPlain = document.getElementsByClassName(
      "alice-carousel__stage-item __active"
    );
    for (var element of elementsPlain) {
      element?.style.setProperty('margin-top', '0px');
      element?.style.setProperty('height', 'auto');
      element?.style.setProperty('border', 'none');
    }
    const elements2 = document.getElementsByClassName("alice-carousel__stage-item __active");
    if(elements2.length === 2){
      elements2[0] && elements2[0]?.style.setProperty('height', '440px');
      elements2[0] && elements2[0]?.style.setProperty('border', 'solid');
      elements2[1] && elements2[1]?.style.setProperty('margin-top', '30px');
    }
    else{
    elements2[0] && elements2[0]?.style.setProperty('margin-top', '30px');
    elements2[2] && elements2[2]?.style.setProperty('margin-top', '30px');
    elements2[1] && elements2[1]?.style.setProperty('height', '440px');
    elements2[1] && elements2[1]?.style.setProperty('border', 'solid');
    }
  }
    return (
    <AliceCarousel
      mouseTracking
      items={props.items}
      responsive={responsive}
      controlsStrategy="alternate"
      animationType="fadeout"
      onSlideChanged={() => slideChange()}
      on
    />
  );
};
export default Carousel;