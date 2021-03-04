
import './App.css';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Portafolio from './components/portafolio/Portafolio'
import Contacto from './components/contacto/Contacto'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Skills />
    </BrowserRouter>
    <Portafolio />
    <Contacto />
    </>
  );
}

export default App;
