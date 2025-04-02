import React from 'react'
import ProductCard from './ProductCard'
import plain1 from '../assest/plain21.png';
import plain2 from '../assest/plain.webp';
import plain3 from '../assest/plain3.webp';
import plain4 from '../assest/plain4.webp';
import poly1 from "../assest/POLY1.jpg";
import black_poly from "../assest/black_poly.jpeg";
import brown_poly from "../assest/brown_poly.jpg";
import white_poly from "../assest/white_poly.jpg";
import printed1 from "../assest/printed-t-shirts1.webp";
import printed2 from "../assest/printed-t-shirts-2.webp";
import printed3 from "../assest/printed-4.jpeg";
import printed4 from "../assest/printed-3.jpeg";


const Featured = () => {
    const plain = [{
        Image:plain1,
        name:"dsbnds",
        price:4500,
        discount:10
    },
    {
        Image:plain2,
        name:"dsbnds",
        price:4500,
        discount:10
    },
    {
        Image:plain3,
        name:"dsbnds",
        price:4500,
        discount:10
    },
    {
        Image:plain4,
        name:"dsbnds",
        price:4500,
        discount:10
    }]

    const poly = [
      {
        
        Image:poly1,
        name:"dsbnds",
        price:4500,
        discount:10
      },
      {
        
        Image:black_poly,
        name:"dsbnds",
        price:4500,
        discount:10
      },
      {
        Image:brown_poly,
        name:"dsbnds",
        price:4500,
        discount:10
      },
      {
        Image:white_poly,
        name:"dsbnds",
        price:4500,
        discount:10

      }
    ]

    const Printed = [
      {
        
        Image:printed1,
        name:"dsbnds",
        price:4500,
        discount:10
      },
      {
        
        Image:printed2,
        name:"dsbnds",
        price:4500,
        discount:10
      },
      {
        Image:printed3,
        name:"dsbnds",
        price:4500,
        discount:10
      },
      {
        Image:printed4,
        name:"dsbnds",
        price:4500,
        discount:10

      }
    ]
  return (
    <section className="py-8 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-5 text-center">Featured Collections</h2>
      <div className=' p-4'>
     <div className=' flex justify-between p-6'>
     <h1 className=' mb-4 text-2xl text-black-400 font-bold'>Plain  Cotton T-shirts</h1>
     <span className=' text-blue-700'>See More &nbsp; <i class="fa-solid fa-angles-right"></i> </span>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
       <ProductCard  plain = {plain}/>

      </div>
      </div>

      <div className=' p-4'>
     <div className=' flex justify-between p-6'>
     <h1 className=' mb-4 text-2xl text-black-400 font-bold'>Plain  Polyester T-shirts</h1>
     <span className=' text-blue-700'>See More &nbsp; <i class="fa-solid fa-angles-right"></i> </span>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
       <ProductCard  plain = {poly}/>

      </div>
      </div>

      <div className=' p-4'>
     <div className=' flex justify-between p-6'>
     <h1 className=' mb-4 text-2xl text-black-400 font-bold'>Printed  T-shirts</h1>
     <span className=' text-blue-700'>See More &nbsp; <i class="fa-solid fa-angles-right"></i> </span>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
       <ProductCard  plain = {Printed}/>

      </div>
      </div>

      <div className="flex flex-row  gap-3 items-center justify-center mt-4 py-8">
  <h1 className="text-xl font-semibold text-gray-800 items-center mt-4 ml-8">Explore More Products</h1>
  <button className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-900 transition duration-300 cursor-pointer">
    Browse 
  </button>
</div>
    </div>
  </section>
  )
}

export default Featured