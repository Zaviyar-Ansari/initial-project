import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; 
import CartIcon from './icons/menu.png'; 
import CheckoutIcon from './icons/franchises.png';  
import AboutUsIcon from './icons/about.png'; 
import ContactUsIcon from './icons/contact.png'; 
import closeupmenu from './Images/closeupmenu.png';
import aboutfood from './Images/closeabout.jpg';

const AboutUs = () => {
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
    <h1 className="text-white text-5xl">About US</h1>
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



    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src={aboutfood} className='w-full h-full'/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-teal-400 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-teal-400">Our Company</span>
            </h2>
            <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default AboutUs