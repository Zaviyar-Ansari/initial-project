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
    </div>
  )
}

export default Product
