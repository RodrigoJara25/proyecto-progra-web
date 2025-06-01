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
import DetalleOrd from './pages/DetalleOrd/DetalleOrd'
import DetalleUs from './pages/DetalleUs/DetalleUs'
import ListaUs from './pages/ListaUs/ListaUs'
import Inicio from './pages/Inicio/Inicio'
import DetalleP from './pages/DetalleP/DetalleP'
import Experiencias from './pages/Experiencias/Experiencias'
import MantenimientoExperiencias from './components/MantenimientoExperiencias/MantenimientoExperiencias'
import AgregarExperiencia from './components/AgregarExperiencia/AgregarExperiencia'

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
          <Route path="/" element={<Inicio />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<TablaProductos productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/agregar" element={<AgregarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/editar/:id" element={<EditarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/dashboard" element={<DashboardAdmin/>} />
          <Route path="/carrito" element={<CarroCompras lista_productos={lista_productos} setLista_Productos={setLista_Productos}/>}/>
          <Route path="/agregarCategoria" element={<AgregarCategoria />}/>
          <Route path="/products" element={<ViewProducts/>}/>
          <Route path="/registro" element={<Register />} />
          <Route path="/olvide-contraseña" element={<Password />} />
          <Route path="/detail-order" element={<DetalleOrd />} />
          <Route path="/detail-user" element={<DetalleUs />} />
          <Route path="/list-users" element={<ListaUs />} />
          <Route path="/detail-product" element={<DetalleP />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/mant-experiencias" element={<MantenimientoExperiencias />} />
          <Route path="/agregar-experiencia" element={<AgregarExperiencia />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
