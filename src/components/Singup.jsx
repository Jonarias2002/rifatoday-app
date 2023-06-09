import React from 'react'
import { Facebook, Google } from 'iconoir-react'

export default function Singup() {
    return (
        <section className="container">
            <div className='grid text-center'>
                <div className="row p-5">
                    <h1>
                        <span>
                        <em>Bienvenido a</em>
                        <br />
                        </span>
                        <span className='fw-bold'>RIFATODAY</span>
                    </h1>
                </div>
                <div className="grid justify-content-center p-2">
                    <div className='p-3'>
                        <button type="button" className="shadow btn bg-success btn-lg rounded w-25">Ingresa con Correo Electronico</button>
                    </div>
                    <div className='p-3'>
                        <button type="button" className="shadow btn btn-primary btn-lg rounded w-25"><Facebook />Entra con Facebook</button>
                    </div>
                    <div className='p-3'>
                        <button type="button" className="shadow btn btn-danger btn-lg rounded w-25"><Google/>Entra con Google</button>
                    </div>
                </div>
                <div className="grid justify-content-center p-2">
                    <div className='p-3'>
                        <button type="button" className="btn btn-lg btn-link bg-secondary-subtle link-body-emphasis">Registrate</button>
                    </div>
                    <div className='p-3'>
                        <button type="button" className="btn btn-lg btn-link bg-secondary-subtle link-body-emphasis w-25">¿Olvidaste tu contraseña?</button>
                    </div>
                </div>
            </div>
        </section>
        
    )
}