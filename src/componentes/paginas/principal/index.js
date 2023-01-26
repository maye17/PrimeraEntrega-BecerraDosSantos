import React from 'react';
import './style.css'


const Principal = ({title}) => {
    return (
        <div>
            <h1 className='text'>{title}</h1>
        </div>
    );
};

export { Principal };