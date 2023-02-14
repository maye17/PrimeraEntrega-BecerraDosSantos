import React from 'react';
import AboutMe  from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import CarouselControl from '../CarouselControl/index';


const Principal  = () => {

    return (
        <div>
         <Banner title = {"Bienvenido a MaiVisage"}/>
        <AboutMe />
        <CarouselControl />  
        </div>
    );
};
export default Principal;
