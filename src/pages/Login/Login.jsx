import "./Login.scss"

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
                        <p className="registro">Registrarme</p>
                        <p className="olvide-contraseña">Olvide mi contraseña</p>
                </div>
           
            </div>
        </div>
    );
}

export default Login;