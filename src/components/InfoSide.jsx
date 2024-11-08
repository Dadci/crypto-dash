import React from 'react'
import wallet from '../assets/Wallet_empty.png'

const InfoSide = ({ info, selectedCrypto }) => {
    return (
        <>

            {!info ? (<div className='w-full h-screen bg-slate-700  text-white flex flex-col items-center justify-center p-8 gap-6 '>

                <img src={wallet} alt="empty" className='w-40' />
                <h1 className='text-sm font-normal'>"There is no Crypto selected, Please select to see infos"</h1>

            </div>) : (<div className='w-full h-screen bg-slate-800   text-white flex flex-col items-start justify-start px-10 py-16 gap-5 '>


                <img src={selectedCrypto.image} alt={selectedCrypto.name} className='w-36 mb-2' />


                <h1 className='text-2xl font-bold mb-2'>{selectedCrypto.name}</h1>
                <h1 className='text-lg font-normal'>Symbol: <span className='text-slate-300'>{selectedCrypto.symbol}</span></h1>
                <h1 className='text-lg font-normal'>Current Price: <span className='text-slate-300'> {selectedCrypto.current_price}</span></h1>
                <h1 className='text-lg font-normal'>Market Cap: <span className='text-slate-300'>{selectedCrypto.market_cap}</span></h1>
                <h1 className='text-lg font-normal'>Total Volume: <span className='text-slate-300'>{selectedCrypto.total_volume}</span></h1>
                <h1 className='text-lg font-normal'>Price Change: <span className={` font-medium ${selectedCrypto.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}> {selectedCrypto.price_change_percentage_24h}  </span></h1>
                <h1 className='text-lg font-normal'>Total Supply: <span className='text-slate-300'>{selectedCrypto.total_supply}</span></h1>
                <h1 className='text-lg font-normal'>Circulating Supply: <span className='text-slate-300'>{selectedCrypto.circulating_supply}</span></h1>
                <h1 className='text-lg font-normal'>ATH: <span className='text-slate-300'>{selectedCrypto.ath}</span></h1>
                <h1 className='text-lg font-normal'>ATL: <span className='text-slate-300'>{selectedCrypto.atl}</span></h1>
                <h1 className='text-lg font-normal'>ATH Change Percentage: <span className={` font-medium ${selectedCrypto.ath_change_percentage < 0 ? 'text-red-400' : 'text-green-400'}`}> {selectedCrypto.ath_change_percentage}  </span></h1>


            </div>)}
        </>
    )
}

export default InfoSide