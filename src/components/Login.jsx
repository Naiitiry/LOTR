import './Login.css'
const Login = () =>{

    return(
        <div className="login-container">
            <div className="row">
                {/*Columna de 4 celdas para formulario*/}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card-body">
                            <form>
                                <input type="text" placeholder="ingrese mail" />
                                <input type="pass" placeholder="ingrese contraseña"/>
                                <button>Registrarse</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/*Columna de 8 celdas para formulario*/}
                <div className="col-md-8">
                    <div className="tamanio-imagen">

                    </div>
                </div>
            </div>
        </div>
    )
}
export {Login}