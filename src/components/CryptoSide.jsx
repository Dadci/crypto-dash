import React from 'react'

const CryptoSide = ({ data, toggleInfo }) => {
    return (
        <div className='w-full bg-slate-700 rounded-lg text-white grid grid-cols-3 place-items-center p-6 gap-4 '>

            {data.map((crypto, index) => {
                return (
                    <div key={index} className='w-full flex flex-col items-center p-4 border-2 border-slate-400 cursor-pointer hover:bg-slate-600 rounded-lg' onClick={() => toggleInfo(crypto)}>
                        <div className='flex flex-col items-center gap-2'>
                            < img src={crypto.image} alt={crypto.name} className='w-12 hover:scale-105' />
                            <h1 className='text-lg font-bold'>{crypto.name}</h1>
                        </div>

                    </div >
                )

            }
            )}
        </div >
    )
}

export default CryptoSide