import React from 'react'

const ProductCard = ({data,start,end}) => {
  return (

    <>
    {data?.slice(start,end).map((item,index)=>{
        return (
          <div className="group w-64 cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Product Image */}
          <div className="w-48 h-48 overflow-hidden rounded-lg">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
    
          {/* Product Details */}
          <div className="mt-4">
            {/* Title */}
            <h3 className="font-bold text-md text-gray-800 group-hover:text-red-500 transition-colors">
              {item.title}
            </h3>
    
            {/* Price */}
            <p className="text-gray-600 text-sm mt-1">
              <span className="font-semibold text-lg text-black">${item.price}</span>
              <span className="text-xs text-gray-500 ml-2 line-through">
                ${(item.price + (item.price * item.discountPercentage) / 100).toFixed(2)}
              </span>
              <span className="ml-2 text-green-500 text-xs">
                {item.discountPercentage}% off
              </span>
            </p>
    
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        )
    })}

    </>

  )
}

export default ProductCard