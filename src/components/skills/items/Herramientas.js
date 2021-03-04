import React from 'react'
import azure from '../pics/Azure.png'
import bi from '../pics/PowerBI.png'
import vs from '../pics/vs.jpg'
import jq from '../pics/jquery.jpg'
import ajax from '../pics/ajax.jpg'

const herramientas = () => {
    return (
        <div className="bannerSkill" id="item">
            <img src={vs} alt="Visual Studio" className="imgSkill"/>
            <img src={azure} alt="Azure" className="imgSkill"/>
            <img src={bi} alt="Power BI" className="imgSkill"/>
            <img src={jq} alt="JQuery" className="imgSkill"/>
            <img src={ajax} alt="Ajax" className="imgSkill"/>
        </div>);
}

export default herramientas;