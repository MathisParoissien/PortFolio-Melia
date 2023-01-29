// import React from 'react';
// import '../../css/Projects.css';
// import { Container, Row, Col, Card, NavLink } from 'react-bootstrap';
// import Item from '../Item';
// import { BsArrowLeft } from 'react-icons/bs';
// import b1 from '../../assets/projects/buffalo/b1.jpg'
// import b2 from '../../assets/projects/buffalo/b2.jpg'
// import b3 from '../../assets/projects/buffalo/b3.jpg'
// import b4 from '../../assets/projects/buffalo/b4.jpg'
// import b5 from '../../assets/projects/buffalo/b5.jpg'
// import b6 from '../../assets/projects/buffalo/b6.jpg'
// import b7 from '../../assets/projects/buffalo/b7.jpg'
// import b8 from '../../assets/projects/buffalo/b8.jpg'
// import b9 from '../../assets/projects/buffalo/b9.jpg'

// const noers = [
//     { image: b2, title: '', text: '', xs: 6 }, { image: b3, title: '', text: '', xs: 6 },{ image: b4, title: '', text: '', xs: 6 },{ image: b5, title: '', text: '', xs: 6 },{ image: b6, title: '', text: '', xs: 6 },{ image: b7, title: '', text: '', xs: 6 },,{ image: b8, title: '', text: '', xs: 6 },
//     {
//       image: b1,
//       title: '',
//       text: '',
//       xs: 6,
//     }, { image: b9, title: '', text: '', xs:6 }
    
//   ]
  
//   const Buffalo = () => {
//       return (
//           <Container fluid className='project-container'>

//             <div style={{ paddingTop: '5vh' , display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
//                 <NavLink href={'/projects'}>
//                     <BsArrowLeft size={25}/>
//                 </NavLink>
//                 <h1 className='font' style={{paddingLeft: '10vh'}}>BILLIE EILISH X BUFFALO</h1>
//                 <div></div>
//                 <div></div>
//             </div>

//           <Row style={{ marginBottom: '20px'}}>
//           {noers.map((p, index) => (
//             <Col xs={p.xs}>
//               <Item project={p}/>
//             </Col>
           
//           ))}
//             </Row>
//             </Container>
//       )
//   }
  
//   export default Buffalo;