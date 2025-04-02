import React, { useState } from 'react'
import freeship from "../assest/f1.png"
import OnlineOrder from "../assest/f2.png"
import SaveMoney from "../assest/f3.png";
import support from "../assest/f6.png"

const OurFeature = () => {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const feature = [
        {
            icon: freeship,
            title: "Free Shipping",
           
          },
          {
            icon: OnlineOrder,
            title: "Online Order",
            
          },
          {
            icon: SaveMoney,
            title: "Save Money",
            
          },
          {
            icon: support,
            title: "24*7 Support",
            
          }
    ]

  return (
    <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center"> Why Choose US</h2>
        <p className=' text-gray-600 max-w-2xl mx-auto text-lg text-center mb-12'>Your Style, Our Commitment</p>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-8'>
        {feature.map((feature,index)=>{
            return <div
              key={index}
              className="relative w-64 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 group overflow-hidden"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
       
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative z-10 transition-all duration-500 transform group-hover:translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 mb-3 bg-green-50 rounded-full transition-all duration-500 group-hover:bg-green-100 group-hover:shadow-md">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                    {feature.title}
                  </h3>
                  
                 
                </div>
                
             
                <div className="mt-3 h-0.5 w-0 bg-green-500 mx-auto transition-all duration-500 group-hover:w-1/2"></div>
              </div>
            </div>
        })}
        </div>
        
        </div>
    </section>
  )
}

export default OurFeature