import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col, Card, NavLink } from 'react-bootstrap';
import Item from './Item';
import a1 from '../assets/stylism/1.JPG'
import a2 from '../assets/stylism/2.PNG'
import a3 from '../assets/stylism/3.JPG'
import a4 from '../assets/stylism/4.PNG'
import a5 from '../assets/stylism/5.PNG'
import a6 from '../assets/stylism/6.PNG'
import a7 from '../assets/stylism/7.PNG'
import a8 from '../assets/stylism/8.PNG'
import a9 from '../assets/stylism/9.PNG'
import a10 from '../assets/stylism/10.PNG'
import a11 from '../assets/stylism/11.JPG'
import a12 from '../assets/stylism/12.jpg'

const projects = [
  {
    image: a12,
    title: '',
    text: '',
    xs: 3,
    href: ''
  },
   { image: a2, title: '', text: '', xs: 6, href: '' }, 
  { image: a3, title: '', text: '', xs: 3, href: '' }, 
  { image: a9, title: '', text: '', xs: 4, href: '' },
  { image: a10, title: '', text: '', xs: 4, href: '' },
  { image: a6, title: '', text: '', xs: 4, href: '' },
  { image: a7, title: '', text: '', xs: 4, href: '' },
  { image: a8, title: '', text: '', xs: 4, href: '' },
  { image: a11, title: '', text: '', xs: 4, href: '' },
  { image: a4, title: '', text: '', xs: 5, href: '' },
   { image: a5, title: '', text: '', xs: 7, href: '' },
   { image: a1, title: '', text: '', xs: 4, href: '' },
  
]

const Stylism = () => {
    return (
        <Container fluid className='project-container'>
        <Row style={{ marginRight: '0px', marginBottom: '20px'}}>
        {projects.map((p, index) => (
          <Col xs={p.xs}>
          {/* <NavLink href={'/stylism/' + p.href}> */}
         
            <Item project={p} parent={false}/>
            {/* </NavLink> */}
          </Col>
         
        ))}
          </Row>
          </Container>
    )
}

export default Stylism;