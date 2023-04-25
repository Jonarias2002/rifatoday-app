import React from 'react'

function Menu() {
    return (
        <nav className='container-fluid fixed-bottom text-center bg-body-secondary rounded-top' aria-label="breadcrumb">
            <ol className="nav nav-tabs row row-cols-auto align-items-end justify-content-center p-1">
                <li className="col nav-item">
                    <a className='nav-link' href="#"><ion-icon name="person-sharp"></ion-icon></a>
                </li>
                <li className="col nav-item">
                    <a className='nav-link' href="#"><ion-icon name="videocam-sharp"></ion-icon></a>
                </li>
                <button type="button" className="col btn rounded-circle border border-black border-3 mb-2">
                <ion-icon name="cash-sharp"></ion-icon>
                
                </button>
                <li className="col nav-item">
                    <a className='nav-link' href="#"><ion-icon name="ticket-sharp"></ion-icon></a>
                </li>
                <li className="col nav-item">
                    <a className='nav-link' href="#"><ion-icon name="cog-sharp"></ion-icon></a>
                </li>
            </ol>
        </nav>
    ) 
}

export default Menu