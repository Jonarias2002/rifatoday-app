import React from 'react'
import { Settings, Movie, UserCart, HomeUser, Dollar } from 'iconoir-react'

function Menu() {
    return (
        <nav className='container-fluid fixed-bottom text-center bg-body-secondary rounded-top' aria-label="breadcrumb">
            <ol className="nav nav-tabs row row-cols-auto align-items-end justify-content-center p-1">
                <li className="col nav-item">
                    <a className='nav-link' href="#"><HomeUser/></a>
                </li>
                <li className="col nav-item">
                    <a className='nav-link' href="#"><Movie/></a>
                </li>
                <button type="button" className="col btn rounded-circle border border-black border-3 mb-2">
                    <Dollar/>
                </button>
                <li className="col nav-item">
                    <a className='nav-link' href="#"><UserCart/></a>
                </li>
                <li className="col nav-item">
                    <a className='nav-link' href="#"><Settings /></a>
                </li>
            </ol>
        </nav>
    ) 
}

export default Menu