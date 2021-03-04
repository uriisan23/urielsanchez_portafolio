import React from 'react'
import csharp from '../pics/csharp.png'
import php from '../pics/php.png'
import html from '../pics/html_css3.jpg'
import sql from '../pics/MySQL.png'
import tsql from '../pics/Tsql-icon.png'
import js from '../pics/js.png'


const lenguajes = () => {
    return ( 
     <div className="bannerSkill" >
       <img src={csharp} alt="C #" className="imgSkill" id="item"/>
       <img src={js} alt="Java Script" className="imgSkill"/>
       <img src={php} alt="" className="imgSkill"/>
       <img src={html} alt="" className="imgSkill"/>
       <img src={sql} alt="" className="imgSkill"/>
       <img src={tsql} alt="" className="imgSkill"/>
    </div>
     );
}
 
export default lenguajes;