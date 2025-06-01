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
import MetodoPago from './pages/MetodoPago/MetodoPago'
import PagoQR from './pages/PagoQR/PagoQR'
import SelectorMetodoPago from './components/SelectorMetodoPago/SelectorMetodoPago'
import PagoTarjeta from './pages/PagoTarjeta/PagoTarjeta'
import OrdenCompletada from './pages/OrdenCompletada/OrdenCompletada'

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
        <Routes>
          <Route path="/" element={<Inicio />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<TablaProductos productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/agregar" element={<AgregarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/editar/:id" element={<EditarProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos} />} />
          <Route path="/carrito" element={<CarroCompras lista_productos={lista_productos} setLista_Productos={setLista_Productos}/>}/>
          <Route path="/Detalle-producto-admin/:id" element={<DetalleProducto lista_productos={lista_productos} setLista_Productos={setLista_Productos}/>}/>
          <Route path="/dashboard" element={<DashboardAdmin/>} />
          <Route path="/agregarCategoria" element={<AgregarCategoria />}/>
          <Route path="/products" element={<ViewProducts/>}/>
          <Route path="/registro" element={<Register />} />
          <Route path="/olvide-contraseña" element={<Password />} />
          <Route path="/detail-order" element={<DetalleOrd />} />
          <Route path="/detail-user" element={<DetalleUs />} />
          <Route path="/list-users" element={<ListaUs />} />
          <Route path="/detail-product" element={<DetalleP />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/metodoPago" element={<MetodoPago />}>
            <Route index element={<SelectorMetodoPago />} />
            <Route path="qr" element={<PagoQR />} />
            <Route path="tarjeta" element={<PagoTarjeta />} />
          </Route>
          <Route path="/OrdenCompletada" element={<OrdenCompletada/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
