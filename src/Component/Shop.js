import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import Pagination from "./Pagination";
// import SortDropDown from "./SortDropDown";

const Shop = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [product,setProduct] = useState([])
  const [selectedSort,setSelectedSort] = useState("Select")
 
  const [currentPage,setCurrentPage] = useState(0)
  const colors = [
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#000000"
  ];

  const totalProduct = product ? product.length : 0;
  
  const visibleProduct = 10;
  const totalPages = Math.ceil(totalProduct / visibleProduct) || 1;
  const start = currentPage * visibleProduct;
  const end = start + visibleProduct

  // useEffect(() => {
  //   if (fetchedProducts.length > 0) {
  //     let sorted = [...fetchedProducts];
  //     if (selectedSort === "Low to High") {
  //       sorted.sort((a, b) => a.price - b.price);
  //     } else if (selectedSort === "High to Low") {
  //       sorted.sort((a, b) => b.price - a.price);
  //     } else if (selectedSort === "High Rated") {
  //       sorted.sort((a, b) => b.rating - a.rating);
  //     } else if (selectedSort === "High Discount") {
  //       sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
  //     }
  //     setProduct(sorted);
  //   }
  // }, [selectedSort, fetchedProducts]);



  const [hoveredSize, setHoveredSize] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const nextClick = ()=>{
    
      setCurrentPage(prev => prev +1);
    
    
  }


  const PrevClick = ()=>{
   
      setCurrentPage(prev => prev -1);
   
    
  }

  const [filters, setFilters] = useState([
    { id: 1, name: "Category: Electronics" },
    { id: 2, name: "Brand: Apple" },
    { id: 3, name: "Price: $500 - $1000" },
  ]);

  // Remove a filter
  const removeFilter = (id) => {
    setFilters(filters.filter((filter) => filter.id !== id));
  };

  useEffect(() => {
    const getProduct = async () =>{
      const response = await fetch('https://dummyjson.com/products?limit=50');
      const data = await response.json();
      console.log(data);
      
      setProduct(data?.products)
    }
    getProduct();
  },[])

  return (
    <>
      {/* <div className="flex">
        <div className={`${showFilter ? "w-[20%]" : "hidden"} h-screen  p-3`}> */}
          <div className=" flex justify-between">
            <h1>Filter Result </h1>
            <span className=" flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 text-xl text-red-500 cursor-pointer">
              <i
                class="fa-solid fa-xmark"
                onClick={() => {
                  setShowFilter(false);
                }}
              ></i>
            </span>
          </div>
          <div className=" p-3 mb-2">
            <h4 className=" text-black"> PRICE</h4>

            <div className=" w-full mt-4 relative">
              <div className=" w-full h-1 bg-red-600 "></div>
              <span className=" absolute w-4 h-4 rounded-full bg-red-600 top-[-6]"></span>
              <span className=" absolute w-4 h-4 rounded-full bg-red-600 top-[-6] right-0"></span>
            </div>
            <p className=" mt-3 text-gray-600 font-medium">
              Price:&nbsp;{" "}
              <span className=" text-black">
                ₹{minPrice} — ₹{maxPrice}
              </span>
            </p>
          </div>

          <hr />

          {/* <div className=" p-3">
            <h4 className=" text-black">SIZE</h4>
            <div className="flex justify-between">
              
              <div className="flex flex-col gap-2 p-2">
                {Product[0].size.map((item, index) => (
                  <span
                    key={item}
                    className={`flex items-center justify-center cursor-pointer rounded-full p-2 text-[12px] font-semibold w-7 h-7 transition-all duration-300 border-transparent ${
                      hoveredSize === item
                        ? "bg-red-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onMouseEnter={() => setHoveredSize(item)}
                    onMouseLeave={() => setHoveredSize(null)}
                  >
                    {item}
                  </span>
                ))}
              </div>

            
              <div className="flex flex-col p-2 gap-2">
                {Product[0].availableSize.map((item, index) => (
                  <span
                    key={item}
                    className={`flex items-center justify-center cursor-pointer rounded-full p-2 text-[12px] font-semibold w-7 h-7 transition-all duration-300 border-transparent ${
                      hoveredSize &&
                      index === Product[0].size.indexOf(hoveredSize)
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div> */}
          <hr />
          <div className=" p-3">
            <h4 className=" text-black  mt-2 mb-2">RATING</h4>

            <div className=" flex flex-col gap-0">
              <span className=" flex gap-3 ml-2">
                {" "}
                <input type="radio" name="five" id="five" className=" w-4" />{" "} &nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>{" "}
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
              </span>
          
              <span className="flex gap-3 ml-2">
                {" "}
                <input type="radio" name="four" id="four" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>{" "}
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
              </span>
          

              <span className="flex gap-3 ml-2"> 
                {" "} 
                <input type="radio" name="three" id="three" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>

              </span>
             

              <span className="flex gap-3 ml-2">
                {" "}
                <input type="radio" name="two" id="two" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
             

              <span className="flex gap-3 ml-2">
                {" "}
                <input type="radio" name="one" id="one" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
          </div>
          <hr />
          <div className="p-3">
          <h4 className=" text-black  mt-2 mb-2">Color</h4>
          <div className="flex gap-2 flex-wrap">
        {colors.map((color) => (
          <div
            key={color}
            className="w-4 aspect-square rounded-[3px] border"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
          </div>
   

        {/* </div> */}
        <div
          className={`${
            showFilter ? "w-[80%]" : "w-[100%]"
          } h-screen  bg-green-200 overflow-y-auto`}
        >
          <div className="flex items-center space-x-2 text-gray-600 text-sm bg-gray-100 p-3  fixed top-0 w-full z-50">
            <div className=" w-[80%]">
              <span className="font-semibold text-gray-700">Filters:</span>

              {filters.length > 0 ? (
                filters.map((filter) => (
                  <div
                    key={filter.id}
                    className="inline ml-2 items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                  >
                    <span>{filter.name}</span>
                    <button
                      onClick={() => removeFilter(filter.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))
              ) : (
                <span className="text-gray-400">No filters applied</span>
              )}

           
              {filters.length > 0 && (
                <button
                  onClick={() => setFilters([])}
                  className="ml-4 text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            <div>
              <i
                class="fa-solid fa-filter"
                onClick={() => {
                  setShowFilter(true);
                }}
              ></i>
            </div>

          </div>
          <div className=" flex  flex-wrap gap-2 p-10 mt-2">
            <ProductCard data={product} start = {start} end = {end} />
          </div>

          
        </div>
    {/* </div> */}
      <h1>jjkj</h1>
    </>
  );
};

export default Shop;
