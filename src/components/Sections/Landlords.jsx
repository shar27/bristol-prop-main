import React from "react";
import { useEffect, useState } from 'react';

function Landlords() {
    const images = [
        '/livingroom.jpg',
        '/poolroom.jpg',
        '/bedroom.jpg',
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // This function will advance the image every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000ms = 3 seconds
    
        return () => clearInterval(interval); // Clear interval on unmount
      }, []);
  return (
    <div>
     
      <div className="min-h-screen">
        <h1 className="text-white text-center text-5xl bg-black">Landlords</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10">
          <div className="content-section">
            <h2 className="text-3xl font-bold text-center mb-4">
              From one Landlord to Another
            </h2>

            <p className="text-lg mb-6">
              I’m a landlord myself, so I know how frustrating it can be at
              times having to deal with the different aspects that come with it.
              That’s why I am offering a guaranteed rent service, paired with
              any minor refurbishment work needed to improve the quality of your
              property. This hassle-free package also includes seamless
              maintenance, making property ownership more straightforward and
              financially secure.
            </p>

            <h3 className="text-2xl font-semibold mb-2 ">
              Benefits at a Glance :
            </h3>

            <ul className="list-disc pl-6">
              <li className="list-none"> ✔ Guaranteed rent with contracts up to 5 years</li>
              <li className="list-none"> ✔ No missed payments</li>
              <li className="list-none"> ✔ No agency fees</li>
              <li className="list-none"> ✔ Regular maintenance and clean</li>
              <li className="list-none"> ✔ Hassle-free experience</li>
            </ul>
          </div>

          
      <div className="flex justify-center w-full h-auto p-10">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
   
        </div>
      </div>

     
    </div>
  );
}
<style jsx>{`
  .slideshow-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; /* Adjust as needed */
  }
`}</style>

export default Landlords;