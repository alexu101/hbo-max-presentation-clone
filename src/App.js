import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import image from "./pics/logo.png";
import heroes from "./pics/heroes.png"

function App() {
  return (
    <div className="App">
      <div className="Section1">
        <header>
          <img src={image} />
          <h4>INTRĂ ÎN CONT</h4>
        </header>
        <img src={heroes} alt="" />
        <h1>HBO Max sosește pe 8 martie!</h1>
        <h2>Pregatește-te de o experiență de vizionare diferită</h2>
        <h4>INTRĂ ÎN CONT</h4>
        <h4>INTRĂ ÎN CONT</h4>
        <h4>INTRĂ ÎN CONT</h4>
        <h4>INTRĂ ÎN CONT</h4>
        <h4>INTRĂ ÎN CONT</h4>
      </div>
    </div>
  );
}

export default App;
