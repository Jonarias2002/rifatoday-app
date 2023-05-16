import React from 'react'
import { AddSelection } from 'iconoir-react'

function Sorteos() {
    return (
        <div className='Container vh-100 bg-info-subtle text-center'>
            <div className='grid p-3'>
                <button className='btn btn-light'>
                    <AddSelection 
                    height={150}
                    width={150}
                    />
                    <span className='row fw-bold text-primary'>Add item</span>
                </button>
                
            </div>
        </div>
    )
}

export default Sorteos