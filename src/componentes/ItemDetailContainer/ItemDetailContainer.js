import React , {useEffect,useState} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer =()=>{
    const [data,setData] = useState([]);
    const getData = () => {    
    fetch('/json/data.json',
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }         
        }
        )
        .then(response =>(response.json())         
        )
        .then(json =>  setData(json))     
    }
    useEffect(()=> {
        getData()
    },[]);

    return (
        <>
        <h1>Cursos</h1>
        <div className='cards'>
        <div className='card-list'>
            {data.map((dato)=> {
                return(
                    <ItemDetail data = {dato} key={dato.id}/>
                )
            })}

        </div>
    </div>
    </>
    )
}

export default ItemDetailContainer;