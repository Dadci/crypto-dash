import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
    return (

        <header className='w-screen p-6 flex items-center justify-center  bg-slate-600 gap-3'>
            <img src={logo} alt='logo' className='w-12' />
            <h1 className='text-white text-2xl font-bold'>Crypto Tracker</h1>
        </header>

    )
}

export default Header