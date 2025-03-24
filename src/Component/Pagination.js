import React from 'react'

const Pagination = ({currentPage , PrevClick ,nextClick , product ,nextClick}) => {
  return (
    <div className="flex justify-center items-center gap-6 p-6">
    {/* Previous Button */}
    <button
      disabled={currentPage === 0}
      onClick={PrevClick}
      className="flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Previous
    </button>
  
    {/* Page Numbers */}
    <div className="flex gap-2">
      {product.slice(0, totalPages).map((item,index) => (
        <button
          key={item?.id}
          className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
            index + 1 === currentPage + 1
              ? 'bg-red-500 text-white border-red-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
          onClick={()=>{
            setCurrentPage(index)
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  
    {/* Next Button */}
    <button
      disabled={currentPage === totalPages - 1}
      onClick={nextClick}
      className="flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
    >
      Next
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  )
}

export default Pagination