import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; // Ensure path is correct
import CartIcon from './icons/menu.png'; // Ensure path is correct
import CheckoutIcon from './icons/franchises.png'; // Ensure path is correct
import AboutUsIcon from './icons/about.png'; // Ensure path is correct
import ContactUsIcon from './icons/contact.png'; // Ensure path is correct
import closeupmenu from './Images/closeupmenu.png';

const Cart = () => {
  return (
<div>
<div className="relative">
  <div className="relative">
    <img 
      src={closeupmenu}
      alt="Menu Background" 
      className="w-full h-60 object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-5xl">Cart</h1>
  </div>
  <div className="absolute top-0 mt-6 mr-4 right-0 w-40 h-72">
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





    <div className="w-full p-6">
      <div className="flex flex-col w-full gap-4">
        {/* Full-width cart products */}
        <div className="w-full">
  <div className="p-6 mb-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="ml-16">
          <th className="text-left font-semibold py-2 px-4">Product</th>
          <th className="text-left font-semibold py-2 px-4">Price</th>
          <th className="text-left font-semibold py-2 px-4">Quantity</th>
          <th className="text-left font-semibold py-2 px-4">Total</th>
          <th className="text-left font-semibold py-2 px-4">Remove</th>
        </tr>
      </thead>
      <tbody>
        {/* Example product row */}
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
              <span className="font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4">
            <div className="flex items-center justify-center">
              <button className="border rounded-md py-1 px-3 mr-2 text-lg">-</button>
              <span className="text-center w-8">1</span>
              <button className="border rounded-md py-1 px-3 ml-2 text-lg">+</button>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4 text-center">
            <button className="text-red-500 font-bold text-lg">X</button>
            <span className="ml-2 hidden lg:inline">Remove</span>
          </td>
        </tr>
        {/* Add more product rows as needed */}
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
              <span className="font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4">
            <div className="flex items-center justify-center">
              <button className="border rounded-md py-1 px-3 mr-2 text-lg">-</button>
              <span className="text-center w-8">1</span>
              <button className="border rounded-md py-1 px-3 ml-2 text-lg">+</button>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4 text-center">
            <button className="text-red-500 font-bold text-lg">X</button>
            <span className="ml-2 hidden lg:inline">Remove</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
              <span className="font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4">
            <div className="flex items-center justify-center">
              <button className="border rounded-md py-1 px-3 mr-2 text-lg">-</button>
              <span className="text-center w-8">1</span>
              <button className="border rounded-md py-1 px-3 ml-2 text-lg">+</button>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4 text-center">
            <button className="text-red-500 font-bold text-lg">X</button>
            <span className="ml-2 hidden lg:inline">Remove</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        {/* Bottom section with coupon and total */}
        <div className="flex flex-row justify-between w-full gap-4">
          {/* Coupon Section */}
          <div className="w-1/2">
            <label htmlFor="coupon" className="block text-left font-bold text-xl">
              Coupon Code
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="coupon"
                className="border-2 p-2 w-3/4"
                placeholder="Enter coupon code"
              />
              <button className="ml-2 px-4 py-2 text-white bg-teal-500 rounded-md">Apply</button>
            </div>
          </div>

          {/* Total Section */}
          <div className="w-1/2">
            <div className="border-2 p-4">
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$250.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Now Button */}
        <div className="w-full flex justify-center mt-4">
        <div className="w-full p-6">
  <div className="text-right">
    <button className="rounded-md bg-teal-500 px-6 py-2 text-white">
      Order Now
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
