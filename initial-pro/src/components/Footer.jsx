import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-500 mt-32 px-20 h-64">
      <div className="w-full py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    
          {/* Logo Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">LOGO</h1>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
            <div className="flex mt-4">
              <input type="search" placeholder="Enter your Email" className="text-center border p-1" />
              <button className="bg-teal-400 h-10 px-3">Hi</button>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p className="mt-2">25950 Long Lane, North Ismael 14280</p>
            <p>00965 96659986</p>
            <p>Jermeni.Connelly@yahoo.com</p>
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>

          {/* Links Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Links</h1>
            <p className="mt-2">About Us</p>
            <p>Contact Us</p>
            <p>Our Menu</p>
            <p>Team</p>
            <p>FAQ</p>
          </div>

          {/* Gallery Section */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Gallery</h1>
            <div className="grid grid-cols-3 gap-0 mt-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMkgVeaXgPDa2i4DjNslL-x8dWSBzG11hE3VbM5T6t7POPAQfKaRbL7WjHQ&s" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMkgVeaXgPDa2i4DjNslL-x8dWSBzG11hE3VbM5T6t7POPAQfKaRbL7WjHQ&s" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMkgVeaXgPDa2i4DjNslL-x8dWSBzG11hE3VbM5T6t7POPAQfKaRbL7WjHQ&s" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMkgVeaXgPDa2i4DjNslL-x8dWSBzG11hE3VbM5T6t7POPAQfKaRbL7WjHQ&s" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMkgVeaXgPDa2i4DjNslL-x8dWSBzG11hE3VbM5T6t7POPAQfKaRbL7WjHQ&s" alt="Gallery" className="w-full h-auto rounded-md" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMkgVeaXgPDa2i4DjNslL-x8dWSBzG11hE3VbM5T6t7POPAQfKaRbL7WjHQ&s" alt="Gallery" className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
