import React, { useRef, useState } from "react";
import Banner from "../assest/Banner01.jpg";
import Banner02 from "../assest/Banner021.jpg"

const Hero = () => {
    const imgSrc = [
        {Banner:Banner},
        {Banner:Banner02}
    ]
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);
    const scrollLeft = () => {
        if (scrollPosition > 0) {
          setScrollPosition(scrollPosition - 1);
        }
      };
      
      const scrollRight = () => {
        if (scrollPosition < imgSrc.length - 1) {
          setScrollPosition(scrollPosition + 1);
        }
      };
    
  return (
    <>

    <div className="  py-8 px-4  relative">
    <button
          className={` absolute md:left-[60px] left-10 top-[46%] tw-transform translate-y-1/2 z-10 bg-black bg-opacity-80 p-3 rounded-full text-white hover:bg-opacity-100 transition-all ${
            scrollPosition <= 0 ? " cursor-not-allowed" : "opacity-100"
          }`}
          onClick={scrollLeft}
          disabled={scrollPosition === 0}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      <div className=" h-screen w-full flex justify-center p-2 " ref={carouselRef}  style={{ scrollBehavior: "smooth" }}>
        <div className=" w-[85%] h-[85%] mt-24 ">
        
        <img className=" rounded-md shadow-lg" src={imgSrc[scrollPosition]?.Banner} alt="" />
      </div>
    
      </div>
      <button
          className={` absolute md:right-[60px] right-10 top-[53%] transform -translate-y-1/2 z-10 bg-black bg-opacity-80 p-3 rounded-full text-white hover:bg-opacity-100 transition-all ${
            scrollPosition >= imgSrc.length - 1
              ? "cursor-not-allowed"
              : "opacity-100"
          }`}
          onClick={scrollRight}
          disabled={scrollPosition >= imgSrc.length - 1}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      <h1>dcksjckjdh</h1>
    </div>
     
    </>
  );
};

export default Hero;
