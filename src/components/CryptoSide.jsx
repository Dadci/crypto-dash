import React from 'react'

const CryptoSide = ({ data, toggleInfo }) => {
    return (
        <div className='w-full  col-span-2 text-white grid grid-cols-4 place-items-center px-10 gap-6 '>

            {data.map((crypto, index) => {
                return (
                    <div key={index} className='w-full flex flex-col items-center p-4 border border-slate-600 cursor-pointer hover:bg-slate-500 rounded-md' onClick={() => toggleInfo(crypto)}>
                        <div className='flex flex-col items-center gap-2'>
                            < img src={crypto.image} alt={crypto.name} className='w-12 hover:scale-105 hover:rotate-12 transition-all ' />
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