import React from 'react'; // Import React
import logo from './logo.svg';
import './App.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel"; // C
import Card from './Card';
// Responsive configuration
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,  // Show only 1 item at a time
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,  // Show only 1 item at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,  // Show only 1 item at a time
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,  // Show only 1 item at a time
  },
};

function App() {
  return (
    <Carousel responsive={responsive}>
    
    <div className="bg-gray-200 p-4 rounded-lg shadow-md"><Card/></div>
    <div className="bg-gray-200 p-4 rounded-lg shadow-md"><Card/></div>
    <div className="bg-gray-200 p-4 rounded-lg shadow-md"><Card/></div>
    <div className="bg-gray-200 p-4 rounded-lg shadow-md"><Card/></div>
    <div className="bg-gray-200 p-4 rounded-lg shadow-md"><Card/></div>
    <div className="bg-gray-200 p-4 rounded-lg shadow-md"><Card/></div>
  </Carousel>
  );
}

export default App;
