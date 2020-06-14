import React, {useState,useContext} from 'react'
import './Nav.css';
import {MovieContext} from './MovieContext'

export default function Nav() {
    const [movies,setMovies] = useContext(MovieContext);


    return (
        <nav>
            <h3>Auf</h3>
            <p>List of Movies: {movies.length}</p>
        </nav>
    )
}
