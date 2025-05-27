import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import "./FormProduct.scss";
import SubirImagen from "../SubirImagen/SubirImagen";


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
              <FormGroup label="Categoría" htmlFor="categoria">
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  required
                  placeholder="Seleccione la categoría del producto"
                  defaultValue={producto.categoria || ""}
                />
              </FormGroup>

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
              <SubirImagen icono={iconoImg} id="archivo" />

              <div className="stockproducto">
                <FormGroup label="Stock" htmlFor="stock">
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    required
                    min={0}
                    placeholder="Stock"
                    defaultValue={producto.stock || 0}
                  />
                </FormGroup>
                <button type="submit">
                  {modo === "EditarProducto" ? "Editar producto" : "Agregar Producto"}
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
