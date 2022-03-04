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
      </div>
      <div className="Section2">
        <h1>HBO Max sosește pe 8 martie!</h1>
        <h3>Pregătește-te pentru o experiență de vizionare diferită</h3>
        <form>
          <input type="text" placeholder='Adresa de e-mail' />
          <buttOn>ȚINE-MĂ LA CURENT!</buttOn>
          <div className="policy">
            <p>Prin completarea adresei de e-mail, accepți să primești e-mail-uri promoționale și alte oferte de la HBO Max (o companie WarnerMedia) și {<a href='www.google.ro'>PARTENERII</a>}  săi prin e-mail, social media și alte canale. Pentru a-ți retrage consimțământul și pentru a afla detalii despre drepturile tale, vezi opțiunile disponibile în {<a href='www.google.ro'>POLITICA DE CONFIDENȚIALITATE</a>}.</p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
