//para que el hook sea llamado cada vez que uno de sus parametros cambie
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [characters, setCharacters] = useState([])
    const [hasMore, setHasmore] = useState(false)

    useEffect(() => {
        setCharacters([])
    }, [query])


    useEffect(() => {
        let cancel
        setLoading(true)
        setError(false)

        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character',
            params: { name: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then((res) => {

            setCharacters(prevCharacters => {
                //set devuelve solo valores unicos a partir del array
                return [...new Set([...prevCharacters, ...res.data.results.map(c => c.name)])]
            })
            setHasmore(() => {
                if (res.data.info.next) {
                    console.log("hay mas");
                    return true
                } else {
                    console.log("no hay mas");
                    return false
                }
            })
            setLoading(false)

            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
            setLoading(false)
        })
        return () => { cancel() }

    }, [query, pageNumber])


    return { loading, error, characters, hasMore }
}