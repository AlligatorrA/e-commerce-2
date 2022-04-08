import React, { useEffect, useState } from 'react'
import axios from "axios";
function useFetch(url) {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        // setLoader(true)

        setTimeout(() => {
            const dataFetch = async () => {
                try {
                    const res = await axios.get(url, { signal: abortCont })
                    setData(res.data);
                    setLoader(false)

                } catch (error) {
                    if (error.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setLoader(false);
                        setError(error);
                    }
                }

            }; dataFetch()

        }, 2000);
        return () => abortCont.abort();
    }, [url])

    return { data, loader, error }
}

export default useFetch