import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header.jsx"
import Main from "./components/main/Main.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
