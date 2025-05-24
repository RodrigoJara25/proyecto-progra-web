import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AgregarProducto from './pages/AgregarProducto/AgregarProducto'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import TablaProductos from './pages/TablaProductos/TablaProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <TablaProductos/>
      <Footer/>
    </>
  )
}

export default App
