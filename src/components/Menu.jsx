import React from 'react'
import { NavLink } from 'react-router-dom'
import { Settings, Movie, UserCart, HomeUser, Dollar } from 'iconoir-react'

function Menu() {
    return (
        <nav className='container-fluid fixed-bottom text-center bg-body-secondary rounded-top' aria-label="breadcrumb">
            <ol className="nav row row-cols-auto align-items-end justify-content-center p-1">
                <li className="col nav-item">
                    <NavLink className='nav-link' to="/perfil"><HomeUser/></NavLink>
                </li>
                <li className="col nav-item">
                    <NavLink className='nav-link' to="/tutoriales"><Movie/></NavLink>
                </li>
                <NavLink className="col btn rounded-circle border border-black border-3 mb-2" to='/sorteos'>
                    <Dollar/>
                </NavLink>
                <li className="col nav-item">
                    <NavLink className='nav-link' to="/tickets"><UserCart/></NavLink>
                </li>
                <li className="col nav-item">
                    <NavLink className='nav-link' to="/soporte"><Settings /></NavLink>
                </li>
            </ol>
        </nav>
    ) 
}

export default Menu