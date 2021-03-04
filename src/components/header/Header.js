import React from 'react';

import About from '../about/about'

const header = () => {
    return ( 
        <>
      
        <div className='navMenu fondoAzul' id="inicio">
         <nav>
            <ul>
            <a href="#acerca"> <li className="onhover">Acerca</li></a>
            <a href="#skills"> <li className="onhover">Skills</li></a>
            <a href="#portafolios"><li className="onhover">Portafolio</li></a>
            <a href="#contacto"><li className="onhover">Contacto</li></a>
            </ul>
         </nav>
        </div>
         <a href="#inicio" id="head"><i className="fa fa-arrow-circle-up" aria-hidden="true"></i> </a>
        <About />
        </>
     );
}
 
export default header;