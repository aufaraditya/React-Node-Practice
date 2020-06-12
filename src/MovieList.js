import React, {useState} from 'react'

export default function MovieList() {
    const[movies, setMovies] = useState([
        {
            name: "Avengers",
            price: $20,
            id : 0001
        },
        {
            name: "Avengers: Age of Ultron",
            price: $20,
            id : 2232,
        },
        { 
            name: "Avengers: Infinity War",
            price: $20,
            id : 7212

        },
        { 
            name: "Avengers: Endgame",
            price: $20,
            id : 9224

        }
    ]);


    return (
        <div>
            
        </div>
    )
}
