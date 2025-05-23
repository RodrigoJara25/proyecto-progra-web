import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ListadoProducto from './pages/ListadoProducto/ListadoProducto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ListadoProducto/>
    </>
  )
}

export default App
