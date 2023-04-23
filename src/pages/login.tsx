import React from 'react'
import style from '../styles/home.module.css'
const login = () => {
    return (
        <div className='jes h-screen flex justify-center items-center flex-col'>
            <form action="/login">
                <h1>Login</h1>
                <h2>Email</h2>
                <input type="text" />
                <h2>Password</h2>
                <input type="text" />
                <button className='p-5'>Register</button>
            </form>
        </div>
    )
}

export default login