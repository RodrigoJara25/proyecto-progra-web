import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import productoApi from './api/ProductosApi'
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


function App() {
  
    const [lista_productos, setLista_Productos] = useState(() => {
      return productoApi.obtenerProductos();
    });

    useEffect(() => {
      productoApi.guardarProductos(lista_productos);
    }, [lista_productos]);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<TablaProductos productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/agregar" element={<AgregarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/editar/:id" element={<EditarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/" element={<DashboardAdmin/>} />
          <Route path="/carrito" element={<CarroCompras lista_productos={lista_productos} setLista_Productos={setLista_Productos}/>}/>
          <Route path="/agregarCategoria" element={<AgregarCategoria />}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/products" element={<ViewProducts/>}/>
          <Route path="/registro" element={<Register />} />
          <Route path="/olvide-contraseña" element={<Password />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
