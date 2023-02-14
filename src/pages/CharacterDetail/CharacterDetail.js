import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import axios from "axios";
import CharacterCard from '../../componentes/CharacterCard/CharacterCard';
import './style.css'


const CharacterDetail =()=> {
    const [product, setProduct] =useState({});

    let { id }= useParams();

       useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`).then ((res) => setProduct(res.data)
        );
    }, [id]);

    return (
             
        <div >
            <div className="cards">
                <div className="card-list"></div>
                    <div className='character-detail' key={product.id} >
                    <CharacterCard data = {product} />
                </div>
            </div>
        </div>
 

    )
}

export default CharacterDetail;


