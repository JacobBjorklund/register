import style from '../styles/home.module.css'
import { Inter } from 'next/font/google'
import register from '@/components/register/register'
import login from '@/components/login/login'
import { log } from 'console'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    function runLog() {
        console.log('hej')
    }

    return (
        <div className='flex h-screen items-center justify-center flex-col'>
            <h1>Links</h1>
            <link rel="stylesheet" href="/register" />
            <link rel="stylesheet" href="/login" />
        </div>
    )
}
