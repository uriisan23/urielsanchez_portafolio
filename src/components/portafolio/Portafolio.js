import React from 'react'
import './portafolio.css'
import potsoli from '../../images/potsoli.png'
import koodoni from '../../images/koodoni.png'
import lunatika from '../../images/lunatika.png'
import chile from '../../images/alchile.png'
import mms from '../../Archivos/MMS.mp4'
import med from '../../Archivos/med_record.mp4'
import mensweb from '../../Archivos/Mensajes_web.mp4'



const video3= "https://www.linkedin.com/posts/usanchez82_proyecto-en-c-activity-6733220458176638976-Oho9";

const portafolio = () => {
    return ( 
     <div className="navMenu" id="portafolios">
        
        <div className="row banner_port">
        <p className="SubTitle">Portafolio</p>
        <a href="https://potsolicalli.azurewebsites.net/" target="_blank" className="tooltip">
          <img src={potsoli} alt="Potsoli" className="imgPort" />
            <span className="tooltiptext">
              <h4>Potsolli Calli</h4>
              <h6>Pagina Web</h6>
              <h6>Azure Web App HTML + CSS</h6>
              
            </span>
       
        </a>
        <a href="https://koodonisoftware.azurewebsites.net/" target="_blank" className="tooltip">
          <img src={koodoni} alt="Koodoni" className="imgPort"/>
              <span className="tooltiptext">
                <h4>Koodoni</h4>
                <h6>Pagina Web</h6>
                <h6>Azure Web App sin almacenamiento PHP + JS + Ajax + Azure Logic App </h6>
              </span>
        </a>
        <a href="http://lunatikaclothes.com/index.php" target="_blank" className="tooltip">
          <img src={lunatika} alt="Lunatika" className="imgPort" />
              <span className="tooltiptext">
                  <h4>Lunatika</h4>
                  <h6>Pagina Web</h6>
                  <h6> PHP MVC + Ajax + MySQL</h6>
              </span>
          </a>
        <a href="https://uriisan23.github.io/AlChile/" target="_blank" className="tooltip">
          <img src={chile} alt="Al Chile" className="imgPort" />
              <span className="tooltiptext">
                  <h4>Al Chile</h4>
                  <h6>Pagina Web</h6>
                  <h6>Bootstrap </h6>
              </span>
        </a>
       
        <div className="imgPort tooltip">
          <video  className="demo " controls >
              <source src={mms} type="video/mp4" />
          </video>
              <span className="tooltiptext">
                  <h4>Aplicacion Desktop</h4>
                  <h6>Demo</h6>
                  <h6>VB + Access</h6>
              </span>
         </div>

         <div className="imgPort tooltip">
          <video  className="demo " controls >
              <source src= {med} type="video/mp4" />
          </video>
              <span className="tooltiptext">
                  <h4>Aplicacion Desktop</h4>
                  <h6>C# + SQL Server</h6>
              </span>
         </div>


         <div className="imgPort tooltip">
          <video  className="demo " controls >
              <source src= {mensweb} type="video/mp4" />
          </video>
              <span className="tooltiptext">
                  <h4>Aplicacion Desktop</h4>
                  <h6>VB + Access</h6>
              </span>
         </div>
       
        </div>
      </div>
     );
}
 
export default portafolio;