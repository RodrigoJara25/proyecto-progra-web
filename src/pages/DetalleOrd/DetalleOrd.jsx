import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./DetalleOrd.scss";
// Quitar importaciones de imágenes de ejemplo si aún existen
// import manzana from "../../assets/manzanas.png"; 
// ...etc...
import ordenesEjemplo from '../../api/ordenesData'; // Ruta corregida

// function DetalleOrd({ listaOrdenes }) { // Ya no recibe props
function DetalleOrd() {
    const { idOrden } = useParams();
    const [orden, setOrden] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Paginación de productos en la orden
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Productos por página, similar a la maqueta

    useEffect(() => {
        setLoading(true);
        setError(null);
        // if (listaOrdenes && listaOrdenes.length > 0) { // Ya no se usa la prop
        if (ordenesEjemplo && ordenesEjemplo.length > 0) { // Usar los datos importados
            // const ordenEncontrada = listaOrdenes.find(o => o.id === idOrden);
            const ordenEncontrada = ordenesEjemplo.find(o => o.id === idOrden);
            if (ordenEncontrada) {
                setOrden(ordenEncontrada);
            } else {
                setError('Orden no encontrada.');
            }
        } else {
            // Esto podría pasar si listaOrdenes aún no se ha cargado o está vacía
            setError('No hay órdenes disponibles para mostrar.'); 
        }
        setLoading(false);
    // }, [idOrden, listaOrdenes]); // Ya no depende de listaOrdenes
    }, [idOrden]); // Solo depende de idOrden (ordenesEjemplo es constante)

    if (loading) {
        return <div className="detalle-orden-container loading">Cargando detalles de la orden...</div>;
    }

    if (error) {
        return <div className="detalle-orden-container error">Error: {error}</div>;
    }

    if (!orden) {
        // Este caso podría darse si listaOrdenes está vacía y no se encontró nada.
        return <div className="detalle-orden-container error">No se pudo cargar la información de la orden.</div>;
    }

    // Lógica de paginación para productos
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = orden.productos ? orden.productos.slice(indexOfFirstItem, indexOfLastItem) : [];
    const totalPages = orden.productos ? Math.ceil(orden.productos.length / itemsPerPage) : 0;

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    
    // Para generar los números de página visibles (ej: 1 2 ... 5 6 7 ... 9 10)
    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 7) { // Mostrar todos si son 7 o menos
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pageNumbers.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage > totalPages - 4) {
                pageNumbers.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pageNumbers;
    };

    return (
        <div className="detalle-orden-page">
            <div className="breadcrumb-container">
                <Link to="/pagina-principal">Mis Órdenes</Link> &gt; <span>Detalles de Órden</span>
            </div>
            
            <div className="order-details-card">
                <div className="order-header">
                    <div>
                        <h1 className="order-title">Orden <span className="order-id-main">#{orden.id}</span></h1>
                    </div>
                    <div className="order-summary">
                        <div className="order-status">
                            <span className="status-label">Estado:</span>
                            {/* Aplicar clase condicional para el estado */}
                            <span className={`status-value status-${orden.estado.toLowerCase().replace(' ', '-')}`}>{orden.estado}</span> 
                        </div>
                        <div className="total-amount">
                            <span className="total-label">Monto total:</span>
                            S/{orden.total.toFixed(2)}
                        </div>
                    </div>
                </div>

                <div className="products-section">
                    <h3 className="products-title">Productos ordenados</h3>
                    
                    {currentProducts.length > 0 ? (
                        <table className="products-table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((producto) => (
                                    <tr key={producto.idProd} className="product-row">
                                        <td>
                                            <div className="product-info-cell">
                                                <img 
                                                    src={producto.imagen || '/img/placeholder.png'} // Usa placeholder si no hay imagen
                                                    alt={producto.nombre} 
                                                    className="product-image-table" // Nueva clase para la imagen en tabla
                                                />
                                                <span className="product-id-table">#{producto.idProd}</span>
                                            </div>
                                        </td>
                                        <td className="product-name-table">{producto.nombre}</td>
                                        <td><span className="category-tag">{producto.categoria}</span></td>
                                        <td className="quantity-table">{producto.cantidad}</td>
                                        <td className="price-table">S/{producto.total.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hay productos en esta orden.</p>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="pagination-products">
                        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="pagination-arrow">
                            &#x2190; {/* Flecha izquierda */}
                        </button>
                        {getPageNumbers().map((number, index) => (
                            <button 
                                key={index} 
                                onClick={() => typeof number === 'number' && paginate(number)} 
                                className={`pagination-number ${currentPage === number ? 'active' : ''} ${typeof number !== 'number' ? 'disabled-dots' : ''}`}
                                disabled={typeof number !== 'number'}
                            >
                                {number}
                            </button>
                        ))}
                        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-arrow">
                            &#x2192; {/* Flecha derecha */}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetalleOrd;