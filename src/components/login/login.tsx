import React from 'react'

const login = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <div>
                <h1>Login</h1>
                <h2>Email</h2>
                <input type="text" />
                <h2>Password</h2>
                <input type="text" />
            </div>
        </div>
    )
}

export default login