import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; 
import CartIcon from './icons/menu.png'; 
import CheckoutIcon from './icons/franchises.png'; 
import AboutUsIcon from './icons/about.png'; 
import ContactUsIcon from './icons/contact.png'; 
import closeup from './Images/closeup.jpg';
import food1 from './Images/unsplash.png';
import food2 from './Images/unsplash2.png';
import food3 from './Images/unsplash3.png';
import cheff from './Images/Rectangle.png';
import food4 from './Images/unsplash4.png';
import food5 from './Images/unsplash5.png';
import food6 from './Images/unsplash6.png';
import food7 from './Images/unsplash7.png';
import frame from './Images/frame4.png';
import picture from './Images/Picture.png';
import pic from './Images/pic.png';
import dining from './icons/Dinning.svg';
import serving from './icons/Serving.svg';
const Hero = () => {
  return (
    <div>
      <div className="relative flex w-full overflow-hidden h-96">
      <div className="w-1/2 h-full">
  <div
    id="default-carousel"
    className="relative w-full h-full overflow-hidden shadow-lg"
    data-carousel="static"
  >
    
    <div className="relative h-full">
     
      <div
        className="duration-700 ease-in-out active"
        data-carousel-item="active"
      >
      
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <img
          src={closeup}
          className="object-cover w-full h-full"
          alt="Slide 1"
        />
        <span className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-2xl">
        <span className='mb-10 text-lg font-montez'>Its Quick & Amusing!</span> <br></br><span className='mt-5 text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</span><br></br>
       <span className='text-xs font-bold transform-none'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Varius sed pharetra dictum neque massa congue</span>
<button className='justify-end w-20 mt-10 text-base bg-teal-400 rounded-md h-14'>
  See More
</button>
        </span>
      </div>

     
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
      
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <img
          src={closeup}
          className="object-cover w-full h-full"
          alt="Slide 2"
        />
        <span className="absolute text-xl font-semibold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-2xl">
          Second Slide
        </span>
      </div>

      <div className="hidden duration-700 ease-in-out" data-carousel-item>
     
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <img
          src={closeup}
          className="object-cover w-full h-full"
          alt="Slide 3"
        />
        <span className="absolute text-xl font-semibold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-2xl">
          Third Slide
        </span>
      </div>
    </div>


    <button
      type="button"
      className="absolute z-40 flex items-center justify-center w-10 h-10 transition rounded-full top-1/2 left-3 bg-gray-200/50 hover:bg-gray-300 focus:outline-none"
      data-carousel-prev
    >
      <svg
        className="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>

   
    <button
      type="button"
      className="absolute z-40 flex items-center justify-center w-10 h-10 transition rounded-full top-1/2 right-3 bg-gray-200/50 hover:bg-gray-300 focus:outline-none"
      data-carousel-next
    >
      <svg
        className="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  </div>
</div>


      <div className="relative w-1/2 h-full">
        <img
          src={closeup}
          alt="Food Image"
          className="object-cover w-full h-full shadow-lg"
        />
       <nav className="fixed right-0 z-50 flex flex-col justify-between p-4 bg-gray-800 bg-opacity-50 rounded-md h-fit top-16">
  <ul className="space-y-6 text-center text-white list-none">
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
    <button className="px-6 py-3 text-white bg-teal-500 rounded-lg">
      Book Now
    </button>
  </div>
</nav>
      </div>
    </div>
   

    <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
 
    <div className="mr-auto place-self-center lg:col-span-7">
      <p className="pt-4 pl-6 text-2xl leading-normal text-left">About Us</p>
      <p className="pt-3 pl-6 text-2xl leading-normal text-left">We Create the best foody product</p>
      <p className="pt-4 pl-6 text-sm leading-normal text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum <br /> non dui volutpat fringilla bibendum. Urna,
        elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
        mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
        consequat.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <p className="pt-3 pl-6 leading-normal text-left text-1xl">
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <p className="pt-3 pl-6 leading-normal text-left text-1xl">
        Quisque diam pellentesque bibendum non dui volutpat fringilla
      </p>
      <p className="pt-3 pl-6 leading-normal text-left text-1xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-teal-500 border border-gray-300 rounded-lg hover:bg-teal-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Read More
      </a>
    </div>


    <div className="flex-row hidden lg:mt-0 lg:col-span-5 lg:flex">
      <div className="flex flex-wrap w-full">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full"
            src={food1}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full"
            src={food2}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full"
            src={food3}
          />
        </div>
      </div>
    </div>
  </div>
</section>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto justify-center">
    <h1 class="pb-4 text-4xl text-center">Food Category</h1>
    <div class="flex flex-wrap -m-4">
      
    
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="relative h-64 w-full">
            <img class="absolute inset-0 h-full w-full object-cover" src={food4} alt="cheff" />
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
              Button
            </button>
          </div>
        </div>
      </div>

      
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="relative h-64 w-full">
            <img class="absolute inset-0 h-full w-full object-cover" src={food5} alt="" />
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
              Button
            </button>
          </div>
        </div>
      </div>

      
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="relative h-64 w-full">
            <img class="absolute inset-0 h-full w-full object-cover" src={food6} alt="" />
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
              Button
            </button>
          </div>
        </div>
      </div>

    
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="relative h-64 w-full">
            <img class="absolute inset-0 h-full w-full object-cover" src={food7} alt="" />
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
              Button
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<div className="relative w-full">
  <img src={frame} alt="" className="object-cover w-full"></img>
  
  <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
    <h1 className="mb-4 text-4xl font-bold">Book Early & Save</h1>
    <p className="mb-6 text-lg">Lorem ipsum dolor sit amet consectetur.</p>
    <button class="justify-center text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
      Button
    </button>
  </div>
</div>
<div className='text-center text-4xl text-black w-full h-full mt-16'>
  <h1>Meet Our Chef
  </h1>
</div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-row flex-wrap -m-4">
    
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <div className="relative h-64 overflow-hidden rounded"> 
          <img
            alt="ecommerce"
            className="block object-cover object-center w-full h-full" 
            src={cheff}
          />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>

   
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <div className="relative h-64 overflow-hidden rounded"> 
          <img
            alt="ecommerce"
            className="block object-cover object-center w-full h-full" 
            src={cheff}
          />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>

      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <div className="relative h-64 overflow-hidden rounded"> 
          <img
            alt="ecommerce"
            className="block object-cover object-center w-full h-full" 
            src={cheff}
          />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>

      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <div className="relative h-64 overflow-hidden rounded"> 
          <img
            alt="ecommerce"
            className="block object-cover object-center w-full h-full" 
            src={cheff}
          />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="mb-8 text-center">
    <button className="bottom-2 left-2 text-white bg-teal-400 border-[4px] py-1 px-4 rounded text-sm">
      Button
    </button>
  </div>
</section>


<div className="flex flex-col space-y-0 px-8 py-4">
  <div className="flex flex-row">
    <div className="flex-1">
      <img src={pic} alt="Restaurant" className="w-full h-auto rounded-bl-none rounded-tl-none rounded-br-lg rounded-tr-lg" />
    </div>
    <div className="flex-1 border-r-2 border-t-2 border-green-500 p-6">
      <h1 className="text-3xl font-bold text-right">Our Restaurant</h1>
      <p className="mt-4 text-right">
        Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
      </p>
    </div>
  </div>

  <div className="flex flex-row">
    <div className="flex-1 border-l-2 border-b-2 border-green-500 p-6">
      <h1 className="text-3xl font-bold">Meet & Greet</h1>
      <p className="mt-4">
        Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
      </p>
    </div>
    <div className="flex-1">
      <img src={picture} alt="Meet & Greet" className="w-full h-auto rounded-br-none rounded-bl-lg rounded-tr-lg rounded-tl-none" />
    </div>
  </div>
</div>


<div className="w-full h-auto py-10 mt-10 bg-teal-100">
  <h1 className="mb-10 text-3xl font-bold text-center">Our Services</h1>
  
  
  <div className="flex flex-row justify-around space-x-8">

    <div className="flex flex-col items-center max-w-xs p-4">
      <img src={serving} alt=""  className="w-16 h-14 mb-2" />
      <h2 className="mb-4 text-xl font-semibold">Concierge Service</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>

  
    <div className="flex flex-col items-center max-w-xs p-4">
      <img src={dining} alt=""  className="w-16 h-14 mb-2" />
      <h2 className="mb-4 text-xl font-semibold">Dining</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>

    <div className="flex flex-col items-center max-w-xs p-4">
      <img src={CheckoutIcon} alt="" />
      <h2 className="mb-4 text-xl font-semibold">Restaurant</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>
  </div>
</div>
</div>
  );
}

export default Hero;
