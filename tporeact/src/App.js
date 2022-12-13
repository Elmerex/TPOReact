import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';
import Navbar from './components/Navbar/Navbar';
import Mensaje, { Banner } from './components/Banner/Banner';
import {Banner as Saludo} from './components/Banner/Banner'

//import Banner from './components/Banner/Banner'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button/>
        <Video/>
        <Audio/>

      </header>
    </div>
  );
}

//Mensaje ();

export default App;
