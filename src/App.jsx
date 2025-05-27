import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import productoApi from './api/ProductosApi'
import { useState, useEffect } from 'react'
import Productos from './components/Productos/Productos'
import AgregarProducto from './pages/AgregarProducto/AgregarProducto'

function App() {
  
  const [lista_productos, setLista_Productos] = useState([]);

  useEffect(() => {
    const productos = productoApi.obtenerProductos();
    setLista_Productos(productos);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Productos lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/agregar" element={<AgregarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
