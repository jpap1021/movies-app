import React from 'react';
import './App.css';
import Header from './app/header/header';
import Body from './app/body/body';
import Movie from './app/body/movie/movie';
import ListFavorites from './app/body/listFavorites/listFavorites'
 

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Body></Body>
     <Movie></Movie>
     <ListFavorites></ListFavorites>
    </div>
  );
}

export default App;
