import React from 'react';
import SelectBasic from '../ItemList/index'
import Items from '../ItemList/items';
import AboutMe  from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import CarouselControl from '../CarouselControl/index';



//opciones del select
const opciones = [
    {id: 1, name:'curso', description:'Cursos'},
    {id:2, name:'maquillaje', description:'Maquillajes'},
    {id:3, name:'cosmeticos', description:'Cosmeticos'}
  ];
  

const ItemListContainer  = () => {

    return (
        <div>
         <Banner title = {"Bienvenido a MaiVisage"}/>
        <AboutMe />
        <CarouselControl />  
         <SelectBasic>
           {opciones.map(opcion => (
            <Items key={opcion.id} description = {opcion.description} />))}
          </SelectBasic>
        
        </div>
    );
};
export default ItemListContainer;