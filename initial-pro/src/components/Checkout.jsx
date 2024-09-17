import React from 'react'

const Checkout = () => {
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
  <div className=" text-4xl ml-20  w-1/2 p-6 mt-32">
  <form action="#" className="space-y-4">
  <div className="grid grid-cols-2 gap-4 gap-y-7 text-sm text-left">
    <label htmlFor="Fname" className="flex flex-col">
      First Name
      <input type="text" id="Fname" className="border-2 p-2 mt-1" />
    </label>
    <label htmlFor="Lname" className="flex flex-col">
      Last Name
      <input type="text" id="Lname" className="border-2 p-2 mt-1" />
    </label>
    <label htmlFor="Email" className="flex flex-col">
      Email
      <input type="text" id="Email" className="border-2 p-2 mt-1" />
    </label>
    <label htmlFor="Phone" className="flex flex-col">
      Phone
      <input type="text" id="Phone" className="border-2 p-2 mt-1" />
    </label>
    <label htmlFor="Address" className="flex flex-col">
      Address
      <input type="text" id="Address" className="border-2 p-2 mt-1" />
    </label>
    <label htmlFor="countries" className="flex flex-col">
      Select a Country
      <select id="countries" className="border-2 p-2 mt-1 bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option value="" disabled selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </label>
  </div>
</form>


  </div>


  <div className="w-1/3 border p-6 mt-20 mr-20">
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
<div className='text-2xl gap-36 flex flex-row justify-evenly '>
    <h1 className='text-left'>TOTAL</h1>
    <h1 className='text-right font-bold'>432.65$</h1>
</div>
<button className='bg-teal-400 text-white w-28 h-10 rounded-lg mt-10'>
    Check Out
</button>
  </div>
</div>

    </div>
  )
}

export default Checkout
