import React, { useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Marquee(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(null); // Define scroll interval state
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleManualScroll = (direction) => {
    const speed = 10; // Adjust scroll speed as needed
    const scrollAmount = direction === "left" ? -speed : speed;
    marqueeRef.current.scrollLeft += scrollAmount;
  };

  const handleMouseDown = (direction) => {
    setIsScrolling(true);
    // Start continuous scrolling
    const interval = setInterval(() => {
      handleManualScroll(direction);
    }, 50); // Adjust the interval for continuous scrolling
    setScrollInterval(interval); // Store interval ID
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
    // Stop continuous scrolling and clear interval
    clearInterval(scrollInterval);
  };

  return (
    <div
      className="marquee-container"
      style={{
        overflowX: isHovered ? "scroll" : "hidden",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaArrowLeft
        // className="marquee-arrow"
        onMouseDown={() => handleMouseDown("left")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
       />
        
      
      <marquee
        className="text-uppercase"
        behavior="scroll"
        direction="left"
        scrollamount="2"
        width="100%"
        height="150px"
        ref={marqueeRef}
      >
        {props.text} 
      </marquee>
      <FaArrowRight
        onMouseDown={() => handleMouseDown("right")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        // className="marquee-arrow"
      />
      
    </div>
  );
}

export default Marquee;
