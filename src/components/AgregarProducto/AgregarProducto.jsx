import "./agregarProducto.scss"
import iconoImg from '../../../public/assets/icono-img.png';

const AgregarProducto = () => {
    return(
        <>
        <div className="agregarProducto">
            <h1>Agregar producto</h1>
            <div className="formulario">
                <form>
                    <div className="group-1">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre del producto</label>
                                <input type="text" id="nombre" name="nombre" required placeholder="Nombre del producto"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="presentacion">Presentación</label>
                                <input type="text" id="presentacion" name="presentacion" required placeholder="Presentación"/>
                            </div>                    
                            <div className="form-group">
                                <label htmlFor="categoria">Categoría</label>
                                <input type="text" id="categoria" name="categoria" required placeholder="Seleccione la categoria del producto" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea id="descripcion" name="descripcion" required placeholder="Descripcion del producto..."></textarea>
                            </div>
                        </div>
                        <div className="group-2">
                            <p>Imagen</p>
                            <div className="subir-imagen">
                                <img src={iconoImg} alt="Icono"/>
                                <p>Arrastra la imagen a esta zona </p>
                                <p>o</p>
                                <input type="file" id="archivo"/>
                                <label for="archivo" class="btn-file">Seleccionar imagen</label>  
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock">Stock</label>
                                <input type="number" id="stock" name="stock" required min={0} />
                            </div>
                            <button type="submit">Agregar Producto</button>
                        </div>
                </form>
            </div>
            <div className="espacio"> </div>
        </div>
        </>
    );
};

export default AgregarProducto;