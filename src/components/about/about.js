import React from 'react'
import '../about/about.css'
import Picto from '../../images/somePicto.png'
import Group from '../../images/workgroup.png'
const keyTest = "https://whsfiles.blob.core.windows.net/koodoni/TEST%20CONDUCTUAL.pdf?sp=r&st=2021-03-03T01:39:10Z&se=2023-03-03T09:39:10Z&sv=2020-02-10&sr=b&sig=Sn5grfd2Sml1iiTIyOqtpGRLdpxWUTlgkHqnrM7NRRE%3D"
const About = () =>
{
    
    return (
       <>
       <div className="row" id="acerca">
    
            <div className="col-1">
                <img src={Picto} className="imgAcerca"/>
            </div>
            <div className="col-2">
               <aside >
                 <p className="textTitle">Soy Uriel Sanchez</p>  
                 <p className="textSubTitle"> Desarrollador</p>
                 <p className="text">Cuento con experiencia en los diferentes ciclos de vida del software. Manejando
                    requerimientos y aspectos de diseño del front-end, asi como back-end.
                 </p>
                 <p className="text">
                    Titulado en Ingenieria en Tecnologias de la Informacion, considero tener un
                    pensamiento logico y analitico. Ademas de conocer referencias como "sasageyo"
                    y hasta "soy tu padre". Pero puedes conocer mas de mis aptitudes <a href={keyTest} target="_blank">aqui.</a>
                 </p>
               
               </aside>
            </div>
          
        </div>
            

        <div className="row banner_exp">
            <div className="col-1-reverse">
                <aside >
                    <p className="textSubTitle"> Mi Experiencia</p>
                    <p className="text">Gran parte de mi experiencia ha sido desarrollando interfaces y procesos 
                        para el sector bancario. Donde aprendí a colaborar con todo el equipo y a crear una estrecha 
                        comunicación con el usuario final para encontrar aquilatar sus necesidades.
                        Adecuándolas a las aplicaciones y a los procesos.

                    </p>
                    <p className="text">
                    También adquirí experiencia trabajando en proyectos para importantes empresas de la mano   
                    de partners Certificados de Microsoft y sus sistemas de ERP y CRM. Así como el manejo de herramientas 
                    de Azure Cloud. Puedes ver algunos de los ejemplos en mi portafolio.

                    </p>
                    
                </aside>
            </div>

            <div className="col-2-reverse">
                <img src={Group}  className="imgAcerca"/>
            </div>

        </div>
       </> 
    );
}

export default About;