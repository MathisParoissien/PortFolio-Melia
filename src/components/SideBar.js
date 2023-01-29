import { Container, Row, Col, NavLink } from 'react-bootstrap';
import '../css/Text.css';
import Caroussel from './Caroussel'
import '../App.css';
import { BsInstagram } from 'react-icons/bs';
import ContactButton from './MailButton';
import LinkedinButton from './Linkedin';
import InstagramButton from './InstagramButton';

function SideBar() {
    const location = window.location.pathname
    return (
        <div>
            <div className='container-title-navBar text'>
            <h1>PORTFOLIO</h1>
            <h2>Mélia Tosolini</h2>
          </div>
            <div className='bar text'>
                <NavLink href='/'>
                    <span className={ location === '/' ? 'text-navBar underline-left active' : 'text-navBar underline-left' }>
                        Accueil
                    </span>
                </NavLink>
                <NavLink href='/projects'>
                    <span className={ location.includes("projects") ? 'text-navBar underline-left active' : 'text-navBar underline-left' }>
                        Projets Scolaires
                    </span>
                </NavLink>
                <NavLink href='/stylism'>
                    <span className={ location.includes("stylism") ? 'text-navBar underline-left active' : 'text-navBar underline-left' }>
                        Stylisme
                    </span>
                </NavLink>
                <NavLink href='/technic'>
                <span className={ location.includes("technic") ? 'text-navBar underline-left active' : 'text-navBar underline-left' }>
                    Dessins Techniques
                </span>
                </NavLink>
                <NavLink href='/moulage'>
                <span className={ location.includes("moulage") ? 'text-navBar underline-left active' : 'text-navBar underline-left' }>
                    Moulage
                </span>
                </NavLink>
                <NavLink href='/about'>
                <span className={ location.includes("about") ? 'text-navBar underline-left active' : 'text-navBar underline-left' }>
                    About me
                </span>
                </NavLink>
            </div>    
            <div className='footer'>
                <span className='container-icons'>
                  <LinkedinButton/>
                  <InstagramButton/>
                  <ContactButton />
                </span>
                  
                <span>
                Mélia Tosolini
                </span>
              <span>Fait avec ❤️ à Marseille</span>
             
            </div>  
        </div>
    )
}

export default SideBar;