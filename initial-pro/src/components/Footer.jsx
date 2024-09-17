import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-500 mt-32">
      <div className="w-full py-8 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">LOGO</h1>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
            <div className="flex mt-4">
              <input type="search" placeholder="Enter your Email" className="text-center border p-1" />
              <button className="bg-teal-400 h-10 px-3">Hi</button>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p className="mt-2">25950 Long Lane, North Ismael 14280</p>
            <p>00965 96659986</p>
            <p>Jermeni.Connelly@yahoo.com</p>
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>

          {/* Links Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Links</h1>
            <p className="mt-2">About Us</p>
            <p>Contact Us</p>
            <p>Our Menu</p>
            <p>Team</p>
            <p>FAQ</p>
          </div>

          {/* Gallery Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Gallery</h1>
            <div className="grid grid-cols-3 gap-0 mt-4">
              <img src="https://via.placeholder.com/150" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://via.placeholder.com/150" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://via.placeholder.com/150" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://via.placeholder.com/150" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://via.placeholder.com/150" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://via.placeholder.com/150" alt="Gallery" className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer between upper footer and bottom section */}
      <div className="w-full bg-gray-500 py-6"></div>

      {/* Footer Bottom Section */}
      <footer className="w-full bg-gray-800 text-white py-4">
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
