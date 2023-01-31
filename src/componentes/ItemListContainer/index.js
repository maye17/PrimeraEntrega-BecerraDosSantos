import React from 'react';
import './style.css'
import imagen1 from '../assets/imagen1.svg';
import imagen2 from '../assets/imagen2.svg'
import imagen3 from '../assets/a8ccs-gcnmr.svg'


const ItemListContainer  = (props) => {

const {title} = props;

    return (
        <div>
        <div className='banner'>
            <h1 className='text'>{title}</h1>
            <div className='banner__'>
                <img className='banner__img' src={imagen1}/>
                <img className='banner__img righ' src ={imagen2}/>  
            </div>
            <div className='section'>
                <div className='section-card'>
                    <h2>Sobre Mi</h2>
                    <div className='section-text'>
                        <p>Some quick example text to build on the card title and make up the
                        bulk of the cards content.</p>
                    </div>
                    <div className='section-card-img'>
                        <img src={imagen3} className='card-img '/>
                    </div>
                    
                </div>
            </div>        
        </div>
        </div>
    );
};
export default ItemListContainer;