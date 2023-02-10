import React from 'react';
/* import ItemListContainer from '../../componentes/ItemListContainer'; */
import SelectBasic from '../../componentes/ItemList';
import Items from '../../componentes/ItemList/items';
import AboutMe  from '../../componentes/AboutMe/AboutMe';
import Banner from '../../componentes/Banner/Banner';

//opciones del select
const opciones = [
    {id: 1, name:'curso', description:'Cursos'},
    {id:2, name:'maquillaje', description:'Maquillajes'},
    {id:3, name:'cosmeticos', description:'Cosmeticos'}
  ];
  

const Home =()=> {
    return (
        <div className='Home'>
        
      <Banner title = {"Bienvenido a MaiVisage"}/>
        <AboutMe />  
         <SelectBasic>
           {opciones.map(opcion => (
            <Items key={opcion.id} description = {opcion.description} />))}
          </SelectBasic>
        </div>
    )
}

export default Home