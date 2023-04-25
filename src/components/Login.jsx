import React from 'react'

function Login() {
    return (
        <section className='container-lg'>
            <div className='d-flex justify-content-between'>
                <div className='p-4'>
                    <button type="button" className="btn btn-lg btn-dark"><ion-icon name="arrow-back-outline"></ion-icon></button>
                </div>
                <div className='p-4'>
                    <p><a href="#" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">¿Olvidaste tu contraseña?</a></p>
                </div>
            </div>
            <div className='row text-center'>
                <div className="p-5">
                    <h1>
                        <span>
                        <em>Bienvenido de nuevo</em>
                        <br />
                        </span>
                        <span className='fw-bold'>a RIFATODAY</span>
                    </h1>
                </div>
                <div className='row justify-content-center'>
                    <div className="input-group-lg w-50 pt-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" className="form-control bg-secondary-subtle"></input>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className="input-group-lg w-50 pt-2">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="text" className="form-control bg-secondary-subtle"></input>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <button type="button" className="btn btn-lg btn-dark">Entrar</button>
                </div>
            </div>
        </section>
    )
}

export default Login