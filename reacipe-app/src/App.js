import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {
  const APP_ID = '531fc0d7';
  const APP_KEY = 'e95e4d025ce66e2dd62b10242ac0a595';

const[recipes, setRecipes] = useState([]);
const[search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');
//const [counter, setCounter] = useState(0);

useEffect(() => {
getRecipes();
  //console.log('Effect has been run');
},[query]);
const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  console.log(data.hits);
  setRecipes(data.hits);
}
const updateSearch = e => {
  setSearch(e.target.value);
  // console.log(search);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return(
    <div className="App">
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btton" type="submit">Search</button>
      </form>
      {recipes.map(recipes => (
        <Recipe 
        key={recipes.recipe.label} 
        title = {recipes.recipe.label} 
        calories = {recipes.recipe.calories} 
        image={recipes.recipe.image}
        ingredients={recipes.recipe.ingredients}
          />
      ))}
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  )
}

export default App;
