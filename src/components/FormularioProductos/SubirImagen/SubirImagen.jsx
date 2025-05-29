import React from 'react';
import './SubirImagen.scss'; 

const SubirImagen = ({ icono, id, modo }) => {
  console.log("Modo:", modo);
  return(
    <>
      {modo === "EditarProducto" ? 
        <div className="subir-imagen-editar" >
          <img src={icono} alt="" />
        </div>
      :
      <div className="subir-imagen">
        <img src={icono} alt="Icono" />
        <span className='estilo-letra'>Arrastra la imagen a esta zona
          </span>
        <span className='estilo-letra'>o</span>
        <input type="file" id={id} name={id} />
        <label htmlFor={id} className="btn-file">Seleccionar imagen</label>
      </div>
      }
    </>
  );
};

export default SubirImagen;
