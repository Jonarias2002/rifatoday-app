import React from 'react'
import logoImg from '../assets/images.jpeg'
import { LockKey, Calendar, Phone, EmojiSatisfied } from 'iconoir-react'

function Perfil() {
    return (
        <div className='Container vh-100 bg-info-subtle p-2'>
            <div className='grid text-center p-3'>
                <img src={logoImg} className="rounded-circle" alt="..."></img>
                <div className='p-2'>
                    <button type="button" className="btn btn-secondary">Editar Foto</button>
                </div>
                <div className='pt-4'>
                    <EmojiSatisfied/>
                    <input className="form-control" type="text" placeholder="Nombre y apellido"></input>                                
                </div>
                <div className='pt-3'>
                    <Phone/>
                    <input className="form-control" type="number" placeholder="Telefono"></input>
                </div>
                <div className='pt-3'>
                    <LockKey />
                    <input className="form-control" type="password" placeholder="********"></input>
                </div>
                <div className='pt-3'>
                    <Calendar/>
                    <input className="form-control" type="date" placeholder="Default input"></input>
                </div>
                <div className='p-4'>
                    <button type="button" className="btn btn-lg btn-secondary">Actualizar</button>
                </div>
            </div>
        </div>
    )
}

export default Perfil