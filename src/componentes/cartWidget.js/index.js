import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CardWiddget = (icon) => {
    return(
        <div>
            <FontAwesomeIcon style={{fontSize: '40px'}} icon={faShoppingCart}>
            </FontAwesomeIcon>
            

        </div>
    )
}

export {CardWiddget};