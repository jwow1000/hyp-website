import { NavLink } from "react-router-dom";
import './Footer.css';

function Footer() {
  

  return (
    <div id='container-Footer'>
      <NavLink 
        className='navLinks-Footer'
        to='/'
      >
        home
      </NavLink>

    </div>
  )
}

export default Footer