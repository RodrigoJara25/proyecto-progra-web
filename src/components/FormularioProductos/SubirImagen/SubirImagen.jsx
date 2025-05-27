import React from 'react';
import './SubirImagen.scss'; 

const SubirImagen = ({ icono, id }) => (
  <div className="subir-imagen">
    <img src={icono} alt="Icono" />
    <p>Arrastra la imagen a esta zona</p>
    <p>o</p>
    <input type="file" id={id} name={id} />
    <label htmlFor={id} className="btn-file">Seleccionar imagen</label>
  </div>
);

export default SubirImagen;
