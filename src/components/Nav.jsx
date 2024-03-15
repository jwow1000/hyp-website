import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import "./Nav.css";


function Nav() {
  
  
  return (
    <div id="background-Nav">
      <NavLink 
        id="home-Nav" 
        to="/" 
        className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
      >
        <img 
          src="../../images/Logo_GOOEY_H_Soft2.png" 
          alt="hyp access logo" 
          id="navLogo-Nav"
        />
        <p className='link-Nav'>hyp + access</p>
      </NavLink>
      <div id="navContainer-Nav">

          <NavLink 
             to="/about" 
            className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
          >
              about
          </NavLink>

          <NavLink 
             to="/resources" 
            className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
          >
              resources
          </NavLink>

          <NavLink 
             to="/resarch" 
            className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
          >
              resarch
          </NavLink>

          <NavLink 
             to="/care" 
            className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
          >
              care
          </NavLink>

          <NavLink 
             to="/giving" 
            className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
          >
              giving
          </NavLink>

          
          
      </div>
    </div>
  )
}

export default Nav