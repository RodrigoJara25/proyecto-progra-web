import React from 'react';
import './SubirImagen.scss'; 

const SubirImagen = ({ icono, id, modo }) => {
  console.log("Modo:", modo);
  return(
    <>
      {modo === "EditarProducto" ? 
        <div className="subir-imagen-editar" style={{ backgroundImage: `url(${icono})` }}>
        </div>
      :
      <div className="subir-imagen">
        <img src={icono} alt="Icono" />
        <p>Arrastra la imagen a esta zona</p>
        <p>o</p>
        <input type="file" id={id} name={id} />
        <label htmlFor={id} className="btn-file">Seleccionar imagen</label>
      </div>
      }
    </>
  );
};

export default SubirImagen;
