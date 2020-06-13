import React, {useState, createContext} from 'react'


export const MovieContext = createContext();

export const MovieProvider = props => {
    const[movies, setMovies] = useState([
        {
            name: "Avengers",
            price: '$20',
            id : 1001
        },
        {
            name: "Avengers: Age of Ultron",
            price: '$20',
            id : 2232,
        },
        { 
            name: "Avengers: Infinity War",
            price: '$20',
            id : 7212

        },
        { 
            name: "Avengers: Endgame",
            price: '$20',
            id : 9224

        }
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}
