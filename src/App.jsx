import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ListadoProducto from './pages/ListadoProducto/ListadoProducto'
import AgregarProducto from './components/AgregarProducto/AgregarProducto'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <AgregarProducto/>
      <Footer/>
    </>
  )
}

export default App
