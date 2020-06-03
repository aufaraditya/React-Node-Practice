import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Item({match}) {

    useEffect(()=>{
        fetchItem();
    },[]);

    const [item, setItem ] = useState({sprites:{}}); 

    const fetchItem = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/item/${match.params.id}`);
        const data = await response.json();
        console.log(data);
        setItem(data);
    };


  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.sprites.default} />
    </div>
  );
}

export default Item;
