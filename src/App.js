import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import  ItemListContainer from './componentes/ItemListContainer';
import SelectBasic from './componentes/ItemList';
import Items from './componentes/ItemList/items';
import Footer from './componentes/footer';


//opciones del select
const opciones = [
  {id: 1, name:'curso', description:'Cursos'},
  {id:2, name:'maquillaje', description:'Maquillajes'},
  {id:3, name:'cosmeticos', description:'Cosmeticos'}
];


function App() {
  return (
    <React.Fragment>
       <NavBar />
       <ItemListContainer title = {"Bienvenido a MaiVisage"} />   
         <SelectBasic>
           {opciones.map(opcion => (
            <Items key={opcion.id} description = {opcion.description} />))}
          </SelectBasic>
          <Footer />
    </React.Fragment>
    
  );
}

export default App;
