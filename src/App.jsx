import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import ListaUs from './pages/ListaUs/ListaUs'
import DetalleUs from './pages/DetalleUs/DetalleUs'
import DetalleOrd from './pages/DetalleOrd/DetalleOrd'
import Inicio from './pages/Inicio/Inicio'
import DetalleP from './pages/DetalleP/DetalleP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Inicio/>
      <Footer/>
    </>
  )
}

export default App
