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
import { auth } from "./firebase.js"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function App() {

  const [pics1, setPics1] = useState([]);
  const [pics2, setPics2] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriber, setSubscriber] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5mwuydo', 'template_5db1cdk', e.target, 'Ve_MOcNOYM5Urtkge')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setSubscriber('');
  }


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
      background: 'radial-gradient(circle, rgba(126,71,175,1) 40%, rgba(117,36,166,1) 56%, rgba(50,5,91,1) 94%)',
      borderRadius: '25px'
    },
  };

  const register = (e) => {
    e.preventDefault();
    if (!email)
      return alert('Enter a valid email adress!');
    if (!phone)
      return alert('Enter a valid phone number!');
    if (!password)
      return alert('Enter a valid password!');
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        email: email,
        password: password,
        phone: phone,
      })
      setModal(false);
    })
  }

  return (

    <Router>
      <div className="App">
        <div className="Section1">
          <header>
            <img src={image} />
            <a href='https://www.hbomax.com/subscribe'>INTR?? ??N CONT</a>
          </header>
          <img src={heroes} alt="" />
        </div>
        <Switch>
          <Route exact path='/'>
            <div className="Section2">
              <h1>HBO Max sose??te pe 8 martie!</h1>
              <h3>Preg??te??te-te pentru o experien???? de vizionare diferit??</h3>
              <form onSubmit={sendEmail}>
                <input type="text" placeholder='Adresa de e-mail' onChange={e => { setSubscriber(e.target.value) }} value={subscriber} />
                <buttOn>??INE-M?? LA CURENT!</buttOn>
                <div className="policy">
                  <p>Prin completarea adresei de e-mail, accep??i s?? prime??ti e-mail-uri promo??ionale ??i alte oferte de la HBO Max (o companie WarnerMedia) ??i {<a href='www.google.ro'>PARTENERII</a>}  s??i prin e-mail, social media ??i alte canale. Pentru a-??i retrage consim????m??ntul ??i pentru a afla detalii despre drepturile tale, vezi op??iunile disponibile ??n {<a href='www.google.ro'>POLITICA DE CONFIDEN??IALITATE</a>}.</p>
                </div>

              </form>
            </div>
            <div className="Section3">
              <h1>O experien???? unic??. O ofert?? pe care nu trebuie s?? o reatezi.</h1>
              <h3>
                Pentru a s??rb??tori lansarea HBO Max, abona??ii noi ??i cei existen??i beneficiaz?? de o ofert?? extraordinar??: reducere de 33% la abonament - pe perioad?? nelimitat??*!
              </h3>
              <div className="price">
                <div className="discount">
                  <div className="oldPrice">
                    <sup>4,99???</sup>
                  </div>
                  <div className="newPrice">
                    3,30??? <sup>/lun??</sup>
                  </div>
                </div>
                <div className="message">
                </div>
              </div>
              <h5>??NREGISTREAZ??-TE ??NTRE 8 ??I 31 MARTIE</h5>
              <p>*At??t timp c??t ????i p??strezi abonamentul. Oferta este valabil?? doar pe HBOMax.com ??i prin partenerii selecta??i, p??n?? pe 31 martie 2022. Reducerea de 33% se men??ine pe ??ntreaga durat?? a abonamentului ??i se aplic?? doar pre??ului abonamentului lunar, care poate suferi modific??ri de-a lungul timpului. Pre??ul redus este de 3,30 ??? (pre??ul standard este 4,99 ???). Clien??ii pot renun??a la abonament ??n orice moment.</p>
            </div>
            <div className="Section4">
              <h1>Tot ce iube??ti. ??ntr-un singur loc.</h1>
              <h3>Cele mai spectaculoase blockbustere, cele mai ??ndr??zne??e pove??ti ??i filme clasice de neuitat sunt toate acum pe HBO Max.</h3>

              <div className="promoVideo">
                <iframe src="https://www.youtube.com/embed/6soiKvRl5rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h1 id='distractie'>Distrac??ie maxim?? pentru ??ntreaga familie</h1>
              <h3>
                Bucur??-te de titluri emblematice Warner Bros, HBO, Max Originals, DC, Cartoon Network ??i multe altele, aflate pentru prima dat?? ??ntr-un singur loc.
              </h3>
              <SliderComponent trackId={'sliderTrack1'} pics={pics1} />

              <SliderComponent trackId={'sliderTrack2'} pics={pics2} />

              <div className="Icons">
                <Option Icon={ImportantDevicesIcon} title={'Vizionare simultan??'} subtitle={'Vizioneaz?? pe trei dispozitive ??n acela??i timp.'} />
                <Option Icon={PeopleOutlineIcon} title={'Profiluri personalizate'} subtitle={'Adaug?? p??n?? la 5 profiluri pentru adul??i ??i copii ??i bucur??-te de con??inut selectat cu aten??ie.'} />
                <Option Icon={SignalWifiBadIcon} title={'Descarc?? ??i vizioneaz?? c??nd vrei, unde vrei'} subtitle={'Vizionezi ce dore??ti, oriunde te afli.'} />
              </div>
            </div>
            <div className="Section5">
              <h1>Acces imediat ??n ziua lans??rii</h1>
              <h3>A??tep??i cu ner??bdare HBO Max?</h3>
              <h3>Creeaz??-??i cont pe HBO GO acum ??i ????i vom transfera contul la HBO Max ??n ziua lans??rii.</h3>
              <Modal
                style={modalStyle}
                isOpen={modal}
                onRequestClose={() => setModal(false)}
              >
                <IconButton type='submit' onClick={() => setModal(false)}><CloseIcon style={{ color: "white" }} /></IconButton>
                <form className='form'>
                  <input type="text" name="mail" placeholder='Adresa de e-mail' onChange={event => setEmail(event.target.value)} value={email} />
                  <input type="password" name='password' placeholder='Parol??' onChange={event => setPassword(event.target.value)} value={password} />
                  <input type="number" name='phone' placeholder='Num??r de telefon' onChange={event => setPhone(event.target.value)} value={phone} />
                  <button onClick={register}>SUBMIT</button>
                </form>
              </Modal>
              <button onClick={(e) => setModal(e)}>CREEAZ?? CONT</button>
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
