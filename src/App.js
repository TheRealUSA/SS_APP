import './App.css';
import Inicio from './Screens/Inicio';
import Musicos from './Screens/Musicos';
import Oportunidades from './Screens/Oportunidades';
import Precios from './Screens/Precios';
import InicioSesion from './Screens/InicioSesion';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Body from './components/bodyFooter/body';
import Footer from './components/footer/footer';

function App() {
  return ( <div className='flex flex-col'>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Inicio/>}/>

  <Route path='/Musicos' element={<Musicos/>}/>

  <Route path='/Oportunidades' element={<Oportunidades/>}/>

  <Route path='/Precios' element={<Precios/>}/>

  <Route path='/Iniciar Sesión' element={<InicioSesion/>}/>


    
</Routes>
</BrowserRouter>

 <Body/>
 <Footer/>
  </div>
  );
}

export default App;
