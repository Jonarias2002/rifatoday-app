import React from 'react'
import { HeadsetHelp, Phone, Mail, ChatBubbleEmpty } from 'iconoir-react'

function Soporte() {
    return (
        <div className='Container vh-100 bg-info-subtle p-2'>
            <div className='grid text-center p-3'>
                <HeadsetHelp 
                height={200}
                width={200}
                />
            </div>
            <div className='row p-4'>
                <Phone />
                <button type="button" className="btn btn-success">Success</button>
            </div>
            <div className='row p-3'>
                <Mail />
                <button type="button" className="btn btn-success">Success</button>
            </div>
            <div className='row p-3'>
                <ChatBubbleEmpty />
                <button type="button" className="btn btn-success">Success</button>
            </div>
        </div>
    )
}

export default Soporte