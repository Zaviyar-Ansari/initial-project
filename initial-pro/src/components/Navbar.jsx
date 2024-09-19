import React from 'react'
import cart from './icons/cartnav.svg';
import detail from './icons/detail.svg';
import pay from './icons/onlinepay.svg';
const Navbar = () => {
  return (
    <div>
  <nav className="bg-gray-800 h-12 w-full relative flex items-center justify-between">
  {/* Language selector on the left */}
  <div className="pl-5">
    <select className="bg-gray-800 text-white" name="cars" id="cars">
      <option value="volvo">English</option>
      <option value="saab">Spanish</option>
      <option value="mercedes">German</option>
      <option value="audi">Italian</option>
    </select>
  </div>

  {/* Logo in the center */}
  <div className="text-center text-white text-3xl">
    <h1>LOGO</h1>
  </div>

  {/* Cart, Checkout, and Products icons on the right */}
  <div className="pr-5 flex space-x-4 items-center">
    {/* Cart Icon */}
    <a className="text-gray-500" href="/cart">
      <img src={cart} alt="Cart Icon" className="w-6 h-6" />
    </a>

    {/* Checkout Icon */}
    <a className="text-gray-500" href="/checkout">
      <img src={detail} alt="Checkout Icon" className="w-6 h-6" />
    </a>

    {/* Products Icon */}
    <a className="text-gray-500" href="/product">
      <img src={pay} alt="Products Icon" className="w-6 h-6" />
    </a>
  </div>
</nav>


  </div>
  
  )
}

export default Navbar
