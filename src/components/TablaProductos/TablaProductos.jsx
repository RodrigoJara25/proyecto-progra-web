import "./tablaProductos.scss" 
import producto1 from '../../../public/assets/producto1.jpg';
import edit from '../../../public/assets/edit.png';
import borrar from '../../../public/assets/borrar.png';


const TablaProductos = () => {
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
                    <tr className="productos">
                        <td><img src= {producto1} alt="producto1" /></td>
                        <td>#123213</td>
                        <td> Uvas</td>
                        <td> 0,8kg</td>
                        <td> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?</td>
                        <td><b>Frutas y verduras</b></td>
                        <td>10</td>
                        <td>
                            <img src={edit} alt="Botón" />
                            <img src={borrar} alt="Botón" />                       
                        </td>
                    </tr>
                    <tr className="productos">
                        <td><img src={producto1} alt="producto1" /></td>   
                        <td>#123213</td>
                        <td> Uvas</td>  
                        <td> 0,8kg</td>
                        <td> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?</td>
                        <td><b>Frutas y verduras</b></td>
                        <td>10</td>
                        <td>
                            <img src={edit} alt="Botón" />
                            <img src={borrar} alt="Botón" />                       
                        </td>
                    </tr>
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