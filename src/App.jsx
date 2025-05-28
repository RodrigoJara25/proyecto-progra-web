import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import productoApi from './api/ProductosApi'
import { useState, useEffect } from 'react'
import Productos from './components/Productos/Productos'
import AgregarProducto from './pages/AgregarProducto/AgregarProducto'
import EditarProducto from './pages/EditarProducto/EditarProducto'
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin'

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
          <Route path="/editar/:id" element={<EditarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/dashboard" element={<DashboardAdmin/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
