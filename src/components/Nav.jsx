import {NavLink} from 'react-router-dom';
import "./Nav.css";


function Nav() {
  return (
    <div id="background-Nav">
      <div id="navContainer-Nav">
          <NavLink id="home-Nav" className="link-Nav" to="/">
            <img 
              src="../../images/Logo_GOOEY_H_Soft2.png" 
              alt="hyp access logo" 
              id="navLogo-Nav"
            />
          </NavLink>

          <NavLink className="link-Nav" to="/about">about</NavLink>
          <NavLink className="link-Nav" to="/resources">resources</NavLink>
          <NavLink className="link-Nav" to="/research">research</NavLink>
          <NavLink className="link-Nav" to="/care">care</NavLink>
          <NavLink className="link-Nav" to="/giving">giving</NavLink>
          
      </div>
    </div>
  )
}

export default Nav