import Carousel from "react-bootstrap/Carousel";
import image from "../assets/carousel1.jpg";
import image2 from "../assets/carousel2.jpg";
import image3 from "../assets/carousel3.PNG";
import image4 from "../assets/carousel4.PNG";
import image5 from "../assets/carousel5.jpg";
import image6 from "../assets/carousel6.jpg";
import { Container, Row, Col, NavLink, Nav } from "react-bootstrap";

const images = [
    {
        src: image3,
        alt: "Image 3",
        title: "SHOOTING CHANEL",
        text: 'Shooting photo dans les rues de Marseille, le thème : " Sois Chanel sans porter du Chanel ".',
        href: "projects/chanel",
    },
    {
        src: image,
        alt: "Image 1",
        title: "LE BIÔME",
        text: "Création en crochet réalisée à l'occasion de la JPO Condé.",
        href: "stylism",
    },
    {
        src: image2,
        alt: "Image 2",
        title: "LES PRECIEUSES",
        text: "Création d’une marque de lingerie durant une année entière. Création de prototype de lingerie INCLUSIVE. Shooting photo.",
        href: "projects/precieuses",
    },
    {
        src: image4,
        alt: "Image 4",
        title: "ELSA HANCE",
        text: "Création d’une pièce upcyclée dans un temps imparti de 15 jours, avec création textile, dessin technique, shooting photo.",
        href: "projects/elsa",
    },
    {
        src: image5,
        alt: "Image 5",
        title: "LEVIS",
        text: 'Comprendre la démarche créative d\'une marque d\'un "produit mode" à la différence de celle d\'une maison de couture crée par un "artiste mode".',
        href: "projects/levis",
    },
];

function DarkVariantExample() {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <NavLink href={image.href}>
                        <img className="d-block imageTest" src={image.src} alt={image.alt} />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 style={{ fontFamily: "Light" }}>{image.title}</h3>
                        <p style={{ fontFamily: "Regular" }}>{image.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export function CarouselPhoneVariant() {
    return (
        <Carousel style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <NavLink href={image.href}>
                        <img className="d-block imageTest" src={image.src} alt={image.alt} />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 style={{ fontFamily: "Light" }}>{image.title}</h3>
                        <p style={{ fontFamily: "Regular" }}>{image.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default DarkVariantExample;
