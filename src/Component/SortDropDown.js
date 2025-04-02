import React from 'react'

const SortDropDown = ({setSelectedSort , selectedSort}) => {
  return (
    <div className="relative">
    <select
      name="sort"
      id="sort"
      className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer hover:border-gray-400 transition-all duration-200"
      value={selectedSort}
      onChange={(e) => setSelectedSort(e.target.value)}
    >
      <option value="Select" disabled className="text-gray-400">
        Sort By
      </option>
      <option value="Low to High" className="text-gray-700">
        Price: Low to High
      </option>
      <option value="High to Low" className="text-gray-700">
        Price: High to Low
      </option>
      <option value="High Rated" className="text-gray-700">
        Top Rated
      </option>
      <option value="High Discount" className="text-gray-700">
        Best Discount
      </option>
    </select>
    {/* Custom Arrow */}
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
  )
}

export default SortDropDown