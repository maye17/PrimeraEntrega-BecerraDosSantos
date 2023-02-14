import React, {useEffect,useState} from "react";
import './style.css'
/* import CharacterCard from "../CharacterCard/CharacterCard"; */
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
const CharacterList =()=> {
    const [products, setProducts]= useState([]);

    
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then ((Response) => Response.json())
        .then ((json) => setProducts(json))
     }
        ,[])
    return (

        <div>
            <div className="cards">
                <div className="card-list">
                    {products.map((product) => {
                        return (
                            <div  key={product.id}>
                                <Link to={`/detail/${product.id}`}> 
                                    <ItemDetail data = {product}   />
                                </Link>
                            </div>
                        )
                        })
                    }
                </div> 
            </div>        
        </div>
 
    )
}

export default CharacterList;