import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

//componentes
import NavBar from './componentes/NavBar';
import Footer from './componentes/footer';
//paginas
import Home  from './pages/Home';
import Curso from './pages/Curso/Curso'
import Servicios from './pages/Servicios/Servicios';
import Contact from './pages/Contact/Contact'
import Cosmeticos from './pages/Cosmeticos/Cosmeticos';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';






function App() {
  return (
    <Router>
      <div className='App'>
       <NavBar />
       <Routes>
         <Route path='/PrimeraEntrega-BecerraDosSantos' element={<Home />} />
         <Route path='/Curso' element={<Curso/>} />
         <Route path='/Servicios' element={<Servicios/>}/>
         <Route path='/Cosmeticos' element={<Cosmeticos/>}/>
         <Route path='/detail/:id' element= {<CharacterDetail/>}/>
         <Route path='/Contact' element={<Contact/>}/>
       </Routes>
       <Footer />
       </div>
    </Router>
    
  );
}

export default App;
