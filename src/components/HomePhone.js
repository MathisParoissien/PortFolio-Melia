import React from "react";
import "../css/Text.css";
import { Container, NavLink } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Projects from "./Project";
import ReusableProject from "./projects/ReusableProject";
import { CarouselPhoneVariant } from "./Caroussel";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stylism from "./Stylism";
import Technic from "./Technic";
import Moulage from "./Moulage";
import About from "./About";
import n1 from "../assets/projects/noers/noers1.jpg";
import n2 from "../assets/projects/noers/noers2.jpg";
import n3 from "../assets/projects/noers/noers3.jpg";
import n4 from "../assets/projects/noers/noers4.jpg";
import n5 from "../assets/projects/noers/noers5.jpg";
import n6 from "../assets/projects/noers/noers6.jpg";
import n7 from "../assets/projects/noers/noers7.jpg";
import n8 from "../assets/projects/noers/noers8.jpg";
import n9 from "../assets/projects/noers/noers9.jpg";
import n10 from "../assets/projects/noers/noers10.jpg";
import n11 from "../assets/projects/noers/noers11.jpg";
import c1 from "../assets/projects/chanel/c1.jpg";
import c2 from "../assets/projects/chanel/c2.jpg";
import c3 from "../assets/projects/chanel/c3.jpg";
import c4 from "../assets/projects/chanel/c4.jpg";
import c5 from "../assets/projects/chanel/c5.jpg";
import c6 from "../assets/projects/chanel/c6.jpg";
import c7 from "../assets/projects/chanel/c7.jpg";
import c8 from "../assets/projects/chanel/c8.jpg";
import c9 from "../assets/projects/chanel/c9.jpg";
import ContactButton from "./MailButton";
import LinkedinButton from "./Linkedin";
import InstagramButton from "./InstagramButton";
import { useMediaQuery } from "react-responsive";

const noers = [
    { image: n1, title: "", text: "", xs: 6 },
    { image: n3, title: "", text: "", xs: 6 },
    { image: n10, title: "", text: "", xs: 6 },
    { image: n4, title: "", text: "", xs: 6 },
    { image: n5, title: "", text: "", xs: 6 },
    { image: n6, title: "", text: "", xs: 6 },
    { image: n7, title: "", text: "", xs: 6 },
    { image: n8, title: "", text: "", xs: 6 },
    { image: n9, title: "", text: "", xs: 6 },
    { image: n2, title: "", text: "", xs: 6 },
    { image: n11, title: "", text: "", xs: 6 },
];
const chanel = [
    { image: c1, title: "", text: "", xs: 3 },
    { image: c2, title: "", text: "", xs: 3 },
    { image: c3, title: "", text: "", xs: 3 },
    { image: c4, title: "", text: "", xs: 3 },
    { image: c5, title: "", text: "", xs: 3 },
    { image: c6, title: "", text: "", xs: 3 },
    { image: c7, title: "", text: "", xs: 3 },
    { image: c8, title: "", text: "", xs: 3 },
    { image: c9, title: "", text: "", xs: 3 },
];

function NavBarPhone() {
    const location = window.location.pathname;

    return (
        <>
            {[false].map((expand) => (
                <Navbar sticky="top" key={expand} bg="light" expand={expand} className="">
                    <Container fluid>
                        {/* <div className="container-title-navBar text">
                            <h1>PORTFOLIO</h1>
                            <h2>Mélia Tosolini</h2>
                        </div> */}
                        <Navbar.Brand className="text font" href="/">
                            PORTFOLIO Mearly
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {/* <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav> */}
                                <div className="bar text">
                                    <NavLink href="/">
                                        <span className={location === "/" ? "text-navBar underline-left active" : "text-navBar underline-left"}>Accueil</span>
                                    </NavLink>
                                    <NavLink href="/projects">
                                        <span className={location.includes("projects") ? "text-navBar underline-left active" : "text-navBar underline-left"}>
                                            Projets Scolaires
                                        </span>
                                    </NavLink>
                                    <NavLink href="/stylism">
                                        <span className={location.includes("stylism") ? "text-navBar underline-left active" : "text-navBar underline-left"}>Stylisme</span>
                                    </NavLink>
                                    <NavLink href="/technic">
                                        <span className={location.includes("technic") ? "text-navBar underline-left active" : "text-navBar underline-left"}>
                                            Dessins Techniques
                                        </span>
                                    </NavLink>
                                    <NavLink href="/moulage">
                                        <span className={location.includes("moulage") ? "text-navBar underline-left active" : "text-navBar underline-left"}>Moulage</span>
                                    </NavLink>
                                    <NavLink href="/about">
                                        <span className={location.includes("about") ? "text-navBar underline-left active" : "text-navBar underline-left"}>About me</span>
                                    </NavLink>
                                </div>
                                <div style={{ position: "absolute", bottom: 30, left: 15 }} className="footer w-100">
                                    <span className="container-icons">
                                        <LinkedinButton />
                                        <InstagramButton />
                                        <ContactButton />
                                    </span>

                                    <span>Mélia Tosolini</span>
                                    <span>Fait avec ❤️ à Marseille</span>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

function HomePhone() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }

    const images = importAll(require.context("../assets/projects/j/", false, /\.(png|jpe?g|svg)$/));
    const imagesP = importAll(require.context("../assets/projects/precieuses/", false, /\.(png|jpe?g|svg)$/));
    const imagesL = importAll(require.context("../assets/projects/levis/", false, /\.(png|jpe?g|svg)$/));
    const imagesM = importAll(require.context("../assets/projects/maritas/", false, /\.(png|jpe?g|svg)$/));
    const imagesB = importAll(require.context("../assets/projects/buffalo/", false, /\.(png|jpe?g|svg)$/));
    const imagesE = importAll(require.context("../assets/projects/elsa/", false, /\.(png|jpe?g|svg)$/));

    const imageArray = Object.values(images);
    const arrayP = Object.values(imagesP);
    const arrayL = Object.values(imagesL);
    const arrayM = Object.values(imagesM);
    const arrayB = Object.values(imagesB);
    const arrayE = Object.values(imagesE);

    const jacquemus = imageArray.map((img) => ({
        image: img,
        title: "",
        text: "",
        xs: 6,
    }));

    const prec = arrayP.map((img) => ({
        image: img,
        title: "",
        text: "",
        xs: 6,
    }));

    const maritas = arrayM.map((img) => ({
        image: img,
        title: "",
        text: "",
        xs: 6,
    }));

    const levis = arrayL.map((img) => ({
        image: img,
        title: "",
        text: "",
        xs: 4,
    }));

    const buffalo = arrayB.map((img) => ({
        image: img,
        title: "",
        text: "",
        xs: 6,
    }));
    const elsa = arrayE.map((img) => ({
        image: img,
        title: "",
        text: "",
        xs: 3,
    }));

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    return (
        <div>
            <NavBarPhone style={{ position: "absolute", top: 0, left: 0 }} />
            <Routes>
                <Route path="/" element={<CarouselPhoneVariant />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/noers" element={<ReusableProject items={noers} title={"NOERS"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/buffalo" element={<ReusableProject items={buffalo} title={"BUFFALO X BILLIE ELISH"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/chanel" element={<ReusableProject items={chanel} title={"CHANEL"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/jacquemus" element={<ReusableProject items={jacquemus} title={"JACQUEMUS"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/precieuses" element={<ReusableProject items={prec} title={"LES PRECIEUSES"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/levis" element={<ReusableProject items={levis} title={"LEVIS"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/maritas" element={<ReusableProject items={maritas} title={"MARITAS"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/projects/elsa" element={<ReusableProject items={elsa} title={"ELSA HANCE"} isTabletOrMobile={isTabletOrMobile} />} />
                <Route path="/stylism" element={<Stylism />} />
                <Route path="/technic" element={<Technic />} />
                <Route path="/moulage" element={<Moulage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default HomePhone;
