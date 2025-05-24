import "./tablaProductos.scss" 
import producto1 from '/assets/producto1.jpg';
import edit from '/assets/editar.png';
import borrar from '/assets/delete.png';

const TablaProductos = ({productos}) => {
    
    return (
    <div className="container-main">
        <h2>Listado de productos</h2>
        <div className="busqueda">
            <input type="text" placeholder="Buscar un producto..." />
            <div className="botones">
                <button id="Buscar" className="Buscar">Buscar</button>
                <button id="Categorias" className="Categorias">Categorias</button>
                <button id="Agregar" className="Agregar">Agregar producto</button>
            </div>
        </div>
        <div className="lista-producto">
            <table className="tabla-productos">
                <thead>
                    <tr className="titulo">
                        <th> </th>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Presentación</th>
                        <th>Descripción</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {
                        productos.map((producto) => (
                                <tr className="productos">
                                    <td><img src= {producto1} alt="producto1" /></td>
                                    <td>{producto.id}</td>
                                    <td> {producto.nombre}</td>
                                    <td> {producto.presentacion}</td>
                                    <td> {producto.descripcion}</td>
                                    <td><b>{producto.categoria}</b></td>
                                    <td>{producto.stock}</td>
                                    <td>
                                        <img src={edit} className="icono3" alt="Botón" />
                                        <img src={borrar} className="icono3" alt="Botón" />                       
                                    </td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>  
        </div>
        <div className="paginacion">
            <button className="anterior">1</button>
            <button className="siguiente">2</button>    
        </div> 
    </div>
    );
};

export default TablaProductos;