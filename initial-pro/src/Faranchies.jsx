import React from 'react'

const Faranchies = () => {
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



    <div class="w-full relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">

<div class="relative w-full h-80 md:h-96 min-h-[300px]" data-carousel-inner>
   
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            class="object-cover w-full h-full" alt="Slide 1" />
        <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            class="object-cover w-full h-full" alt="Slide 2" />
    </div>
  
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            class="object-cover w-full h-full" alt="Slide 3" />
    </div>
</div>

<div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
</div>

<button type="button"
    class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
    data-carousel-prev>
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
</button>
<button type="button"
    class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
    data-carousel-next>
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
</button>
</div>

<p class="mt-5 text-center text-gray-700 dark:text-gray-300">
This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
by going to the official
<a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
    target="_blank">
    Flowbite Documentation
</a>.
</p>
<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>


<section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
          <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Section (Left) */}
            <div className="rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                <p className="mt-1 text-gray-600">Sunday: Closed</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                <p className="mt-1 text-gray-600">Email: info@example.com</p>
                <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
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




    <div class="w-full relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">

<div class="relative w-full h-80 md:h-96 min-h-[300px]" data-carousel-inner>
   
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            class="object-cover w-full h-full" alt="Slide 1" />
        <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            class="object-cover w-full h-full" alt="Slide 2" />
    </div>
  
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            class="object-cover w-full h-full" alt="Slide 3" />
    </div>
</div>

<div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
    <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
</div>

<button type="button"
    class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
    data-carousel-prev>
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
</button>
<button type="button"
    class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
    data-carousel-next>
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
</button>
</div>

<p class="mt-5 text-center text-gray-700 dark:text-gray-300">
This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
by going to the official
<a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
    target="_blank">
    Flowbite Documentation
</a>.
</p>
<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>


<section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
          <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Section (Left) */}
            <div className="rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                <p className="mt-1 text-gray-600">Sunday: Closed</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                <p className="mt-1 text-gray-600">Email: info@example.com</p>
                <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
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
