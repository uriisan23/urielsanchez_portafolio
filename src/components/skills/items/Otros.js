import React from 'react'
import github from '../pics/github.png'
import git from '../pics/Git.png'
import ms365 from '../pics/ms365.png'
import office from '../pics/MSoffice.png'
import ai from '../pics/ai.jpg'

const otros = () => {
    return ( 
        <div className="bannerSkill" id="item">
        <img src={github} alt="GitHub" className="imgSkill"/>
        <img src={git} alt="Git" className="imgSkill"/>
        <img src={ms365} alt="365 FO" className="imgSkill"/>
        <img src={office} alt="MS Office" className="imgSkill"/>
        <img src={ai} alt="Ilustrator" className="imgSkill"/>
    </div>);
}
 
export default otros;