import React from 'react';
import '../../css/Projects.css';
import { Container, Row, Col, Card, NavLink } from 'react-bootstrap';
import Item from '../Item';
import { BsArrowLeft } from 'react-icons/bs';
import n1 from '../../assets/projects/noers/noers1.jpg'
import n2 from '../../assets/projects/noers/noers2.jpg'
import n3 from '../../assets/projects/noers/noers3.jpg'
import n4 from '../../assets/projects/noers/noers4.jpg'
import n5 from '../../assets/projects/noers/noers5.jpg'
import n6 from '../../assets/projects/noers/noers6.jpg'
import n7 from '../../assets/projects/noers/noers7.jpg'
import n8 from '../../assets/projects/noers/noers8.jpg'
import n9 from '../../assets/projects/noers/noers9.jpg'
import n10 from '../../assets/projects/noers/noers10.jpg'
import n11 from '../../assets/projects/noers/noers11.jpg'

const noers = [
    {
      image: n1,
      title: '',
      text: '',
      xs: 6,
    },
    {
        image: n3,
        title: '',
        text: '',
        xs: 6,
    },
    {
        image: n10,
        title: '',
        text: '',
        xs: 6,
    },
    {
        image: n4,
        title: '',
        text: '',
        xs: 6,
    }, { image: n5, title: '', text: '', xs: 6 }, { image: n6, title: '', text: '', xs: 6 }, { image: n7, title: '', text: '', xs: 6 }, { image: n8, title: '', text: '', xs: 6 }, { image: n9, title: '', text: '', xs: 6 }, { image: n2, title: '', text: '', xs: 6 }, { image: n11, title: '', text: '', xs: 6 }, 
  ]
  
  const Noers = () => {
      return (
          <Container fluid className='project-container'>

            <div style={{ paddingTop: '5vh' , display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <NavLink href={'/projects'}>
                    <BsArrowLeft size={25}/>
                </NavLink>
                <h1 className='font' style={{paddingLeft: '10vh'}}>NOERS</h1>
                <div></div>
                <div></div>
            </div>

          <Row style={{ marginBottom: '20px'}}>
          {noers.map((p, index) => (
            <Col xs={p.xs}>
              <Item project={p}/>
            </Col>
           
          ))}
            </Row>
            </Container>
      )
  }
  
  export default Noers;