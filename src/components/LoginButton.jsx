import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    return (
        <div className='text-center py-5'>
            <button type="button" className="btn btn-lg btn-dark" onClick={() => loginWithRedirect()}>Entrar</button>
        </div>
    )
}

export default LoginButton
