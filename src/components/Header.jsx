import React from 'react'
import { Bell, ArrowLeft } from 'iconoir-react'

function Header() {
    return (
        <nav className='container-fluid bg-body-secondary'>
            <div className='d-flex justify-content-between'>
                <div className='p-3'>
                    <button type="button" className="btn btn-lg btn-dark">
                        <ArrowLeft />
                    </button>
                </div>
                <div className='p-3'>
                    <p>UserName</p>
                </div>
                <div className='p-3 m-2'>
                    <button type="button" className="btn btn-outline-warning position-relative">
                        <Bell />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header