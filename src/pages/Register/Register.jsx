import './Register.scss'

function Register() {

 return (
    <div className='register'>

        <div className='register-card'>
            <h2>Registro</h2>

            <div className='fila-sector'>
            <div className='sector'>
              <p>Nombre</p>
              <input placeholder='Nombre del usuario' type="text" />
            </div>
            <div className='sector'>
              <p>Apellido</p>
              <input placeholder='Apellido del usuario' type="text" />
            </div>
            <div className='sector'>
              <p>Correo</p>
              <input placeholder='usuario@gmail.com' type="text" />
            </div>
            <div className='sector'>
              <p>DNI</p>
              <input placeholder='DNI' type="text" inputMode='numeric' pattern="[0-9]{8}" />
            </div>
            <div className='sector'>
              <p>Contraseña</p>
              <input placeholder='Contraseña' type="password" />
            </div>
            <div className='sector'>
              <p>Confirmar contraseña</p>
              <input placeholder='Contraseña' type="password" />
            </div>

            </div>
            
            <button className='boton-registrar'>Registrarme</button>
        </div> 


    </div>
 );
}

export default Register;