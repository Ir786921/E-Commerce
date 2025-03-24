import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import SortDropDown from "./SortDropDown";

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

  const totalProduct = product && product.length;
  
  const visibleProduct = 10;
  const totalPages = Math.ceil(totalProduct / visibleProduct);
  const start = currentPage * visibleProduct;
  const end = start + visibleProduct

  useEffect(() => {
    if (selectedSort === "Low to High") {
      const sorted = [...product].sort((a, b) => a.price - b.price);
      setProduct(sorted);
    } else if (selectedSort === "High to Low") {
      const sorted = [...product].sort((a, b) => b.price - a.price);
      setProduct(sorted);
    }
    else if (selectedSort === "High Rated") {
      const sorted = [...product].sort((a, b) => b.rating - a.rating);
      setProduct(sorted);
    }
    else if (selectedSort === "High Discount") {
      const sorted = [...product].sort((a, b) => b.discountPercentage - a.discountPercentage);
      setProduct(sorted);
    }
    
    

  }, [selectedSort]);


  const Product = [
    {
      name: "Nike Air Max 270",
      price: 149.99,
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSize: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White", "Red"],
      productType: "Shoes",
      category: ["Men", "Women"],
      brand: "Nike",
      stock: 25,
      rating: 4.5,
      description: "Lightweight and stylish sneakers with Air Max cushioning.",
      material: "Mesh, Rubber",
      discount: 10,
      availability: "In Stock",
      sku: "NK-AM-270-BLK",
      imageUrl: "https://via.placeholder.com/500x500?text=Nike+Air+Max+270",
    },
    {
      name: "Adidas Ultraboost 22",
      price: 180.0,
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSize: ["6", "7", "8", "9", "10"],
      color: ["Blue", "White", "Black"],
      productType: "Shoes",
      category: ["Men", "Women"],
      brand: "Adidas",
      stock: 40,
      rating: 4.8,
      description: "Premium running shoes with Boost cushioning for comfort.",
      material: "Primeknit, Rubber",
      discount: 15,
      availability: "In Stock",
      sku: "AD-UB-22-WHT",
      imageUrl: "https://via.placeholder.com/500x500?text=Adidas+Ultraboost+22",
    },
    {
      name: "Levi's 501 Original Fit Jeans",
      price: 89.99,
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      availableSize: ["30", "32", "34", "36", "38"],
      color: ["Blue", "Black"],
      productType: "Clothing",
      category: ["Men"],
      brand: "Levi's",
      stock: 50,
      rating: 4.6,
      description: "Classic straight-leg jeans with a comfortable fit.",
      material: "Denim",
      discount: 5,
      availability: "In Stock",
      sku: "LV-501-ORG",
      imageUrl: "https://via.placeholder.com/500x500?text=Levi's+501+Jeans",
    },
    {
      name: "Apple iPhone 15 Pro Max",
      price: 1199.99,
      size: ["256GB", "512GB", "1TB"],
      availableSize: [],
      color: ["Black", "Silver", "Gold", "Blue"],
      productType: "Electronics",
      category: ["Unisex"],
      brand: "Apple",
      stock: 15,
      rating: 4.9,
      description:
        "Flagship Apple smartphone with A17 Bionic chip and ProMotion display.",
      material: "Titanium, Glass",
      discount: 0,
      availability: "Limited Stock",
      sku: "APL-IP15PM-512GB",
      imageUrl: "https://via.placeholder.com/500x500?text=iPhone+15+Pro+Max",
    },
    {
      name: "Samsung Galaxy Watch 6",
      price: 299.99,
      size: ["40mm", "44mm"],
      availableSize: [],
      color: ["Black", "Silver", "Gold"],
      productType: "Wearable",
      category: ["Men", "Women"],
      brand: "Samsung",
      stock: 35,
      rating: 4.7,
      description:
        "Advanced smartwatch with health tracking and AMOLED display.",
      material: "Aluminum, Gorilla Glass",
      discount: 10,
      availability: "In Stock",
      sku: "SM-GW-6-44MM",
      imageUrl:
        "https://via.placeholder.com/500x500?text=Samsung+Galaxy+Watch+6",
    },
    {
      name: "Sony WH-1000XM5",
      price: 399.99,
      size: ["One Size"],
      availableSize: [],
      color: ["Black", "Silver"],
      productType: "Headphones",
      category: ["Unisex"],
      brand: "Sony",
      stock: 20,
      rating: 4.8,
      description: "Industry-leading noise-canceling wireless headphones.",
      material: "Plastic, Memory Foam",
      discount: 5,
      availability: "In Stock",
      sku: "SONY-WH-1000XM5",
      imageUrl: "https://via.placeholder.com/500x500?text=Sony+WH-1000XM5",
    },
    {
      name: "Michael Kors Leather Handbag",
      price: 250.0,
      size: ["Small", "Medium", "Large"],
      availableSize: [],
      color: ["Brown", "Black", "Beige"],
      productType: "Accessories",
      category: ["Women"],
      brand: "Michael Kors",
      stock: 30,
      rating: 4.5,
      description: "Luxury handbag made from high-quality leather.",
      material: "Genuine Leather",
      discount: 20,
      availability: "In Stock",
      sku: "MK-HB-MD-BRN",
      imageUrl: "https://via.placeholder.com/500x500?text=Michael+Kors+Handbag",
    },
    {
      name: "Fossil Gen 6 Smartwatch",
      price: 299.99,
      size: ["42mm"],
      availableSize: [],
      color: ["Black", "Silver", "Rose Gold"],
      productType: "Wearable",
      category: ["Men", "Women"],
      brand: "Fossil",
      stock: 28,
      rating: 4.6,
      description:
        "Stylish smartwatch with Google Wear OS and fitness tracking.",
      material: "Stainless Steel",
      discount: 15,
      availability: "In Stock",
      sku: "FSL-G6-SW-42MM",
      imageUrl:
        "https://via.placeholder.com/500x500?text=Fossil+Gen+6+Smartwatch",
    },
    {
      name: "Nike Dri-FIT Running T-Shirt",
      price: 34.99,
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      availableSize: [],
      color: ["White", "Blue", "Red"],
      productType: "Clothing",
      category: ["Men"],
      brand: "Nike",
      stock: 75,
      rating: 4.4,
      description:
        "Moisture-wicking running t-shirt for comfort and performance.",
      material: "Polyester",
      discount: 10,
      availability: "In Stock",
      sku: "NK-DRI-FIT-M",
      imageUrl: "https://via.placeholder.com/500x500?text=Nike+Dri-FIT+T-Shirt",
    },
    {
      name: "Dyson V15 Detect Cordless Vacuum",
      price: 699.99,
      size: ["One Size"],
      availableSize: [],
      color: ["Yellow", "Silver"],
      productType: "Home Appliance",
      category: ["Unisex"],
      brand: "Dyson",
      stock: 10,
      rating: 4.9,
      description:
        "High-performance cordless vacuum with laser dust detection.",
      material: "Plastic, Aluminum",
      discount: 5,
      availability: "Limited Stock",
      sku: "DYS-V15-DC",
      imageUrl: "https://via.placeholder.com/500x500?text=Dyson+V15+Detect",
    },
  ];
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
      
      setProduct(data.products)
    }
    getProduct();
  },[])

  return (
    <>
      <div className="flex">
        <div className={`${showFilter ? "w-[20%]" : "hidden"} h-screen  p-3`}>
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

          <div className=" p-3">
            <h4 className=" text-black">SIZE</h4>
            <div className="flex justify-between">
              {/* Size Options */}
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

              {/* Available Sizes */}
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
          </div>
          <hr />
          <div className=" p-3">
            <h4 className=" text-black  mt-2 mb-2">RATING</h4>

            <div className=" flex flex-col gap-0">
              <span className=" flex gap-3 ml-2">
                {" "}
                <input type="radio" name=" " id="" className=" w-4" />{" "} &nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>{" "}
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
              </span>
          
              <span className="flex gap-3 ml-2">
                {" "}
                <input type="radio" name=" " id="" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>{" "}
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
              </span>
          

              <span className="flex gap-3 ml-2"> 
                {" "} 
                <input type="radio" name=" " id="" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>

              </span>
             

              <span className="flex gap-3 ml-2">
                {" "}
                <input type="radio" name=" " id="" className=" w-4" />{" "}&nbsp;
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-solid fa-star text-[#FFC634]"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
             

              <span className="flex gap-3 ml-2">
                {" "}
                <input type="radio" name=" " id="" className=" w-4" />{" "}&nbsp;
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
   

        </div>
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

              {/* Clear All Filters Button */}
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

            < SortDropDown  selectedSort = {selectedSort} setSelectedSort = {setSelectedSort}/>

     
          </div>
          <div className=" flex  flex-wrap gap-2 p-10 mt-2">
            <ProductCard data={product} start = {start} end = {end} />
          </div>

          <Pagination  currentPage = { currentPage} totalPages = {totalPages} product = {product} PrevClick = {PrevClick} nextClick = {nextClick}   />
  
        </div>
      </div>
    </>
  );
};

export default Shop;
