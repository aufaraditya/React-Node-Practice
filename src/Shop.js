import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Shop() {


    useEffect(()=>{
        fetchItems();
    },[]);

    const [items, setItems ] = useState([]);

    const fetchItems = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/item');
        const data = await response.json();
        console.log(data.results);
        setItems(data.results);
    };


  return (
    <div>
        {items.map(item =>(
            <h1 key={item.name}>
                <Link to={`/shop/${item.name}`}>{item.name}</Link>
            </h1>
        ))}
    </div>
  );
}

export default Shop;
