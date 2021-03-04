import React from 'react';
import './contacto.css';
import Self from '../../images/perfil_1.jpg'
import Git from '../../images/githubTra.png'
import ln from '../../images/linkednTra.png'
import cv from '../../images/CVpicto.png'
import Footer from '../footer/Footer'
import styled from 'styled-components';


const contacto = () => {
    const Formularios =() =>{ return (   
    <form action="" method="" name="contacto" id="contacto">
            <input type="text" placeholder="Nombre" name="Nombre" ></input>
            <input type="tel" placeholder="Telefono"  name="Telefono"></input>
            <input type="email"  placeholder="Correo"  name="Correo"></input>
            <input type="textarea" placeholder="Mensaje" name="Mensaje" ></input>
            
            <button type="submit" onClick="" >Enviar</button>
   </form>  );
    }
    
    return (  
        <>
       
         <div className="navMenu backg" id="contacto">
          <Subtitle >Contacto</Subtitle>

           <Container id="perfil"><Perfil src={Self} alt="Uriel Sanchez" />  </Container>
              
           <Container id="contacto">
               <a href="https://www.linkedin.com/in/usanchez82" target="_blank"><Linkis2 src={ln} alt="Uriel Sanchez"></Linkis2> </a> 
               <a href="https://github.com/uriisan23" target="_blank"><Linkis src={Git} alt="Git Hub" ></Linkis></a> 
               <a href="https://uriisan23.github.io/portafolio/"><Linkis src={cv}  alt="CV" ></Linkis></a>
           
           </Container>

          
         </div>

         <Footer />
         </>
    );
}
 
const Container = styled.div`
 display: flex;
 flex-flow: column wrap;
 justify-content:center;
 aling-items:center;
 padding:2em;
 width:33%;

 
`;

const Perfil = styled.img`
width: 55%;
height:auto;
border-radius:100%;
`;

const Linkis = styled.img`
align-self: center;
width: 70px;
height: auto;
margin: 4%;
`;

const Linkis2 = styled.img`
align-self: center;
width: 110px;
height: auto;
`;

const Subtitle = styled.p`
font-size: 2.5em;
margin: 3% 25% 0 25%;
text-align: center;
width:100%;
color:white;
`;
  

export default contacto;