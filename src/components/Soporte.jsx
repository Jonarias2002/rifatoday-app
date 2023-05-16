<<<<<<< HEAD
import React from 'react'
import { HeadsetHelp } from 'iconoir-react'

function Soporte() {
    return (
        <div className='Container vh-100 bg-info-subtle p-2'>
            <div className='grid text-center p-3'>
                <HeadsetHelp 
                height={200}
                width={200}
                />
            </div>
        </div>
    )
}

=======
import React from 'react'
import { HeadsetHelp, Phone, Mail, ChatBubbleEmpty } from 'iconoir-react'

function Soporte() {
    return (
        <div className='Container vh-100 bg-info-subtle  p-2'>
            <div className='grid text-center'>
                <div className='row p-3'>
                    <HeadsetHelp 
                    height={200}
                    width={200}
                    />
                </div>
                <div className='row d-flex justify-content-center'>
                <div className='row p-4'>
                    <div className='col-6 col-sm-3'>
                        <Phone />
                        <button type="button" className="btn btn-success">Success</button>
                    </div>
                </div>
                <div className='row p-3'>
                    <div className='col-6 col-sm-3'>
                        <Mail />
                        <button type="button" className="btn btn-success">Success</button>
                    </div>
                </div>
                <div className='row p-3'>
                    <div className='col-6 col-sm-3'>
                        <ChatBubbleEmpty />
                        <button type="button" className="btn btn-success">Success</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

>>>>>>> ea4a54eb884d8a93e777db457fc15644ddf98d4a
export default Soporte