import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CardWiddget = (icon) => {
    return(
        <div>
            <FontAwesomeIcon style={{fontSize: '32px', padding:'20px 5px 0'}} icon={faShoppingCart}>
            </FontAwesomeIcon>
            

        </div>
    )
}

export {CardWiddget};