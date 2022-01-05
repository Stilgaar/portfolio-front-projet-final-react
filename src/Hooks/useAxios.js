import axios from "axios"
import { useEffect, useState } from "react"

const useAxios = (url = '', options = null) => {

    const [data, setData] = useState()
    const [error, setErrors] = useState()
    const [ok, setOk] = useState(false)


    useEffect(() => {

        let isMounted = true;
        axios.post(url, options)
            .then(res => {
                setData(res.data)
                setErrors(null)
            })
            .catch(error => {
                if (isMounted) {
                    setErrors(error)
                    setData(null)
                }
            })
            .finally(() => isMounted && setOk(true))

        return () => (isMounted = false)

    }, [url, options])



    return { setOk, ok, error, data }
}

export default useAxios;