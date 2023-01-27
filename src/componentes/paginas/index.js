import React from 'react';
import './style.css'
import imagen1 from '../assets/WhatsApp Image 2023-01-26 at 12.59.30 PM.jpg';
import imagen2 from '../assets/imagen2.jpeg'

const Principal = ({title}) => {
    return (
        <div className='banner'>
            <h1 className='text'>{title}</h1>
            <img className='banner__img' src={imagen1}/>
            <img className='banner__img righ' src ={imagen2}/>          
        </div>
    );
};

export { Principal };