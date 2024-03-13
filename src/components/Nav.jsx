import {NavLink} from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <div id="navContainer-Nav">
        <NavLink id="home-Nav" className="link-Nav" to="/">home</NavLink>
        <NavLink className="link-Nav" to="/about">about</NavLink>
        <NavLink className="link-Nav" to="/resources">resources</NavLink>
        <NavLink className="link-Nav" to="/research">research</NavLink>
        <NavLink className="link-Nav" to="/care">care</NavLink>
        <NavLink className="link-Nav" to="/giving">giving</NavLink>
        
    </div>
  )
}

export default Nav