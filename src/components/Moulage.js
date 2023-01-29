import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col, Card, NavLink } from 'react-bootstrap';
import Item from './Item';
import a1 from '../assets/moulage/18.PNG'
import a2 from '../assets/moulage/21.PNG'
import a3 from '../assets/moulage/22.PNG'
import a4 from '../assets/moulage/IMG_2537.jpg'
import a5 from '../assets/moulage/IMG_5261.PNG'

const projects = [
  {
    image: a1,
    title: '',
    text: '',
    xs: 4,
    href: ''
  },
   { image: a2, title: '', text: '', xs: 4, href: '' }, 
  { image: a3, title: '', text: '', xs: 4, href: '' }, 
  { image: a4, title: '', text: '', xs: 4, href: '' }, 
  { image: a5, title: '', text: '', xs: 4, href: '' }, 
]

const Moulage = () => {
    return (
        <Container fluid className='project-container'>
        <Row style={{ marginRight: '0px', marginBottom: '20px'}}>
        {projects.map((p, index) => (
          <Col xs={p.xs}>         
            <Item project={p} parent={false}/>
          </Col>
         
        ))}
          </Row>
          </Container>
    )
}

export default Moulage;