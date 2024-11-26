import React from 'react';
import ImgBanner from './ImgBanner';

const EyeWearBanners = ({ sty, imgVal, heading }) => {
  return (
    <div className={sty}>
      <div className="relative text-center  uppercase flex items-center md:text-4xl">
        {/* Left Line */}
        <div className="flex-grow h-0.5 bg-gray-300 ml-4 "></div>
        
        {/* Heading */}
        <h1 className="px-4">{heading}</h1>
        
        {/* Right Line */}
        <div className="flex-grow h-0.5 bg-gray-300 mr-4"></div>
      </div>

      <ImgBanner sty={sty} imgVal={imgVal} />
    </div>
  );
};

export default EyeWearBanners;
