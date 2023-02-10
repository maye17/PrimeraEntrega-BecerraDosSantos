import React from 'react';
import './style.css'
import imagen3 from '../assets/a8ccs-gcnmr.svg';

const AboutMe =()=> {

    return (
        <div className='section'>
            <div className='section__about'>
                <div className='section-card'>
                    <h2>Sobre Mi</h2>
                    <div className='section-text'>
                        <p>El amor al maquillaje empezó como una vía de escape de ciertas situaciones que pase en 2016, después del primer curso de maquillaje al que asistí descubrí que me gustaba y que era buena haciendo maquillajes. Continue practicando y cursando mas cursos de maquillaje profesional, preparándome, después empecé a atender a clientas y una de ellas me insistió en que le dictara un curso de automaquillaje y fue así como empecé a impartir mis conocimientos sobre el maquillaje, tiempo después trabaje en una academia de maquillaje dictando cursos tantos básicos como profesionales.
                        Estoy convencida en que cada uno tiene un don en particular y el mío es impartir mis conocimientos de maquillaje tanto para personas que quieran aprender técnicas básicas para un maquillaje diario, personas que quieren formarse profesionalmente en este hermoso mundo del maquillaje, así como también personas que quieren que les realice un maquillaje para cualquier ocasión.
                        Confía en el don que tienes y consigue las destrezas necesarias para convertirte en quien deseas ser.
                        Atrévete con Mai_visage
                        </p>
                    </div>
                    <div className='section-card-img'>
                        <img src={imagen3} className='card-img '/>
                    </div>
                    
                </div>
            </div>        
        </div>

    )
}

export default AboutMe;