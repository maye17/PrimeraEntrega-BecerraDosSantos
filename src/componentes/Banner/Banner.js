import React  from "react";
import './style.css'
import imagen1 from '../assets/imagen1.svg';
import imagen2 from '../assets/imagen2.svg'
const Banner =({title}) => {

    return(
        <div>
            <div className='banner'>
                <h1 className='text'>{title}</h1>
                <div className='banner__'>
                    <img className='banner__img' src={imagen1}/>
                    <img className='banner__img righ' src ={imagen2}/>  
                </div>
            </div>

        </div>
    )
}
export default Banner;