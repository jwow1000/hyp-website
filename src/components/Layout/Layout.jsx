import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';

function Layout(props) {
  
  return (
    <div className='container-Layout'>
      <Nav/>
      <div className="children-Layout">
          {props.children}
      </div>
      
      <Footer/>
    </div>
  )
}

export default Layout;