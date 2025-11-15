import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header.jsx"
import Hero from "./components/HomeHero/HomeHero.jsx"
import AllCarsSec from "./components/AllCarsSec/AllCarsSec.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <AllCarsSec />
      <Footer />
    </>
  )
}

export default App
