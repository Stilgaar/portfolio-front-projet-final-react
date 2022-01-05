import { useState } from 'react'
const axios = require('axios')


export default function useSubmit(e, sumbit) {

    let url = "https://jeffvanstraelenback.osc-fr1.scalingo.io/message" || "http://localhost:5000/message"

    const [ok, setOk] = useState(false)
    e.preventDefault();

    e.target.reset();

    axios.post(url, sumbit)
        .then((res) => {
            if (res.data === 'done') { setOk(true) }
        })
        .catch((err) => console.log(err))
}
