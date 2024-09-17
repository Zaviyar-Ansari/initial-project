import React from 'react'

const Product = () => {
  return (
    <div>
        <div className="relative">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XhEX6CpPioaSgbk0F3qIKzUFi6WUBhplmw&s" 
        alt="Menu Background" 
        className="w-full h-60 bg-gray-700 opacity-80"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl">MENU</h1>
      </div>
      <div className="absolute top-0 mt-6 mr-4  right-0 w-40 h-72">
          <nav className="bg-gray-600 bg-opacity-10 p-4 w-full rounded-md">
            <ul className="list-none space-y-4 text-center text-white ">
              <li>Home</li>
              <li>Menu</li>
              <li>Franchises</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded">
                Button
              </button>
            </ul>
          </nav>
        </div>
    </div>



    <div class="font-sans mt-20">
          <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
              <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

                  <div class="w-full lg:sticky top-0 sm:flex gap-2">
                      <div class="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                          <img src="https://readymadeui.com/images/product1.webp" alt="Product1" class="w-full cursor-pointer rounded-md outline" />
                          <img src="https://readymadeui.com/images/product6.webp" alt="Product2" class="w-full cursor-pointer rounded-md" />
                          <img src="https://readymadeui.com/images/product7.webp" alt="Product3" class="w-full cursor-pointer rounded-md" />
                          <img src="https://readymadeui.com/images/product3.webp" alt="Product4" class="w-full cursor-pointer rounded-md" />
                      </div>
                      <img src="https://readymadeui.com/images/product2.webp" alt="Product" class="w-4/5 rounded-md object-cover" />
                  </div>

                  <div>
                      <h2 class="text-2xl font-bold text-gray-800">Product Name</h2>
                      
                      <div class="mt-8">
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
                          <p class="text-gray-800 text-xl font-bold">$12</p>
                          <p class="text-gray-400 text-xl"><strike>$16</strike> <span class="text-sm ml-1.5">Tax included</span></p>
                      </div>

                      <div class="flex space-x-2 mt-4">
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                      </div>

                      <div class="mt-8">
                          <h3 class="text-xl font-bold text-gray-800">Sizes</h3>
                          <div class="flex flex-wrap gap-4 mt-4">
                              <button type="button" class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">SM</button>
                              <button type="button" class="w-10 h-10 border-2 hover:border-blue-600 border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">MD</button>
                              <button type="button" class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">LG</button>
                              <button type="button" class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">XL</button>
                          </div>
                      </div>

                      <button type="button" class="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md">Add to cart</button>



                  </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Product
