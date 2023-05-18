import React from 'react'
import { HeadsetHelp, Phone, Mail, ChatBubbleEmpty } from 'iconoir-react'

function Soporte() {
    return (
        <div className='Container vh-100 bg-info-subtle  p-2'>
            <div className='row text-center'>
                <div className='row p-3'>
                    <HeadsetHelp 
                    height={200}
                    width={200}
                    />
                </div>
                <div className='row justify-content-center p-3'>
                    <div className=''>
                        <Mail />
                        <button type="button" className="btn btn-success w-25 m-2">ENVIANOS UN WHATSAPP</button>
                    </div>
                </div>
                <div className='row justify-content-center p-3'>
                    <div className=''>
                        <ChatBubbleEmpty />
                        <button type="button" className="btn btn-success w-25 m-2">ENVIANOS UN EMAIL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soporte