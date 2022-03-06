import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import image from "./pics/logo.png";
import heroes from "./pics/heroes.png"
import SliderComponent from "./SliderComponent.js"

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
      <div className="Section3">
        <h1>O experiență unică. O ofertă pe care nu trebuie să o reatezi.</h1>
        <h3>
          Pentru a sărbători lansarea HBO Max, abonații noi și cei existenți beneficiază de o ofertă extraordinară: reducere de 33% la abonament - pe perioadă nelimitată*!
        </h3>
        <div className="price">
          <div className="discount">
            <div className="oldPrice">
              <sup>4,99€</sup>
            </div>
            <div className="newPrice">
              3,30€ <sup>/lună</sup>
            </div>
          </div>
          <div className="message">
          </div>
        </div>
        <h5>ÎNREGISTREAZĂ-TE ÎNTRE 8 ȘI 31 MARTIE</h5>
        <p>*Atât timp cât îți păstrezi abonamentul. Oferta este valabilă doar pe HBOMax.com și prin partenerii selectați, până pe 31 martie 2022. Reducerea de 33% se menține pe întreaga durată a abonamentului și se aplică doar prețului abonamentului lunar, care poate suferi modificări de-a lungul timpului. Prețul redus este de 3,30 € (prețul standard este 4,99 €). Clienții pot renunța la abonament în orice moment.</p>
      </div>
      <div className="Section4">
        <h1>Tot ce iubești. Într-un singur loc.</h1>
        <h3>Cele mai spectaculoase blockbustere, cele mai îndrăznețe povești și filme clasice de neuitat sunt toate acum pe HBO Max.</h3>

        <div className="promoVideo">
          <iframe src="https://www.youtube.com/embed/6soiKvRl5rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h1 id='distractie'>Distracție maximă pentru întreaga familie</h1>
        <h3>
          Bucură-te de titluri emblematice Warner Bros, HBO, Max Originals, DC, Cartoon Network și multe altele, aflate pentru prima dată într-un singur loc.
        </h3>
        <SliderComponent trackId={'sliderTrack1'} />

        <SliderComponent trackId={'sliderTrack2'} />

      </div>
    </div>
  );
}

export default App;
