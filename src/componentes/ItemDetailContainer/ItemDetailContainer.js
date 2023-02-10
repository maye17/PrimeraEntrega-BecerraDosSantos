import React , {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

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
        <div className='cards'>
        <div className='card-list'>
            {data.map((dato)=> {
                return(
                    <ItemDetail data={dato} key={dato.id}/>
                )
            })}

        </div>
    </div>
    </>
    )
}

export default ItemDetailContainer;