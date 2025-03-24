import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gray backdrop-blur-md py-6 shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-indigo-600 font-bold text-xl tracking-tight">SHOP<span className="text-gray-800">HUB</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                onClick={() => toggleDropdown('women')}
              >
                Women <i className="fas fa-chevron-down ml-1"></i>
              </button>
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                onClick={() => toggleDropdown('men')}
              >
                Men <i className="fas fa-chevron-down ml-1"></i>
              </button>
            </div>
            
            <a href="/collections" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Collections</a>
            <a href="/sale" className="text-rose-600 hover:text-rose-700 transition-colors font-medium">Sale</a>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 flex-1 mx-6 max-w-md">
            <i className="fas fa-search text-gray-400"></i>
            <input 
              className="bg-transparent border-none outline-none px-3 py-1 w-full text-sm text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Search for products..."
            />
          </div>
          
          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/wishlist" className="text-gray-700 hover:text-indigo-600 transition-colors relative">
              <i className="fas fa-heart"></i>
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </a>
            <a href="/account" className="text-gray-700 hover:text-indigo-600 transition-colors">
              <i className="fas fa-user"></i>
            </a>
            <a href="/cart" className="text-gray-700 hover:text-indigo-600 transition-colors relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="/cart" className="text-gray-700 hover:text-indigo-600 transition-colors relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>
      </div>

      <div 
  className={`md:hidden transition-all duration-300 ease-in-out transform ${
    isOpen 
      ? 'max-h-screen opacity-100' 
      : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
    <div className="flex border-b border-gray-200 py-3">
      <i className="fas fa-search h-5 w-5 text-gray-400"></i>
      <input 
        className="bg-transparent border-none outline-none px-3 py-1 w-full text-sm"
        type="text"
        placeholder="Search for products..."
      />
    </div>
    
    <div className="py-2">
      <button 
        className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
        onClick={() => toggleDropdown('mobile-women')}
      >
        <div className="flex justify-between items-center">
          <span>Women</span>
          <i className={`fas fa-chevron-down h-4 w-4 transition-transform ${activeDropdown === 'mobile-women' ? 'rotate-180' : ''}`}></i>
        </div>
      </button>
      <div className={`pl-4 space-y-1 transition-all duration-200 ${activeDropdown === 'mobile-women' ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
        <a href="/women/clothing" className="block px-3 py-2 text-base text-gray-600 hover:text-indigo-600">Clothing</a>
        <a href="/women/shoes" className="block px-3 py-2 text-base text-gray-600 hover:text-indigo-600">Shoes</a>
        <a href="/women/accessories" className="block px-3 py-2 text-base text-gray-600 hover:text-indigo-600">Accessories</a>
      </div>
    </div>
    
    <div className="py-2">
      <button 
        className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
        onClick={() => toggleDropdown('mobile-men')}
      >
        <div className="flex justify-between items-center">
          <span>Men</span>
          <i className={`fas fa-chevron-down h-4 w-4 transition-transform ${activeDropdown === 'mobile-men' ? 'rotate-180' : ''}`}></i>
        </div>
      </button>
      <div className={`pl-4 space-y-1 transition-all duration-200 ${activeDropdown === 'mobile-men' ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
        <a href="/men/clothing" className="block px-3 py-2 text-base text-gray-600 hover:text-indigo-600">Clothing</a>
        <a href="/men/shoes" className="block px-3 py-2 text-base text-gray-600 hover:text-indigo-600">Shoes</a>
        <a href="/men/accessories" className="block px-3 py-2 text-base text-gray-600 hover:text-indigo-600">Accessories</a>
      </div>
    </div>
    
    <a href="/collections" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">Collections</a>
    <a href="/sale" className="block px-3 py-2 text-base font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700 rounded-md">Sale</a>
    
    <div className="border-t border-gray-200 pt-4 pb-2">
      <a href="/account" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
        <i className="fas fa-user h-5 w-5 mr-3"></i>
        My Account
      </a>
      <a href="/wishlist" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md">
        <i className="fas fa-heart h-5 w-5 mr-3"></i>
        Wishlist
        <span className="ml-auto bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
      </a>
    </div>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
