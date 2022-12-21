import { useEffect, useState } from 'react'
import axios from 'axios'

const UseRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((response) => {
                setLoading(false)
                setData(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [url])

    return [data, setData, loading]
}
export default UseRequestData










