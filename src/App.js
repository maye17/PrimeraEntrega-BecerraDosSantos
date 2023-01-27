import React from 'react';
import './App.css';
import { Navegacion } from './componentes/navegacion';
import { Principal } from './componentes/paginas';
import SelectBasic from './componentes/ItemList';





function App() {
  return (
    <React.Fragment>
       <Navegacion />
       <Principal title="Bienvenido a Mai visage!!!">   
         </Principal>
         <SelectBasic/> 
    </React.Fragment>
    
  );
}

export default App;
