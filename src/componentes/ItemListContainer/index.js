import React, {useEffect,useState} from 'react';
import SelectBasic from '../ItemList/index'
import Items from '../ItemList/items';




//opciones del select
/* const opciones = [
    {id: 1, name:'curso', description:'Cursos'},
    {id:2, name:'maquillaje', description:'Maquillajes'},
    {id:3, name:'cosmeticos', description:'Cosmeticos'}
  ]; */
  

const ItemListContainer  = () => {


  const [opciones, setOpciones]= useState([]);

    
  useEffect(()=> {
      fetch('./json/categories.json',
      {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }         
    }
      )
      .then ((Response) => Response.json())
      .then ((json) => setOpciones(json))
   }
      ,[])

return(

         <SelectBasic>
           {opciones.map(opcion => (
            <Items key={opcion.id} description = {opcion.description} />))}
          </SelectBasic> 
           
           )

}
export default ItemListContainer;
