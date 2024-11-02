import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CryptoSide from './CryptoSide'
import InfoSide from './InfoSide'
import Loader from './Loader'




const DashboardLayout = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20')
    const [info, setInfo] = useState(false)
    const [selectedCrypto, setSelectedCrypto] = useState(null)




    const cryptoFetch = async () => {

        try {
            const res = await axios.get(url)
            const result = res.data
            setData(result)
            setLoading(false)
        } catch (error) {

            setError(error)
            error && console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        cryptoFetch()
    }, [url])


    const toggleInfo = (crypto) => {
        setInfo(true)
        setSelectedCrypto(crypto)
    }


    return (
        <div className='text-white'>
            {loading ? <div className='flex items-center justify-center h-screen w-full'><Loader /></div>
                : <div className='grid grid-cols-3 gap-0 place-items-center w-full'>
                    <CryptoSide data={data} toggleInfo={toggleInfo} />
                    <InfoSide data={data} info={info} toggleInfo={toggleInfo} selectedCrypto={selectedCrypto} />
                </div>}
        </div>
    )
}
export default DashboardLayout