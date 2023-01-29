import { Container, Row, Col } from 'react-bootstrap';
import '../css/Text.css';
import Caroussel from './Caroussel'
import '../App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SideBar from './SideBar';
import InstagramButton from './InstagramButton';
import Projects from './Project';
import Noers from './projects/Noers';
import Buffalo from './projects/Buffalo';
import ReusableProject from './projects/ReusableProject';
import n1 from '../assets/projects/noers/noers1.jpg'
import n2 from '../assets/projects/noers/noers2.jpg'
import n3 from '../assets/projects/noers/noers3.jpg'
import n4 from '../assets/projects/noers/noers4.jpg'
import n5 from '../assets/projects/noers/noers5.jpg'
import n6 from '../assets/projects/noers/noers6.jpg'
import n7 from '../assets/projects/noers/noers7.jpg'
import n8 from '../assets/projects/noers/noers8.jpg'
import n9 from '../assets/projects/noers/noers9.jpg'
import n10 from '../assets/projects/noers/noers10.jpg'
import n11 from '../assets/projects/noers/noers11.jpg'
import c1 from '../assets/projects/chanel/c1.jpg'
import c2 from '../assets/projects/chanel/c2.jpg'
import c3 from '../assets/projects/chanel/c3.jpg'
import c4 from '../assets/projects/chanel/c4.jpg'
import c5 from '../assets/projects/chanel/c5.jpg'
import c6 from '../assets/projects/chanel/c6.jpg'
import c7 from '../assets/projects/chanel/c7.jpg'
import c8 from '../assets/projects/chanel/c8.jpg'
import c9 from '../assets/projects/chanel/c9.jpg'
import Stylism from './Stylism';
import Technic from './Technic';
import Moulage from './Moulage';
import About from './About';

// import * as images from '../assets/projects/j/*';

const noers = [{image: n1,title: '',text: '',xs: 6,},{image: n3,title: '',text: '',xs: 6,},{image: n10,title: '',text: '',xs: 6,},{image: n4,title: '',text: '',xs: 6,}, { image: n5, title: '', text: '', xs: 6 }, { image: n6, title: '', text: '', xs: 6 }, { image: n7, title: '', text: '', xs: 6 }, { image: n8, title: '', text: '', xs: 6 }, { image: n9, title: '', text: '', xs: 6 }, { image: n2, title: '', text: '', xs: 6 }, { image: n11, title: '', text: '', xs: 6 }, ]
// const buffalo = [
//   { image: b2, title: '', text: '', xs: 6 }, { image: b3, title: '', text: '', xs: 6 },{ image: b4, title: '', text: '', xs: 6 },{ image: b5, title: '', text: '', xs: 6 },{ image: b6, title: '', text: '', xs: 6 },{ image: b7, title: '', text: '', xs: 6 },,{ image: b8, title: '', text: '', xs: 6 },
//   {
//     image: b1,
//     title: '',
//     text: '',
//     xs: 6,
//   }, 
// ]
const chanel = [ { image: c1, title: '', text: '', xs: 3 }, { image: c2, title: '', text: '', xs: 3 }, { image: c3, title: '', text: '', xs: 3 }, { image: c4, title: '', text: '', xs: 3 }, { image: c5, title: '', text: '', xs: 3 }, { image: c6, title: '', text: '', xs: 3 }, { image: c7, title: '', text: '', xs: 3 }, { image: c8, title: '', text: '', xs: 3 }, { image: c9, title: '', text: '', xs: 3 }, ]

// const imageArray = Object.values(images);


function Home() {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/projects/j/', false, /\.(png|jpe?g|svg)$/));
  const imagesP = importAll(require.context('../assets/projects/precieuses/', false, /\.(png|jpe?g|svg)$/));
  const imagesL = importAll(require.context('../assets/projects/levis/', false, /\.(png|jpe?g|svg)$/));
  const imagesM = importAll(require.context('../assets/projects/maritas/', false, /\.(png|jpe?g|svg)$/));
  const imagesB = importAll(require.context('../assets/projects/buffalo/', false, /\.(png|jpe?g|svg)$/));
  const imagesE = importAll(require.context('../assets/projects/elsa/', false, /\.(png|jpe?g|svg)$/));

  const imageArray = Object.values(images);
  const arrayP = Object.values(imagesP)
  const arrayL = Object.values(imagesL)
  const arrayM = Object.values(imagesM)
  const arrayB = Object.values(imagesB)
  const arrayE = Object.values(imagesE)

  const jacquemus = imageArray.map((img) => (
    {
      image: img,
      title: '',
      text: '',
      xs: 6,
    }
  ));

  const prec = arrayP.map((img) => (
    {
      image: img,
      title: '',
      text: '',
      xs: 6,
    }
  ));

  const maritas = arrayM.map((img) => (
    {
      image: img,
      title: '',
      text: '',
      xs: 6,
    }
  ));

  const levis = arrayL.map((img) => (
    {
      image: img,
      title: '',
      text: '',
      xs: 4,
    }
  ));

  const buffalo = arrayB.map((img) => (
    {
      image: img,
      title: '',
      text: '',
      xs: 6,
    }
  ));
  const elsa = arrayE.map((img) => (
    {
      image: img,
      title: '',
      text: '',
      xs: 3,
    }
  ));

  return (
    <BrowserRouter>
    <div>
      <Container fluid>
        <Row>
          <Col xs={3} style={{ height: '100vh', textAlign: 'left' }}>
          {/* <Col xs={3} style={{ background: '#f2e9e4', height: '100vh', textAlign: 'left' }}></Col> */}
              <SideBar/>
          </Col>
          <Col xs={9} style={{ height: '100vh'} } className='p-0'>
          {/* <Col xs={9} style={{ background: '#f2e9e4', height: '100vh'} } className='p-0'> */}
            <Routes>
              <Route path='/' element={<Caroussel/>} />
              <Route path='/projects' element={ <Projects/> }/>
              <Route path='/projects/noers' element={ <ReusableProject items={noers} title={'NOERS'}/> }/> 
              <Route path='/projects/buffalo' element={ <ReusableProject items={buffalo} title={'BUFFALO X BILLIE ELISH'}/> }/>
              <Route path='/projects/chanel' element={ <ReusableProject items={chanel} title={'CHANEL'}/> }/>
              <Route path='/projects/jacquemus' element={ <ReusableProject items={jacquemus} title={'JACQUEMUS'}/> }/>
              <Route path='/projects/precieuses' element={ <ReusableProject items={prec} title={'LES PRECIEUSES'}/> }/>
              <Route path='/projects/levis' element={ <ReusableProject items={levis} title={'LEVIS'}/> }/>
              <Route path='/projects/maritas' element={ <ReusableProject items={maritas} title={'MARITAS'}/> }/>
              <Route path='/projects/elsa' element={ <ReusableProject items={elsa} title={'ELSA HANCE'}/> }/>
              <Route path='/stylism' element={ <Stylism/> }/>
              <Route path='/technic' element={ <Technic/> }/>
              <Route path='/moulage' element={ <Moulage/> }/>
              <Route path='/about' element={ <About/> }/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
   </BrowserRouter>
  );
}

export default Home;