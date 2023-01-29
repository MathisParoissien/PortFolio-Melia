import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col, Card, NavLink } from 'react-bootstrap';
import Item from './Item';
import a1 from '../assets/technic/1.PNG'
import a2 from '../assets/technic/2.PNG'
import a3 from '../assets/technic/3.PNG'

const projects = [
  {
    image: a1,
    title: '',
    text: '',
    xs: 5,
    href: ''
  },
   { image: a2, title: '', text: '', xs: 5, href: '' }, 
  { image: a3, title: '', text: '', xs: 6, href: '' }, 
]

const Technic = () => {
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

export default Technic;