import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
    return (

        <header className='w-screen p-5 flex items-center justify-center border-b border-b-slate-600  bg-slate-900 gap-3'>
            <img src={logo} alt='logo' className='w-12' />
            <h1 className='text-white text-2xl font-bold'>Crypto Tracker</h1>
        </header>

    )
}

export default Header