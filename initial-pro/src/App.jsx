import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Faranchies from './Faranchies'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Product></Product>
      <Footer></Footer>
    </>
  )
}

export default App
