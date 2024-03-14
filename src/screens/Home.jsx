import "./Home.css";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div id="homeContainer-Home">
        <div className='bubble bubbleGray' id="whoWeAre-Home"> 
            <Link  > Who We Are </Link>
                <ul>
                    <li> Overall Vision </li>
                    <li> Manifesto </li>
                </ul>
        </div>

        <div className='bubble bubblePink' id="clinicPink-Home">
          <Link> Clinic Waitlist + Overview </Link>
        </div>
    </div>
  )
}

export default Home