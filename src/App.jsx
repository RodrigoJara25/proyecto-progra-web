import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ListadoProducto from './pages/ListadoProducto/ListadoProducto'
import AgregarProducto from './components/AgregarProducto/AgregarProducto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AgregarProducto/>
    </>
  )
}

export default App
