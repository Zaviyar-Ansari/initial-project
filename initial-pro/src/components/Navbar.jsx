import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 h-12 w-full relative">
        <div className='absolute pt-2.5 pl-5'>
        <select className='bg-gray-800 text-white' name="cars" id="cars">
  <option value="volvo">English</option>
  <option value="saab">Spanich</option>
  <option value="mercedes">German</option>
  <option value="audi">Italion</option>
</select>
        </div>
        <div className='text-center text-white 	font-family: ui-sans-serif text-3xl py-0.5		'>
            <h1>LOGO</h1>
        </div>
</nav>

    </div>
  )
}

export default Navbar
