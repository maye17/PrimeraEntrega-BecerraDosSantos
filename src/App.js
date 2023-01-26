import React from 'react';
import './App.css';
import { Navegacion } from './componentes/navegacion';
import { Principal } from './componentes/paginas/principal';
import { CardWiddget } from './componentes/cartWidget.js';





function App() {
  return (
    <React.Fragment>
       <Navegacion />
       <Principal title="Bienvenido a Mai visage!!!"></Principal>    
    </React.Fragment>
     
    
  );
}

export default App;
