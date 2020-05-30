import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {
  
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const[recipe, setRecipes] = useState([]); /*UseState contains array as parameter as [] the default value of recipe*/
  const[search, setSearch] = useState(''); /*UseState contains variable as parameter as '' the default value of search*/
  const[query, setQuery] = useState('chicken'); /*UseState contains variable as parameter as 'chicken' the default value of query*/

  useEffect(() => {
   getRecipes(); /*Run Everytime the page rerendered (w/o 2nd Argument)*/
  },[query]); /*[] as 2nd argument to make it run only the first time page rendered*/
        /* fill [] with counter variable to make it run everytime counter variable value changes*/

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

    const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); /*Prevent refreshing page*/
    setQuery(search)
    setSearch('')
  };
  
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button  className="search-button" type="submit">
         Search
        </button>
      </form>
      <div className="recipes">
        {recipe.map(recipe=>(
          <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
