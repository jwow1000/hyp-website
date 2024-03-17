import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';

function Layout(props) {
  
  return (
    <div id='container-Layout'>
      <Nav/>
      <div id="body-Layout" >
          {props.children}
      </div>
      
      <Footer/>
    </div>
  )
}

export default Layout;