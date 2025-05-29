import "./CarroCompras.scss";
import polloImg from "../../../public/assets/Pollo.png";
import deleteImg from "../../../public/assets/delete2.png";

const CarroCompras = (lista_productos, setLista_Productos) => {

    return (
        <>

            <div className="carro-compras">
                <div className="carro">
                    <div className="titulo">
                        <h1>Compra</h1>
                        <p>(10 productos)</p>
                    </div>
                    <div className="productos-carrito">
                        <div className="descripcion-compra">
                            <button className="boton-check" >✔</button>
                            <img src={polloImg} alt="img" srcset="" />
                            <div className="nombre-producto">
                                <p>
                                    <b>Pollo</b>
                                </p>
                                <span className="presentacion">Presentacion:</span>
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
                    </div>
                </div>
                <div className="resumen-compra">
                    <h1 className="titulo-resumen">Resumen de la compra</h1>
                    <div className="contenedor-compra">
                        <div className="precio">
                            <p className="left">Productos (10) </p>
                            <p> S/119.00</p>
                        </div>
                        <div className="precio">
                            <p className="left">Delivery </p>
                            <span className="oferta"> GRATIS </span>
                        </div>
                        <div className="precio">
                            <p className="left">Descuentos </p>
                            <span className="cantidad-descuento"> -S/9.00</span>
                        </div>
                        <div className="total">
                            <p className="left"><b>Total</b> </p>
                            <p>S/100.00</p>
                        </div>
                        <button className="continuar-compra">Continuar compra</button>
                    </div>
                </div>

            </div>   
        
        </>
    )
}

export default CarroCompras;