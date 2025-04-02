import React, { useEffect, useRef, useState } from "react";
import Banner from "../assest/hero4.png";
import Banner02 from "../assest/Banner021.jpg"

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
  return (
    <>

<section className={`relative h-screen bg-gray-900 `}  >
        <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
        <div 
          className="h-full bg-cover bg-center p-20 mt-18" 
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center" >
            <div className="max-w-lg text-white relative z-10">
              <h1 className="text-6xl font-extrabold text-[#2B2B2B] leading-tight tracking-tight mb-6">Trendy & Catchy</h1>
              <p className="text-xl font-medium text-[#5A5A5A] leading-relaxed tracking-wide mb-2">Soft, Stylish, and Made to Stand Out.</p>
              <p className="text-xl font-semibold text-[#D97777] italic tracking-wide mb-6">high-quality fabric, and next-level comfort..</p>

              <button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Hero;
