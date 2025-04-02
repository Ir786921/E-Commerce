
import React, { useState } from 'react';

const ProductCard = ({plain}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  
  return (
    <> {
      plain.map((item)=>{
        return  (
        //   <div 
        //   className={`max-w-xs rounded-3xl bg-white p-4 transition-all duration-300 ease-in-out ${
        //     isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'
        //   }`}
        //   onMouseEnter={() => setIsHovered(true)}
        //   onMouseLeave={() => setIsHovered(false)}
        // >
        //   <div className="relative bg-gray-100 rounded-2xl p-3 mb-3 overflow-hidden">
        //     <img 
        //       src={item?.Image} 
        //       alt="Colorful floral shirt" 
        //       className={`w-full h-auto object-cover transition-transform duration-500 ${
        //         isHovered ? 'scale-110' : 'scale-100'
        //       }`}
        //     />
        //     <div className="absolute top-3 left-3">
        //       <div className={`flex items-center transition-all duration-300 ${
        //         isHovered ? 'opacity-100 translate-x-0' : 'opacity-80'
        //       }`}>
        //         <span className="text-gray-500 text-sm">adidas</span>
        //       </div>
        //     </div>
            
        //     {isHovered && (
        //       <div className="absolute top-3 right-3 animate-fadeIn">
        //         <button className="bg-white hover:bg-gray-100 rounded-full p-2 shadow-md transition-all duration-200 hover:shadow-lg">
        //           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
        //             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        //           </svg>
        //         </button>
        //       </div>
        //     )}
        //   </div>
          
        //   <div className="px-1">
        //     <h3 className={`text-teal-700 font-medium text-lg transition-all duration-300 ${
        //       isHovered ? 'text-teal-600' : ''
        //     }`}>{item?.name}</h3>
            
        //     <div className="flex items-center mt-1">
        //       <div className="flex items-baseline">
        //         <span className={`text-gray-800 text-2xl font-bold transition-all duration-300 ${
        //           isHovered ? 'text-teal-700' : ''
        //         }`}>₹{item?.price}</span>
        //         <span className="text-gray-500 ml-2">({item?.discount}% off)</span>
        //       </div>
        //     </div>
            
        //     <div className="absolute bottom-4 right-4">
        //       <button 
        //         className={`rounded-full p-3 transition-all duration-300 ease-in-out ${
        //           isCartHovered 
        //             ? 'bg-teal-600 text-white shadow-md scale-110' 
        //             : 'bg-gray-200 text-teal-700 hover:bg-gray-300'
        //         }`}
        //         onMouseEnter={() => setIsCartHovered(true)}
        //         onMouseLeave={() => setIsCartHovered(false)}
        //       >
        //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        //           <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        //           <line x1="3" y1="6" x2="21" y2="6"></line>
        //           <path d="M16 10a4 4 0 0 1-8 0"></path>
        //         </svg>
        //       </button>
        //     </div>
        //   </div>
          
        //   <style jsx>{`
        //     @keyframes fadeIn {
        //       from { opacity: 0; transform: translateY(-10px); }
        //       to { opacity: 1; transform: translateY(0); }
        //     }
        //     .animate-fadeIn {
        //       animation: fadeIn 0.3s ease-out forwards;
        //     }
        //   `}</style>
        // </div>
        <div className={`w-64 rounded-3xl bg-white p-4 transition-all shadow-sm duration-300 ease-in-out hover:shadow-lg transform-translate-y-1`}>
          <div className="relative bg-gray-100 rounded-2xl p-3 mb-3 overflow-hidden">
          <img 
            src={item?.Image} 
            alt="Colorful floral shirt" 
             className={`w-full h-[245px] object-cover transition-transform duration-500 hover:scale-110  `} />
              <div className="absolute top-3 right-3 animate-fadeIn">
                <button className="bg-white hover:bg-gray-100 rounded-full p-2 shadow-md transition-all duration-200 hover:shadow-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                 </svg>
              </button>
            </div>
          </div>
          <div className="px-1">
            <h3 className={`text-teal-700 font-medium text-lg transition-all duration-300 ${
              isHovered ? 'text-teal-600' : ''
            }`}>{item?.name}</h3>
            
            <div className="flex items-center mt-1 justify-between">
              <div className="flex items-baseline">
                <span className={`text-gray-800 text-2xl font-bold transition-all duration-300 ${
                  isHovered ? 'text-teal-700' : ''
                }`}>₹{item?.price}</span>
                <span className="text-gray-500 ml-2">({item?.discount}% off)</span>
              </div>
              <button 
                className={`rounded-full p-3 transition-all duration-300 ease-in-out bg-teal-600 text-white shadow-md scale-110`}
                
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>
            
          
            
            </div>
         
        </div>
        )

      })
    } </>
   
  );
};

export default ProductCard;