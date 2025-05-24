import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AgregarProducto from './pages/AgregarProducto/AgregarProducto'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import TablaProductos from './components/TablaProductos/TablaProductos'
import Productos from './components/Productos/Productos'
import ViewProducts from './pages/ViewProducts/ViewProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <ViewProducts/>
      <Footer/>
    </>
  )
}

export default App
