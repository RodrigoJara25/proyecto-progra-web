import "./Login.scss"
import {Link} from 'react-router-dom'

function Login() {

    return (
        <div className="login">
            <div className="login-card">
                <h2>Iniciar sesion</h2>
                
                
                <div className="correo">
                    <p>Correo</p>
                    <input type="text" placeholder="usuario@gmail.com"/>
                </div>
               
                <div className="password">
                    <p>Contraseña</p>
                    <input type="password" placeholder="Contraseña"/>
                </div>
                
                <button className="bot Iniciar Sesion">Iniciar sesión</button>
                
                <div className="enlaces">
                        <Link to="/registro" className="registro">Registrame</Link>
                        <Link to="/olvide-contraseña" className="olvide-contraseña">Olvidé mi contraseña</Link>
                </div>
           
            </div>
        </div>
    );
}

export default Login;