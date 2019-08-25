import React from 'react';
import './App.css';
import Header from './app/header/header';
import Body from './app/body/body';

 

function App() {
  return (
    <div className="App">
     <Header></Header>
     <div className="central">
     <Body></Body>
     </div> 
    </div>
  );
}

export default App;
