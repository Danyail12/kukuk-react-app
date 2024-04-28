import React from "react";
import ReactStars from 'react-stars'
import CourasalImage from '../../../assets/images/coural-profile.jpg'
const Slide = (props)=>{
              return (
                <div className="bg-white h-100">
              <div className="p-4 text-start">
                <div className="d-flex">
                <ReactStars
  count={5}
  onChange={(ratingChanged)=>console.log(ratingChanged)}
  size={26}
  color2={'#90FF79'}
  value={5} />
                </div>
                <h6 className="text-muted" style={{fontSize:'0.6rem',marginTop:'2%'}}>{props.date}</h6>
                <h5 className="text-black text-start" style={{textTransform:'capitalize'}}>{props.description}</h5>
                <img src={CourasalImage} alt="craousel_img" style={{width:'68px',height:'68px',borderRadius:'100%',marginTop:'7%'}}/>
                <p style={{color:'black',fontWeight:'600',fontSize:'1.1rem',marginTop:'5%'}}>Karl Albert Denk</p>
                <p style={{color:'black',lineHeight:'0px',fontWeight:'300',fontSize:'0.7rem'}}>Über das Setup Cockpit</p>
              </div>
            </div>
        );
}
export default Slide
// class Slide extends Component {
//     constructor(props) {
//       super(props);
//       slide = React.createRef();
//     }
  
//     handleMouseMove = event => {
//       const el = slide.current;
//       const r = el.getBoundingClientRect();
//       el.style.setProperty(
//         "--x",
//         event.clientX - (r.left + Math.floor(r.width / 2))
//       );
//       el.style.setProperty(
//         "--y",
//         event.clientY - (r.top + Math.floor(r.height / 2))
//       );
//     };
  
//     handleMouseLeave = event => {
//       slide.current.style.setProperty("--x", 0);
//       slide.current.style.setProperty("--y", 0);
//     };
  
//     handleSlideClick = event => {
//       props.handleSlideClick(props.slide.index);
//     };
  
//     imageLoaded = event => {
//       event.target.style.opacity = 1;
//     };
  
//     render() {
//       const { src, button, headline, index } = props.slide;
//       const current = props.current;
//       let classNames = "slide";
  
//       if (current === index) classNames += " slide--current";
//       else if (current - 1 === index) classNames += " slide--previous";
//       else if (current + 1 === index) classNames += " slide--next";
  
//       return (
//         <li
//           ref={slide}
//           className={classNames}
//           onClick={handleSlideClick}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="slide__image-wrapper">
//             <img
//               className="slide__image"
//               alt={headline}
//               src={src}
//               onLoad={imageLoaded}
//             />
//           </div>
  
//           <article className="slide__content">
//             <h2 className="slide__headline">{headline}</h2>
//             <button className="slide__action btn">{button}</button>
//           </article>
//         </li>
//       );
//     }
//   }