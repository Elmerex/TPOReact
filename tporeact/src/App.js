import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';
import Navbar from './components/Navbar/Navbar';
import Mensaje, { Banner } from './components/Banner/Banner';
import {Banner as Saludo} from './components/Banner/Banner';
import { Banners } from './components/Banner/Banner';
import Navbar2 from './components/Navbar/Navbar2';
import imagen from "./assets/img/logolega.png";


//import Banner from './components/Banner/Banner'

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Saludo></Saludo>
      <Banners msg="Hola props"></Banners>
      <Navbar2 src={imagen} size={50}/> */}


      <header className="App-header">
        
        
        {/* <Button/>
        <Video/>
        <Audio/> */}
      </header>
    </div>
  );
}

//Mensaje ();

export default App;
