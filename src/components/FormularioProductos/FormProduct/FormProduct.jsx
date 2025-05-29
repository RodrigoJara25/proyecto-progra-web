import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import "./FormProduct.scss";
import SubirImagen from "../SubirImagen/SubirImagen";
import agregarImg from "../../../../public/assets/agregar.png"
import { Link } from "react-router-dom";

const FormProduct = ({ onSubmit, modo , producto = {}, iconoImg }) => {
  return (
    <div className="contenedor-main">
      <div className="agregarProducto">
        <h1>{modo === "EditarProducto" ? "Editar" : "Agregar producto"}</h1>
        <div className="formulario">
          <form onSubmit={onSubmit}>
            <div className="group-1">
              <FormGroup label="Nombre del producto" htmlFor="nombre">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Nombre del producto"
                  defaultValue={producto.nombre || ""}
                />
              </FormGroup>

              <FormGroup label="Presentación" htmlFor="presentacion">
                <input
                  type="text"
                  id="presentacion"
                  name="presentacion"
                  required
                  placeholder="Presentación"
                  defaultValue={producto.presentacion || ""}
                />
              </FormGroup>
              <div className="categorias-estilo">
                <FormGroup label="Categoría" htmlFor="categoria">
                  <select
                    id="categoria"
                    name="categoria"
                    required
                    defaultValue={producto.categoria || ""}>
                        <option value="" className="texto-categoria">Seleccione la categoria del producto</option>
                        <option value="frutas">Frutas</option>
                        <option value="verduras">Verduras</option>
                        <option value="lacteos">Lácteos</option>
                    </select>
                </FormGroup>

                {modo === "AgregarProducto" ?                  
                  <Link to="/agregarCategoria">
                  <div className="agregarCategoria">
                    <img src={agregarImg} alt="img3" />
                  </div>  
                  </Link>
                  : null
                }
                </div>

              <FormGroup label="Descripción" htmlFor="descripcion">
                <input
                  id="descripcion"
                  name="descripcion"
                  required
                  placeholder="Descripción del producto..."
                  defaultValue={producto.descripcion || ""}
                />
              </FormGroup>
            </div>

            <div className="group-2">
              <p>Imagen</p>
              <SubirImagen icono={iconoImg} id="archivo" modo = {modo}/>

              <div className="stockproducto">
                <FormGroup label="Stock" htmlFor="stock" style={{ width: "45%"}}>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    required
                    min={0}
                    placeholder="Stock"
                    defaultValue={producto.stock == null? 0 : producto.stock}
                  />
                </FormGroup>
                <button type="submit">
                    {modo === "EditarProducto" ? (
                        "Editar producto"
                      ) : (
                        <>
                          <img src={agregarImg}  alt="Agregar" /> Agregar producto
                        </>
                    )}
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
  );
};

export default FormProduct;
