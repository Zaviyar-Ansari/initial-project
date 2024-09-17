import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; // Ensure path is correct
import CartIcon from './icons/cart.png'; // Ensure path is correct
import CheckoutIcon from './icons/checkout.png'; // Ensure path is correct
import AboutUsIcon from './icons/about.png'; // Ensure path is correct
import ContactUsIcon from './icons/contact.png'; // Ensure path is correct
const Hero = () => {
  return (
    <div>
      <div className="flex w-full h-96 overflow-hidden relative">
      <div className="w-1/2 h-full">
        <div id="default-carousel" className="relative w-full h-full overflow-hidden shadow-lg" data-carousel="static">
          <div className="relative h-full">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                className="object-cover w-full h-full"
                alt="Slide 1"
              />
              <span className="absolute text-xl font-semibold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-2xl">
                First Slide
              </span>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="object-cover w-full h-full"
                alt="Slide 2"
              />
              <span className="absolute text-xl font-semibold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-2xl">
                Second Slide
              </span>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          alt="Food Image"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
       <nav className="bg-gray-800 bg-opacity-50 p-4 h-fit flex flex-col justify-between rounded-md fixed right-0 top-16 z-50">
  <ul className="list-none space-y-6 text-center text-white">
    <li>
      <Link to="/" className="flex flex-col items-center justify-center">
        <img src={HomeIcon} alt="Home" className="w-6 h-6 mb-2" />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link to="/CartIcon" className="flex flex-col items-center justify-center">
        <img src={CartIcon} alt="CartIcon" className="w-6 h-6 mb-2" />
        <span>Cart</span>
      </Link>
    </li>
    <li>
      <Link to="/CheckoutIcon" className="flex flex-col items-center justify-center">
        <img src={CheckoutIcon} alt="CheckoutIcon" className="w-6 h-6 mb-2" />
        <span>Checkout</span>
      </Link>
    </li>
    <li>
      <Link to="/AboutUs" className="flex flex-col items-center justify-center">
        <img src={AboutUsIcon} alt="About" className="w-6 h-6 mb-2" />
        <span>About Us</span>
      </Link>
    </li>
    <li>
      <Link to="/ContactUSIcon" className="flex flex-col items-center justify-center">
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
   
    <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    {/* Text on the left */}
    <div className="mr-auto place-self-center lg:col-span-7">
      <p className="pl-6 text-2xl text-left leading-normal pt-4">About Us</p>
      <p className="pl-6 text-2xl text-left leading-normal pt-3">We Create the best foody product</p>
      <p className="pl-6 text-sm text-left leading-normal pt-4">
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
      <p className="pl-6 text-1xl text-left leading-normal pt-3">
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <p className="pl-6 text-1xl text-left leading-normal pt-3">
        Quisque diam pellentesque bibendum non dui volutpat fringilla
      </p>
      <p className="pl-6 text-1xl text-left leading-normal pt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-teal-500 border-gray-300 rounded-lg hover:bg-teal-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Read More
      </a>
    </div>

    {/* Images on the right */}
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-row">
      <div className="flex flex-wrap w-full">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="https://dummyimage.com/601x361"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://dummyimage.com/502x302"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://dummyimage.com/503x303"
          />
        </div>
      </div>
    </div>
  </div>
</section>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 className='text-4xl pb-4 '> Food Category
    </h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
           <img className='relative' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s" alt="" />
           <button class="absolute justify-center m-12 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
  Button
</button>


          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s" alt="" /> 
          <button class="absolute justify-center m-12 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
  Button
</button>

          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s" alt="" /> 
          <button class="absolute justify-center m-12 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
  Button
</button>

          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s" alt="" /> 
          <button class="absolute justify-center m-12 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
  Button
</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<div className="w-full relative">
  <img src="https://i.pinimg.com/564x/93/5b/1f/935b1f66017b69c13aaaedc874e29b73.jpg" alt="" className="w-full object-cover"></img>
  
  <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
    <h1 className="text-4xl font-bold mb-4">Book Early & Save</h1>
    <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur.</p>
    <button class="justify-center text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-2 px-8 rounded text-md">
      Button
    </button>
  </div>
</div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-row flex-wrap -m-4">
      {/* Image Item 1 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DxB8UnYh4fJRarIPFSHxa_TXp13hRBWsiw&s" />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>

      {/* Image Item 2 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DxB8UnYh4fJRarIPFSHxa_TXp13hRBWsiw&s" />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>

      {/* Image Item 3 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DxB8UnYh4fJRarIPFSHxa_TXp13hRBWsiw&s" />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>

      {/* Image Item 4 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DxB8UnYh4fJRarIPFSHxa_TXp13hRBWsiw&s" />
          <button className="absolute bottom-2 left-2 text-white bg-teal-400 border-[4px] border-white border-opacity-50 py-1 px-4 rounded text-sm">
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <button  className="bottom-2 left-2 text-white bg-teal-400 border-[4px py-1 px-4 rounded text-sm"> Button</button>
    </div>

</section>




<div className="flex flex-row justify-between pt-4">
  {/* Left Section */}
  <div className="flex-1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5Bw2LZRc0j40ByHvOJt1N0oms6_qgQsaKQ&s" alt="Restaurant" className="w-full h-auto" />
    <div className="text-left">
      <h1 className="text-2xl font-bold">Our Restaurant</h1>
      <p className="mt-2">
        Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
      </p>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex-1">
    <div className="text-left">
      <h1 className="text-2xl font-bold">Our Restaurant</h1>
      <p className="">
        Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
      </p>
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5Bw2LZRc0j40ByHvOJt1N0oms6_qgQsaKQ&s" alt="Restaurant" className="w-full h-auto  mt-72" />
  </div>
</div>


<div className="w-full h-auto bg-red-400 mt-10 py-10">
  {/* Our Services Title */}
  <h1 className="text-center text-3xl font-bold mb-10">Our Services</h1>
  
  {/* Services Section */}
  <div className="flex flex-row justify-around space-x-8">
    {/* Concierge Service */}
    <div className="flex flex-col items-center p-4 max-w-xs">
      <h2 className="text-xl font-semibold mb-4">Concierge Service</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>

    {/* Dining Service */}
    <div className="flex flex-col items-center p-4  max-w-xs">
      <h2 className="text-xl font-semibold mb-4">Dining</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>

    {/* Restaurant Service */}
    <div className="flex flex-col items-center p-4  max-w-xs">
      <h2 className="text-xl font-semibold mb-4">Restaurant</h2>
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
