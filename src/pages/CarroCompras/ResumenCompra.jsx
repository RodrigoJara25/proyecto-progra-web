import "./ResumenCompra.scss"

const ResumenCompra=({Style}) =>{
    return(
   <>
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
    </>
    )
}
export default ResumenCompra;