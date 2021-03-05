import React from 'react'
import '../skills/skills.css'
import {NavLink,Route,Switch} from 'react-router-dom'
import Lenguajes from '../skills/items/Lenguajes'
import Frames from '../skills/items/Frameworks'
import Herramientas from '../skills/items/Herramientas'
import Otros from '../skills/items/Otros'




const skills = (props) => {

    const isActive = () =>
    {
       let link = props.children;
          link.toLowerCase();
    
     return ((link) === props.Location.pathname)? "active":"inactive";
    }

    return ( 
        <>
  <div className="navMenu"  id="skills">
       <nav>
           <ul>
               <li className="List"><NavLink to="/lenguajes">LENGUAJES </NavLink></li>
               <li className="List"><NavLink to="/frameworks" >FRAMEWORKS</NavLink></li>
               <li className="List"><NavLink to="/herramientas">HERRAMIENTAS</NavLink></li>
               <li className="List"><NavLink to="/otros">OTROS</NavLink></li>
           </ul>
       </nav>

   </div>
   
   <div className="navMenu">
     <Switch>
         <Route exact path="/lenguajes"  component={Lenguajes}></Route>
         <Route exact path="/frameworks" component={Frames}></Route>
         <Route exact path="/herramientas" component={Herramientas}></Route>
         <Route exact path="/otros" component={Otros}></Route>
         <Route component={Lenguajes}></Route>
     </Switch>
    
   </div>
 </>

     );
}

 
export default skills;
