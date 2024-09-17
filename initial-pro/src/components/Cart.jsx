import React from 'react'

const Cart = () => {
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
    <div className="flex justify-between">
  <div className="w-1/2 p-6 mt-20">
    <form action="#" className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Enter Your Name" className="border-2 p-2" />
        <input type="text" placeholder="Enter Your Name" className="border-2 p-2" />
        <input type="text" placeholder="Enter Your Name" className="border-2 p-2" />
        <input type="text" placeholder="Enter Your Name" className="border-2 p-2" />
        <input type="text" placeholder="Enter Your Name" className="border-2 p-2" />
        <input type="text" placeholder="Enter Your Name" className="border-2 p-2" />
      </div>
    </form>
  </div>


  <div className="w-1/3 border p-6 mt-20">
    <div className="grid grid-cols-3 items-start gap-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 shrink-0 bg-gray-100 p-2 rounded-md">
          <img src="https://readymadeui.com/images/product14.webp" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-base font-bold text-gray-800">Product Name</h3>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">qty;</p>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">50$</p>
        </div>
      </div>
     
    </div>
    <hr class="border-gray-300 p-5" />

    <div className="grid grid-cols-3 items-start gap-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 shrink-0 bg-gray-100 p-2 rounded-md">
          <img src="https://readymadeui.com/images/product14.webp" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-base font-bold text-gray-800">Product Name</h3>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">qty;</p>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">50$</p>
        </div>
      </div>
     
    </div> 
    <hr class="border-gray-300 p-5" />

    <div className="grid grid-cols-3 items-start gap-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 shrink-0 bg-gray-100 p-2 rounded-md">
          <img src="https://readymadeui.com/images/product14.webp" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-base font-bold text-gray-800">Product Name</h3>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">qty;</p>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">50$</p>
        </div>
      </div>
     
    </div>
    <hr class="border-gray-300 p-5" />
<div>
    <div className=' flex  flex-row gap-44 justify-evenly'>
    <div className='text-left'>
    <p>Shipping</p>
    <p>Discount</p>
    <p>Tax</p>
    <p>Sub Total</p>
    </div>
    <div className='text-right'>
    <p>130$</p>
    <p>Free</p>
    <p>25%</p>
    <p>54.76$</p>
    </div>
    </div>
</div>
<hr class="border-gray-300 p-5" />

  </div>
</div>

    </div>
  )
}

export default Cart
