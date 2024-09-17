import React from 'react';

const Cart = () => {
  return (
    <div className="w-full p-6">
      <div className="flex flex-col w-full gap-4">
        {/* Full-width cart products */}
        <div className="w-full">
  <div className="p-6 mb-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="ml-16">
          <th className="text-left font-semibold py-2 px-4">Product</th>
          <th className="text-left font-semibold py-2 px-4">Price</th>
          <th className="text-left font-semibold py-2 px-4">Quantity</th>
          <th className="text-left font-semibold py-2 px-4">Total</th>
          <th className="text-left font-semibold py-2 px-4">Remove</th>
        </tr>
      </thead>
      <tbody>
        {/* Example product row */}
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
              <span className="font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4">
            <div className="flex items-center justify-center">
              <button className="border rounded-md py-1 px-3 mr-2 text-lg">-</button>
              <span className="text-center w-8">1</span>
              <button className="border rounded-md py-1 px-3 ml-2 text-lg">+</button>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4 text-center">
            <button className="text-red-500 font-bold text-lg">X</button>
            <span className="ml-2 hidden lg:inline">Remove</span>
          </td>
        </tr>
        {/* Add more product rows as needed */}
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
              <span className="font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4">
            <div className="flex items-center justify-center">
              <button className="border rounded-md py-1 px-3 mr-2 text-lg">-</button>
              <span className="text-center w-8">1</span>
              <button className="border rounded-md py-1 px-3 ml-2 text-lg">+</button>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4 text-center">
            <button className="text-red-500 font-bold text-lg">X</button>
            <span className="ml-2 hidden lg:inline">Remove</span>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-4 px-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
              <span className="font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4">
            <div className="flex items-center justify-center">
              <button className="border rounded-md py-1 px-3 mr-2 text-lg">-</button>
              <span className="text-center w-8">1</span>
              <button className="border rounded-md py-1 px-3 ml-2 text-lg">+</button>
            </div>
          </td>
          <td className="py-4 px-4">$19.99</td>
          <td className="py-4 px-4 text-center">
            <button className="text-red-500 font-bold text-lg">X</button>
            <span className="ml-2 hidden lg:inline">Remove</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        {/* Bottom section with coupon and total */}
        <div className="flex flex-row justify-between w-full gap-4">
          {/* Coupon Section */}
          <div className="w-1/2">
            <label htmlFor="coupon" className="block text-left font-bold text-xl">
              Coupon Code
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="coupon"
                className="border-2 p-2 w-3/4"
                placeholder="Enter coupon code"
              />
              <button className="ml-2 px-4 py-2 text-white bg-teal-500 rounded-md">Apply</button>
            </div>
          </div>

          {/* Total Section */}
          <div className="w-1/2">
            <div className="border-2 p-4">
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$250.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Now Button */}
        <div className="w-full flex justify-center mt-4">
        <div className="w-full p-6">
  <div className="text-right">
    <button className="rounded-md bg-teal-500 px-6 py-2 text-white">
      Order Now
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
