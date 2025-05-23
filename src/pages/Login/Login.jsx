import "./Login.scss"

function Login() {

    return (
        <div className="login">
            <div className="login-card">
                <h2>Iniciar sesion</h2>
                <div className="correo">
                    <p>Correo</p>
                    <input type="text" placeholder="usuario@gmail.com2"/>
                </div>
                <div className="password">
                    <p>Contraseña</p>
                    <input type="password" placeholder="Contraseña"/>
                </div>
            </div>
        </div>
    );
}

export default Login;