import React from 'react';
import food2 from './Images/unsplash2.png';
import food3 from './Images/unsplash3.png';
import cheff from './Images/Rectangle.png';
import food4 from './Images/unsplash4.png';
import food5 from './Images/unsplash5.png';
import food6 from './Images/unsplash6.png';
import food7 from './Images/unsplash7.png';
import telegram from './icons/telegram.svg';

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 mt-32">
      <div className="w-full py-8 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        
          <div className="text-left">
            <h1 className="text-xl font-bold">LOGO</h1>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
            <div className="flex mt-4">
              <input type="search" placeholder="Enter your Email" className="text-center border p-1" />
              <button className="bg-teal-400 h-10 px-3"><img src={telegram} alt="" className='h-6 w-4' /></button>
            </div>
          </div>

          
          <div className="text-left">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p className="mt-2">25950 Long Lane, North Ismael 14280</p>
            <p>00965 96659986</p>
            <p>Jermeni.Connelly@yahoo.com</p>
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>

        
          <div className="text-left">
            <h1 className="text-xl font-bold">Links</h1>
            <p className="mt-2">About Us</p>
            <p>Contact Us</p>
            <p>Our Menu</p>
            <p>Team</p>
            <p>FAQ</p>
          </div>

          <div className="text-left">
            <h1 className="text-xl font-bold">Gallery</h1>
            <div className="grid grid-cols-3 gap-0 mt-4">
              <img src={food2} alt="Gallery" className="w-full h-auto rounded-md" />
              <img src={food4} alt="Gallery" className="w-full h-auto rounded-md" />
              <img src={food5} alt="Gallery" className="w-full h-auto rounded-md" />
              <img src={food6} alt="Gallery" className="w-full h-auto rounded-md" />
              <img src={food7} alt="Gallery" className="w-full h-auto rounded-md" />
              <img src={food3} alt="Gallery" className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-full py-6"></div>

      <footer className="w-full bg-teal-400 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    
    <h1 className='ml-10'>
      Copyright © 2000-2020.logo.com.
    </h1>
  
    <ul className='flex flex-row gap-5'>
      <li>All rights reserved</li>
      <li>Privacy Policy</li>
      <li>Term of Use Partner</li>
    </ul>
  </div>
</footer>

    </div>
  );
};

export default Footer;
