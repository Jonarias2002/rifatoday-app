import React from 'react'

function Nabvar() {
    return (
        <nav className='bg-body-secondary'>
            <div className='d-flex justify-content-between'>
                <div className='p-3'>
                    <button type="button" className="btn btn-lg btn-dark">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>
                </div>
                <div className='p-3'>
                    <p>UserName</p>
                </div>
                <div className='p-3 m-2'>
                    <button type="button" className="btn btn-outline-warning position-relative">
                        <ion-icon name="notifications-outline"></ion-icon>
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

export default Nabvar