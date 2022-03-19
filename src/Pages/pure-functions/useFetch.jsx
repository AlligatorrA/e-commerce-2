import React, { useEffect, useState } from 'react'
import axios from "axios";
function useFetch(url) {



    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoader(true)

        setTimeout(() => {
            const dataFetch = async () => {
                try {
                    const res = await axios.get(url)
                    setData(res.data);
                    setLoader(false)

                } catch (error) {
                    setError(error);
                }

            }; dataFetch()

        }, 4000);

    }, [url])

    return { data, loader, error }
}

export default useFetch