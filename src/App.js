import React from 'react';
import { useEffect, useState } from 'react'
import { db } from "./firebase.js"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import image from "./pics/logo.png";
import heroes from "./pics/heroes.png"
import SliderComponent from "./SliderComponent.js"
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Option from "./Option.js";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SignalWifiBadIcon from '@mui/icons-material/SignalWifiBad';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Questions from './Questions.js'
import Hubs from './Hubs.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoremIpsum from './LoremIpsum.js';

function App() {


  const [pics1, setPics1] = useState([]);
  const [pics2, setPics2] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    db.collection("pic-slider1")
      .onSnapshot(snapshot => (
        setPics1(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }
          ))
        )
      ));
    db.collection("pic-slider2")
      .onSnapshot(snapshot => (
        setPics2(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }
          ))
        )
      ))
  }, []);

  const [modal, setModal] = useState(false);
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'radial-gradient(circle, rgba(50,6,91,1) 37%, rgba(4,4,40,1) 78%)',
      borderRadius: '25px'
    },
  };

  return (

    <Router>
      <div className="App">
        <div className="Section1">
          <header>
            <img src={image} />
            <h4>INTRĂ ÎN CONT</h4>
          </header>
          <img src={heroes} alt="" />
        </div>
        <Switch>
          <Route exact path='/'>
            <div className="Section2">
              <h1>HBO Max sosește pe 8 martie!</h1>
              <h3>Pregătește-te pentru o experiență de vizionare diferită</h3>
              <form>
                <input type="text" placeholder='Adresa de e-mail' place />
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
              <SliderComponent trackId={'sliderTrack1'} pics={pics1} />

              <SliderComponent trackId={'sliderTrack2'} pics={pics2} />

              <div className="Icons">
                <Option Icon={ImportantDevicesIcon} title={'Vizionare simultană'} subtitle={'Vizionează pe trei dispozitive în același timp.'} />
                <Option Icon={PeopleOutlineIcon} title={'Profiluri personalizate'} subtitle={'Adaugă până la 5 profiluri pentru adulți și copii și bucură-te de conținut selectat cu atenție.'} />
                <Option Icon={SignalWifiBadIcon} title={'Descarcă și vizionează când vrei, unde vrei'} subtitle={'Vizionezi ce dorești, oriunde te afli.'} />
              </div>
            </div>
            <div className="Section5">
              <h1>Acces imediat în ziua lansării</h1>
              <h3>Aștepți cu nerăbdare HBO Max?</h3>
              <h3>Creează-ți cont pe HBO GO acum și îți vom transfera contul la HBO Max în ziua lansării.</h3>
              <Modal
                style={modalStyle}
                isOpen={modal}
                onRequestClose={() => setModal(false)}
              >
                <IconButton type='submit' onClick={() => setModal(false)}><CloseIcon style={{ color: "white" }} /></IconButton>
                <form className='form'>
                  <input type="text" name="mail" placeholder='Adresa de e-mail' onChange={event => setEmail(event.target.value)} value={email} />
                  <input type="password" name='password' placeholder='Parolă' onChange={event => setPassword(event.target.value)} value={password} />
                  <input type="number" name='phone' placeholder='Număr de telefon' onChange={event => setPhone(event.target.value)} value={phone} />
                </form>
              </Modal>
              <button onClick={() => setModal(true)}>CREEAZĂ CONT</button>
            </div>
            <div className="Section6">
              <Questions />
              <Hubs />
            </div>
          </Route>
          <Route path='/lorem-ipsum'>
            < LoremIpsum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
