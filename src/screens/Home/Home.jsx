
import "./Home.css";
import {Link} from 'react-router-dom';

function Home() {
  return (
    
    <div id="homeContainer-Home">
        <div className='bubble bubbleGray' id="whoWeAre-Home"> 
            <Link className="linkYellow" > Who We Are </Link>
                <ul>
                    <li> Overall Vision </li>
                    <li> Manifesto </li>
                </ul>
        </div>

        <div className='bubble bubblePink' id="clinicPink-Home">
          <Link className="linkYellow"> Clinic Waitlist + Overview </Link>
        </div>

        <div className='bubble bubbleGray' id="whatIsHyp-Home">
          <Link className="linkYellow"> What is Hyp? </Link>
        </div>
    </div>
    
  )
}

export default Home