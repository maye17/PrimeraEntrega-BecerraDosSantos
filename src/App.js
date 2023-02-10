import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

//componentes
import NavBar from './componentes/NavBar';
import Footer from './componentes/footer';
//paginas
import Home  from './pages/Home';
import Curso from './pages/Curso/Curso'
import Contact from './pages/Contact/Contact'





function App() {
  return (
    <Router>
      <div className='App'>
       <NavBar />
       <Routes>
         <Route path='/PrimeraEntrega-BecerraDosSantos' element={<Home />} />
         <Route path='/Curso' element={<Curso/>} />
         <Route path='/Contact' element={<Contact/>}/>
       </Routes>
       <Footer />
       </div>
    </Router>
    
  );
}

export default App;
