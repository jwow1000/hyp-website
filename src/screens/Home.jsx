import "./Home.css";
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <div id="homeContainer-Home">
        <div className='grayBox-Home' id="whoWeAre-Home"> 
            <NavLink  > Who We Are </NavLink>
                <ul>
                    <li> Overall Vision </li>
                    <li> Manifesto </li>
                </ul>
        </div>
    </div>
  )
}

export default Home