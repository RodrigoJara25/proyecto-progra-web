import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import apis from './api/ProductosApi';
import { useState, useEffect } from 'react'
import AgregarProducto from './pages/AgregarProducto/AgregarProducto'
import EditarProducto from './pages/EditarProducto/EditarProducto'
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin'
import CarroCompras from './pages/CarroCompras/CarroCompras'
import TablaProductos from './components/TablaProductos/TablaProductos'
import AgregarCategoria from './pages/AgregarCategoria/AgregarCategoria'
import ViewProducts from './pages/ViewProducts/ViewProducts'
import Register from './pages/Register/Register'
import Password from './pages/Password/Password'
import DetalleOrd from './pages/DetalleOrd/DetalleOrd'
import DetalleUs from './pages/DetalleUs/DetalleUs'
import ListaUs from './pages/ListaUs/ListaUs'
import Inicio from './pages/Inicio/Inicio'
import DetalleP from './pages/DetalleP/DetalleP'
import Checkout from './pages/Checkout/Checkout'
import DetalleProducto from './pages/DetalleProducto/DetalleProducto'
import Categorias from './pages/Categorias/Categorias'
import ListaOrd from './pages/ListaOrd/ListaOrd'

function App() {
  
  const productosApi= apis.productoApi;
  const [lista_productos, setLista_Productos] = useState(() => {
    return productosApi.obtenerProductos();
  });

  useEffect(() => {
    productosApi.guardarProductos(lista_productos);
  }, [lista_productos]);

    return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <DetalleP/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
