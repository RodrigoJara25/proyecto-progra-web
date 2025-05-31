import "./CarroCompras.scss";
import polloImg from "../../../public/assets/Pollo.png";
import deleteImg from "../../../public/assets/delete2.png";
import ResumenCompra from "./ResumenCompra";

const CarroCompras = ({lista_productos}, setLista_Productos) => {
  console.log("¿Es array?", Array.isArray(lista_productos)); // ahora debe dar true

    return (
        <>
            <div className="carro-compras">
                <div className="carro">
                    <div className="titulo">
                        <h1>Compra</h1>
                        <p>(10 productos)</p>
                    </div>
                    
                    <div className="productos-carrito">
                        {lista_productos.map((producto)=> (
                            <div className="descripcion-compra">                                
                                <button className="boton-check" >✔</button>
                                <img src={producto.img} alt="img" />
                                <div className="nombre-producto">
                                    <p>
                                        <b>{producto.nombre}</b>
                                    </p>
                                    <span className="presentacion">Presentacion: {producto.presentacion}</span>
                                    <span className="estilo-llegada">Llega mañana</span>
                                </div>
                                <div className="precio">
                                    <h2>S/20.65</h2>
                                    <div className="aumentar-cantidad">
                                        <span className="cantidad">Cantidad</span>
                                        <button className="operacion">+</button>
                                        <p>2</p>
                                        <button className="operacion">-</button>
                                        <img src={deleteImg} alt="eliminar" className="eliminar" />
                                    </div>
                                </div>
   
                            </div>
                        ))
                        }   
                    </div>
                </div>
                <ResumenCompra/>
            </div>           
        </>
    )
}

export default CarroCompras;