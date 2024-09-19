import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from './icons/home.png'; // Ensure path is correct
import CartIcon from './icons/menu.png'; // Ensure path is correct
import CheckoutIcon from './icons/franchises.png'; // Ensure path is correct
import AboutUsIcon from './icons/about.png'; // Ensure path is correct
import ContactUsIcon from './icons/contact.png'; // Ensure path is correct
import dining from './icons/Dinning.svg';
import serving from './icons/Serving.svg';
import mainimg from './Images/closeabout.jpg';
import food4 from './Images/unsplash4.png';
import food5 from './Images/unsplash5.png';
import food6 from './Images/unsplash6.png';
import food7 from './Images/unsplash7.png';
import closeupmenu from './Images/closeupmenu.png';


const Product = () => {
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
    <h1 className="text-white text-5xl">Product Details</h1>
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




    <div class="font-sans mt-20">
          <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
              <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

                  <div class="w-full lg:sticky top-0 sm:flex gap-2">
                      <div class="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                          <img src={mainimg} alt="Product1" class="w-full cursor-pointer rounded-md outline" />
                          <img src={mainimg} alt="Product2" class="w-full cursor-pointer rounded-md" />
                          <img src={mainimg} alt="Product3" class="w-full cursor-pointer rounded-md" />
                          <img src={mainimg} alt="Product4" class="w-full cursor-pointer rounded-md" />
                      </div>
                      <img src={mainimg} alt="Product" class="w-4/5 rounded-md object-cover" />
                  </div>

                  <div>
                      <h2 class="text-2xl font-bold text-gray-800 text-left">Product Name</h2>
                      
                      <div class="mt-8 border-b-2 border-gray-300 text-left p-5">
                          <h3 class="text-xl font-bold text-gray-800">Category: Pizza</h3>
                          <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
risus. Lacus nisi, et ac dapibus sit eu velit in consequat
                            </p>
                          </ul>
                      </div>
                      <div class="flex flex-wrap gap-4 mt-4">
                          <p class="text-gray-800 text-3xl font-bold">$12</p>

                      </div>

                      <div class="flex space-x-2 mt-4">
                          <svg class="w-5 fill-teal-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-teal-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-teal-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-teal-400" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <p>| 5.0 Rating | 22 Review</p>
                      </div>

                      <div class="mt-8 text-left">
                          <p>Quantity</p>
                      </div>
                      <div class="flex items-center border-b-2 border-gray-300 space-x-10 p-5">
 
  <div class="flex items-center border-2 w-28 h-10 rounded-lg text-center justify-center">
   
    <button type="button" class="w-10 h-full bg-gray-200 hover:bg-gray-300 text-lg font-semibold">-</button>
    <span class="w-12 text-lg font-semibold">1</span>
    <button type="button" class="w-10 h-full bg-gray-200 hover:bg-gray-300 text-lg font-semibold">+</button>
  </div>

  <button type="button" class="px-6 py-3 bg-teal-400 text-white text-sm font-semibold rounded-md">
    Add to cart
  </button>
</div>



                  </div>
              </div>
          </div>
      </div>
      <div class="mt-8">
            <ul class="flex border-b">
              <li
                class="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                Description</li>
              <li class="text-gray-600 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">Reviews</li>
            </ul>
            <div class="mt-8 text-left">
              <h3 class="text-lg font-bold text-gray-800">Description
              </h3>
              <p>
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus
vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
              </p>
              <p>
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo.
Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
              </p>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-bold text-gray-800 text-left">Key Benefits
              </h3>
              
            </div>

            <ul class="space-y-3 list-none	text-left mt-6 pl-4 text-sm text-gray-600 ">
              <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
              <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
              <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
              <li>Personalize them with your own designs, patterns, or embellishments to make them uniquely yours.</li>
            </ul>
          </div>



          
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 className='text-4xl pb-4 text-left '>Similar Products
    </h1>
    <div class="flex flex-wrap -m-4">
    <div class="p-4 lg:w-1/4  text-left">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src={food7} alt="" /> 
         
          </div>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Product Name</h2>
        <p class=" mt-2">$38.00  </p>
      </div>
      <div class="p-4 lg:w-1/4  text-left">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src={food4} alt="" /> 
         
          </div>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Product Name</h2>
        <p class=" mt-2">$38.00  </p>
      </div>
      <div class="p-4 lg:w-1/4  text-left">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src={food5} alt="" /> 
         
          </div>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Product Name</h2>
        <p class=" mt-2">$38.00  </p>
      </div>
      <div class="p-4 lg:w-1/4  text-left ">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <img src={food6} alt="" /> 
         
          </div>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Product Name</h2>
        <p class=" mt-2">$38.00  </p>
      </div>
    </div>
  </div>
</section>


<div className="w-full h-auto py-10 mt-10 bg-teal-100">
  {/* Our Services Title */}
  <h1 className="mb-10 text-3xl font-bold text-center">Our Services</h1>
  
  {/* Services Section */}
  <div className="flex flex-row justify-around space-x-8">
    {/* Concierge Service */}
    <div className="flex flex-col items-center max-w-xs p-4">
      <img src={serving} alt=""  className="w-16 h-14 mb-2" />
      <h2 className="mb-4 text-xl font-semibold">Concierge Service</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>

    {/* Dining Service */}
    <div className="flex flex-col items-center max-w-xs p-4">
      <img src={dining} alt=""  className="w-16 h-14 mb-2" />
      <h2 className="mb-4 text-xl font-semibold">Dining</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.
      </p>
    </div>

    {/* Restaurant Service */}
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
  )
}

export default Product
