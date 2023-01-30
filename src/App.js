import React from 'react';
import './App.css';
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import SelectBasic from './componentes/ItemList';






function App() {
  return (
    <React.Fragment>
       <NavBar />
       <ItemListContainer title={"Bienvenido a MaiVisage"} />   
         <SelectBasic/> 
    </React.Fragment>
    
  );
}

export default App;
