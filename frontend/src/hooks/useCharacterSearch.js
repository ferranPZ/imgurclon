import Axios from 'axios';
import React from 'react'
import axios from 'axios'

export default function useCharacterSearch() {

    feetchData = () => {
        console.log("fetching Data...");
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/posts/',

        })
    }


    return []
}
