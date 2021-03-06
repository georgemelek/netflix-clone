import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    //a conditional code
    useEffect(() => {
        //if [], run once when row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData()
    }, []);

    return (
        <div>
             <h2>{title}</h2>
             {/* container -> posters */}
        </div>
    )
}

export default Row
