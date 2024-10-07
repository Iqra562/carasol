import React from 'react'; // Import React
import logo from './logo.svg';
import './App.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel"; // C
// Responsive configuration
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Card() {
  return (
    <Carousel responsive={responsive}>
     <div className=" px-4 mt-4">
      {/* Card */}
      <div  className="tw-rounded tw-overflow-hidden tw-shadow  sm:tw-w-2/12 ">
        {/* Image */}
        <img
          src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
          width="100%"
          alt=""
        />

        {/* Card Content */} 
        <div className="tw-px-3 py-3">
          <div >
            <div className="tw-flex items-center ">
            <p  className="tw-leading-none tw-text-sm"> 4.95
              <span className="text-blue-300 tw-ml-[2px] tw-text-gray-400 tw-text-xs " >(345)</span>
            </p>
            </div>
            <p  className=" tw-text-xs tw-mb-0">Entire Left.Down</p>

            <p  className="tw-text-xs tw-mb-0">HIP Artists...</p>

            <p className="tw-text-sm tw-mb-0">
              <span  className="tw-font-bold">$127</span> / night
            </p>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
  );
}

export default Card;
