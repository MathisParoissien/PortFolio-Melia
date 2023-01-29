import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col, Card, NavLink } from 'react-bootstrap';
import Item from './Item';
import project1 from '../assets/projects/project1.jpg'
import project2 from '../assets/projects/project2.jpg'
import project3 from '../assets/projects/project3.jpg'
import project4 from '../assets/projects/project4.jpg'
import project5 from '../assets/projects/project5.jpg'
import project6 from '../assets/projects/project6.jpg'
import project7 from '../assets/projects/project7.PNG'
import project8 from '../assets/projects/project8.jpg'

const projects = [
  {
    image: project6,
    title: "LEVIS",
    text: "Comprendre la démarche créative d'une marque d'un \"produit mode\" à la différence de celle d'une maison de couture crée par un \"artiste mode\".",
    xs: 3,
    href: 'levis'
  },
  {
    image: project1,
    title: "BUFFALO X BILLIE ELISH",
    text: "",
    xs: 6,
    href: 'buffalo'
  },
  {
    image: project2,
    title: "CHANEL",
    text: "« soit en Chanel sans porter du chanel » projet démarche créative shooting photo dans les rues de Marseille afin de développer notre sens du style et la mise en scène de nos univers mélangés a celui de Chanel.  ",
    xs: 3,
    href: 'chanel'
  },
  {
    image: project4,
    title: "JACQUEMUS",
    text: "Création d’une capsule contenant 15 pièces pour la marque de notre choix, en respectant l’univers de la marque et faisant une étude marketing également.",
    xs: 7,
    href: 'jacquemus'
  },
  {
    image: project5,
    title: "LES PRECIEUSES",
    text: "Création d’une marque de lingerie durant une année entière. Création de prototype de lingerie INCLUSIVE. Shooting photo.",
    xs: 5,
    href: 'precieuses'
  },
  
  {
    image: project7,
    title: "MARITAS",
    text: "WORKSHOP , créer une marque sur un thème choisit par le groupe. Dans un temps imparti de 15 jours. Avec création textile, graphique, marketing et informatique.",
    xs: 3,
    href: 'maritas'
  },
  {
    image: project3,
    title: 'NOERS',
    text: 'Création d’une marque tout le long de l’année. (Le nom de la marque, La direction stylistique du produit, L\'ambiance par des moodboards, Le persona, L\'égérie.)',
    xs: 6,
    href: 'noers'
  },
  {
    image: project8,
    title: 'ELSA HANCE',
    text: 'Création d’une pièce upcyclée dans un temps imparti de 15 jours, avec création textile, dessin technique, shooting photo.',
    xs: 3,
    href: 'elsa'
  },
]

const Projects = () => {
    return (
        <Container fluid className='project-container'>
        <Row style={{ marginRight: '0px', marginBottom: '20px'}}>
        {projects.map((p, index) => (
          <Col xs={p.xs}>
          <NavLink href={'/projects/' + p.href}>
         
            <Item project={p} parent={true}/>
            </NavLink>
          </Col>
         
        ))}
          </Row>
          </Container>
    )
}

export default Projects;