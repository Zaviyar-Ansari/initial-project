import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; // Ensure path is correct
import CartIcon from './icons/menu.png'; // Ensure path is correct
import CheckoutIcon from './icons/franchises.png'; // Ensure path is correct
import AboutUsIcon from './icons/about.png'; // Ensure path is correct
import ContactUsIcon from './icons/contact.png'; // Ensure path is correct
import closeupmenu from './Images/closeupmenu.png';
import food6 from './Images/unsplash6.png';



const Menu = () => {
  return (
    <div>
    <div className="relative">
      <img 
        src={closeupmenu}
        alt="Menu Background" 
        className="w-full h-60 bg-gray-700 opacity-80"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl">MENU</h1>
      </div>
      <div className="absolute top-0 mt-6 mr-4  right-0 w-40 h-72">
      <nav className="bg-gray-800 bg-opacity-50 p-4 h-fit flex flex-col justify-between rounded-md fixed right-0 top-16 z-50">
  <ul className="list-none space-y-6 text-center text-white">
    <li>
      <Link to="/" className="flex flex-col items-center justify-center">
        <img src={HomeIcon} alt="Home" className="w-6 h-6 mb-2" />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link to="/menu" className="flex flex-col items-center justify-center">
        <img src={CartIcon} alt="" className="w-6 h-6 mb-2" />
        <span>Menu</span>
      </Link>
    </li>
    <li>
      <Link to="/Faranchies" className="flex flex-col items-center justify-center">
        <img src={CheckoutIcon} alt="" className="w-6 h-6 mb-2" />
        <span>Franchies</span>
      </Link>
    </li>
    <li>
      <Link to="/about-us" className="flex flex-col items-center justify-center">
        <img src={AboutUsIcon} alt="About" className="w-6 h-6 mb-2" />
        <span>About Us</span>
      </Link>
    </li>
    <li>
      <Link to="/contact-us" className="flex flex-col items-center justify-center">
        <img src={ContactUsIcon} alt="Contact Us" className="w-6 h-6 mb-2" />
        <span>Contact Us</span>
      </Link>
    </li>
  </ul>
  <div className="flex justify-center mt-4">
    <button className="px-6 py-3 bg-teal-500 text-white rounded-lg">
      Book Now
    </button>
  </div>
</nav>
        </div>
    </div>

    <div className='flex flex-row gap-2 text-center inset-0 justify-evenly mt-6 justify-center'>
    <h1 className="inline-block border-b-2 w-max border-green-600">Statter</h1>
    <h1>Statter</h1>
        <h1>Statter</h1>
        <h1>Statter</h1>
    </div>

    <div>
        <h1 className='text-left mt-3 text-xl'>Filter By Price</h1>
        
      <p className='text-left text-sm'> From $0 to $8000  filter</p>
    </div>
<div>
  
<div className="flex items-start justify-between p-6 border-b-2 border-gray-300">
  {/* Left side: Product Image */}
  <div className="w-1/4">
    <img 
      src={food6}
      alt="Product Image" 
      className="w-44 h-44 object-cover ml-10"
    />
  </div>

  {/* Right section: Product Name and Details */}
  <div className="w-3/4 pl-6">
    <h2 className="text-2xl font-bold text-start -ml-20">Product Name</h2>
    <p className="mt-2 text-gray-600 text-start -ml-20">This is a brief description of the product. It highlights the main features and details about the product.</p>

    {/* Product Price */}
    <div className="mt-4 text-right">
      <span className="text-3xl font-semibold text-green-600">$99.99</span>
    </div>
  </div>
</div>

<div className="flex items-start justify-between p-6 border-b-2 border-gray-300">
  {/* Left side: Product Image */}
  <div className="w-1/4">
    <img 
src={food6}
      alt="Product Image" 
      className="w-44 h-44 object-cover ml-10"
    />
  </div>

  {/* Right section: Product Name and Details */}
  <div className="w-3/4 pl-6">
    <h2 className="text-2xl font-bold text-start -ml-20">Product Name</h2>
    <p className="mt-2 text-gray-600 text-start -ml-20">This is a brief description of the product. It highlights the main features and details about the product.</p>

    {/* Product Price */}
    <div className="mt-4 text-right">
      <span className="text-3xl font-semibold text-green-600">$99.99</span>
    </div>
  </div>
</div>

<div className="flex items-start justify-between p-6 border-b-2 border-gray-300">
  {/* Left side: Product Image */}
  <div className="w-1/4">
    <img 
src={food6}
      alt="Product Image" 
      className="w-44 h-44 object-cover ml-10"
    />
  </div>

  {/* Right section: Product Name and Details */}
  <div className="w-3/4 pl-6">
    <h2 className="text-2xl font-bold text-start -ml-20">Product Name</h2>
    <p className="mt-2 text-gray-600 text-start -ml-20">This is a brief description of the product. It highlights the main features and details about the product.</p>

    {/* Product Price */}
    <div className="mt-4 text-right">
      <span className="text-3xl font-semibold text-green-600">$99.99</span>
    </div>
  </div>
</div>

<div className="flex items-start justify-between p-6 border-b-2 border-gray-300">
  {/* Left side: Product Image */}
  <div className="w-1/4">
    <img 
src={food6}
      alt="Product Image" 
      className="w-44 h-44 object-cover ml-10"
    />
  </div>

  {/* Right section: Product Name and Details */}
  <div className="w-3/4 pl-6">
    <h2 className="text-2xl font-bold text-start -ml-20">Product Name</h2>
    <p className="mt-2 text-gray-600 text-start -ml-20">This is a brief description of the product. It highlights the main features and details about the product.</p>

    {/* Product Price */}
    <div className="mt-4 text-right">
      <span className="text-3xl font-semibold text-green-600">$99.99</span>
    </div>
  </div>
</div>

<div className="flex items-start justify-between p-6 border-b-2 border-gray-300">
  {/* Left side: Product Image */}
  <div className="w-1/4">
    <img 
src={food6}
      alt="Product Image" 
      className="w-44 h-44 object-cover ml-10"
    />
  </div>

  {/* Right section: Product Name and Details */}
  <div className="w-3/4 pl-6">
    <h2 className="text-2xl font-bold text-start -ml-20">Product Name</h2>
    <p className="mt-2 text-gray-600 text-start -ml-20">This is a brief description of the product. It highlights the main features and details about the product.</p>

    {/* Product Price */}
    <div className="mt-4 text-right">
      <span className="text-3xl font-semibold text-green-600">$99.99</span>
    </div>
  </div>
</div>

<div className="flex items-start justify-between p-6 border-b-2 border-gray-300">
  {/* Left side: Product Image */}
  <div className="w-1/4">
    <img 
src={food6}
      alt="Product Image" 
      className="w-44 h-44 object-cover ml-10"
    />
  </div>

  {/* Right section: Product Name and Details */}
  <div className="w-3/4 pl-6">
    <h2 className="text-2xl font-bold text-start -ml-20">Product Name</h2>
    <p className="mt-2 text-gray-600 text-start -ml-20">This is a brief description of the product. It highlights the main features and details about the product.</p>

    {/* Product Price */}
    <div className="mt-4 text-right">
      <span className="text-3xl font-semibold text-green-600">$99.99</span>
    </div>
  </div>
</div>
</div>

<div className="relative mt-40">
      <img 
src={closeupmenu

}        alt="Menu Background" 
        className="w-full h-60 bg-gray-700 opacity-80"
      />
      <div className="absolute inset-0 flex flex-row items-center justify-center justify-evenly">
        <div className='flex flex-col'>
        <h1 className="text-white text-5xl ">420</h1>
        <p className='text-white'>Professional Chefs</p>
        </div>
        <div className='flex flex-col'>
        <h1 className="text-white text-5xl ">420</h1>
        <p className='text-white'>Professional Chefs</p>
        </div>
        <div className='flex flex-col'>
        <h1 className="text-white text-5xl ">420</h1>
        <p className='text-white'>Professional Chefs</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Menu
