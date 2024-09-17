import React from 'react'

const Cart = () => {
  return (
    <div>
     <div class=" h-full py-8">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full">
                <div class=" p-6 mb-4">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity</th>
                                <th class="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image"></img>
                                        <span class="font-semibold">Product name</span>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                            </tr>
                        
                        </tbody>
                    </table>
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity</th>
                                <th class="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image"></img>
                                        <span class="font-semibold">Product name</span>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                            </tr>
                        
                        </tbody>
                    </table>
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity</th>
                                <th class="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image"></img>
                                        <span class="font-semibold">Product name</span>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                            </tr>
                        
                        </tbody>
                    </table>
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity</th>
                                <th class="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image"></img>
                                        <span class="font-semibold">Product name</span>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">$19.99</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

</div>
<div className='flex flex-row justify-evenly '>
    
<div>
<label htmlFor="coupon" className="flex flex-col text-left font-bold text-3xl">
      Coupon Code
      <div className='flex flex-row'>
        
      <input type="text" id="coupon" className="border-2 p-2 mt-1 w-fit" />
      <button className='text-md font-thin text-xl text-white border-2 rounded-md bg-teal-500 w-fit'>
        Apply
      </button>
      </div>
    </label>
</div>
<div className='text-left'>
    <h1 className='text-2xl font-bold'>Total Bill</h1>
    <div className=' border-2'>
    <div className='flex flex-row'>
    <div>
        <h1>Cart Subtotal</h1>
        <h1>Shipping Charge</h1>
    </div>
    <div>
        <h1>$120.00</h1>
        <h1>$0.00</h1>
    </div>
    </div>

    <hr class="border-gray-300 p-5" />
   <div className='flex flex-row gap-10'>
   <h1>Total</h1>
   <h1>$250.00</h1>
   </div>
     </div>
</div>
</div>
<button className='rounded-md  bg-teal-500 w-fit h-10'>
    Order Now
</button>
    </div>
  )
}

export default Cart
