import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; // Ensure path is correct
import CartIcon from './icons/menu.png'; // Ensure path is correct
import CheckoutIcon from './icons/franchises.png'; // Ensure path is correct
import AboutUsIcon from './icons/about.png'; // Ensure path is correct
import ContactUsIcon from './icons/contact.png'; // Ensure path is correct
import frame from './Images/frame4.png';
const Faranchies = () => {
  return (
    <div>
     <div className="relative">
  <div className="relative">
    <img 
      src={frame}
      alt="Menu Background" 
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-6xl mb-10">Our Branches</h1>
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



<div className='text-center text-4xl text-black w-full h-40 mt-16'>
  <h1>Introducing New look 
  </h1>
</div>

  
<div class="w-full relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">

  <div class="relative w-full h-80 md:h-96 min-h-[300px]">

    <div class="duration-700 ease-in-out" data-carousel-item="active">
      <img src={frame} class="object-cover w-full h-full" alt="Slide 1" />
    </div>
  
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={frame} class="object-cover w-full h-full" alt="Slide 2" />
    </div>
 
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={frame} class="object-cover w-full h-full" alt="Slide 3" />
    </div>
  </div>

  
  <div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="true" data-carousel-slide-to="0"></button>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="false" data-carousel-slide-to="1"></button>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="false" data-carousel-slide-to="2"></button>
  </div>

  <button type="button" class="absolute top-1/2 left-3 z-30 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300" data-carousel-prev>
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>


  <button type="button" class="absolute top-1/2 right-3 z-30 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300" data-carousel-next>
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </button>
</div>
<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
<section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Section (Left) */}
            <div className="rounded-lg overflow-hidden text-left mt-10 text-3xl">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Pouros and Sons</h3>
                
              </div>
              <div className="border-gray-200 px-6 py-4">
                
              <p className="mt-1 text-gray-600">646 First Street, Quigleyville 36427
              country</p>
            
              </div>
              <div className="border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">768-123 Reviews</h3>
                <p className="mt-1 text-gray-600">0321-1234-123
                </p>
              </div>
            </div>

            {/* Map Section (Right) */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%" height="480" style={{ border: '0' }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='text-center text-4xl text-black w-full h-40 mt-16'>
  <h1>We Are Now in Bristol
  </h1>
</div>

    <div class="w-full relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">

<div class="relative w-full h-80 md:h-96 min-h-[300px]">

  <div class="duration-700 ease-in-out" data-carousel-item="active">
    <img src={frame} class="object-cover w-full h-full" alt="Slide 1" />
  </div>

  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src={frame} class="object-cover w-full h-full" alt="Slide 2" />
  </div>

  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src={frame} class="object-cover w-full h-full" alt="Slide 3" />
  </div>
</div>


<div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
  <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="true" data-carousel-slide-to="0"></button>
  <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="false" data-carousel-slide-to="1"></button>
  <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="false" data-carousel-slide-to="2"></button>
</div>

<button type="button" class="absolute top-1/2 left-3 z-30 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300" data-carousel-prev>
  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
  </svg>
</button>


<button type="button" class="absolute top-1/2 right-3 z-30 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300" data-carousel-next>
  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
</button>
</div>


<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>

<section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Section (Left) */}
            <div className="rounded-lg overflow-hidden text-left mt-10 text-3xl">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Pouros and Sons</h3>
                
              </div>
              <div className="border-gray-200 px-6 py-4">
                
              <p className="mt-1 text-gray-600">646 First Street, Quigleyville 36427
              country</p>
            
              </div>
              <div className="border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">768-123 Reviews</h3>
                <p className="mt-1 text-gray-600">0321-1234-123
                </p>
              </div>
            </div>

            {/* Map Section (Right) */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%" height="480" style={{ border: '0' }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Faranchies
