import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = '531fc0d7';
  const APP_KEY = 'e95e4d025ce66e2dd62b10242ac0a595';
  const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const [counter, setCounter] = useState(0);

useEffect(() => {
  console.log('Effect has been run');
},[]);
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btton" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  )
}

export default App;
