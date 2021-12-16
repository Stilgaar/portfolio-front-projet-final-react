import axios from 'axios';
import { useState } from 'react';

const useSubmit = (submit, url) => {

    const [ok, setOk] = useState(false)
    const [data, setData] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        submit();
        axios.post(url, data)
            .then((res) => {
                if (res.data === 'done') { setOk(true) }
            })
            .then(() => setData({}))
            .catch((err) => console.log(err))
    }

    const handleChange = e => {
        e.persist();
        setData(data => ({ ...data, [e.target.name]: e.target.value }))
    }

    console.log(data)

    return [data, handleChange, handleSubmit, ok, setOk]
}

export default useSubmit;