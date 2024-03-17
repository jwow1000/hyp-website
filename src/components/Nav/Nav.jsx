import {NavLink} from 'react-router-dom';
import logo from '../../images/Logo_GOOEY_H_Soft2.png';
import "./Nav.css";


function Nav() {
  
  
  return (
    <div id="background-Nav">
      <NavLink 
        id="homeLogo-Nav" 
        to="/" 
        className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
      >
        <img 
          src={logo}
          alt="hyp access logo" 
          id="logoImg-Nav"
        />
      </NavLink>
      
      <NavLink
        id="logoLabel-Nav"
        to="/" 
        className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')} 
      >
        hyp+access
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
             to="/research" 
            className={({ isActive }) => (isActive ? 'active-Nav' : 'link-Nav')}
          >
              research
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