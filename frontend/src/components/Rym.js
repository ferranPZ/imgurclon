import React, { useState, useRef, useCallback } from 'react'
//Components and hooks
import useBookSearch from '../hooks/useBookSearch'

export default function Rym() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const { characters, hasMore, loading, error } = useBookSearch(query, pageNumber)

    const observer = useRef()

    //cada vez q se actualice este elemento(osea tras cada render) es llamado un callback
    const lastCharacterElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
        console.log(node);
    }, [loading, hasMore])


    const handleChange = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} name="" id="" />
            {characters.map((c, index) => {
                if (characters.length === index + 1) {
                    //solo cuando se cree el ultimo elemento(osea, este) llama a un callback
                    return <div ref={lastCharacterElementRef} key={c}>{c} </div>
                } else {
                    return <div key={c}>{c} </div>
                }

            })}

            <div>{loading && "Loading..."}</div>
            <div>{error && "Error"}</div>

        </div>
    )
}
