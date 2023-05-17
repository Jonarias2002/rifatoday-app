import React from 'react'
import { HeadsetHelp, Phone, Mail, ChatBubbleEmpty } from 'iconoir-react'

function Soporte() {
    return (
        <div className='Container vh-100 bg-info-subtle'>
            <div className='grid text-center'>
                <div className='row p-3'>
                    <HeadsetHelp 
                    height={200}
                    width={200}
                    />
                </div>
                <div className='grid justify-content-center'>
                    <div className="row">
                        <div className='col-6 col-sm-3'>
                            <Phone />
                            <button type="button" className="btn btn-success">Success</button>
                        <div/>
                    </div>
                    <div className="row">
                        <div className='col-6 col-sm-3'>
                            <Mail />
                            <button type="button" className="btn btn-success">Success</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-6 col-sm-3'>
                            <ChatBubbleEmpty />
                            <button type="button" className="btn btn-success">Success</button>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Soporte