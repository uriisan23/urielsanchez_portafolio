import React from 'react'
import reactIcon from '../pics/reactjs.png'
import boot from '../pics/bootstrap.png'
import net from '../pics/netFrame.png'


const frameworks = () => {
    return (
        <>
        <div className="bannerSkill" id="item">
                <img src={reactIcon} alt="C #" className="imgSkill"/>
                <img src={boot} alt="Java Script" className="imgSkill"/>
                <img src={net} alt="" className="imgSkill"/>
        </div>
         </>
     );
}
 
export default frameworks;