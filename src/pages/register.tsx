import React from 'react'

const register = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <form action="/register">
                <div>
                    <h1>Register</h1>
                    <h2>Email</h2>
                    <input type="text" />
                    <h2>Password</h2>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default register