import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../css/Text.css";
import Caroussel from "./Caroussel";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SideBar from "./SideBar";
import InstagramButton from "./InstagramButton";
import Projects from "./Project";
import ReusableProject from "./projects/ReusableProject";
import Stylism from "./Stylism";
import Technic from "./Technic";
import Moulage from "./Moulage";
import About from "./About";
import { useMediaQuery } from "react-responsive";
import HomePhone from "./HomePhone";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { formatUrl } from "../formatUrl";
import Autres from "./Autres";

function Home() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const fetchedImages = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        image: data.image,
                        alt: data.titre,
                        titre: data.titre,
                        desc: data.desc,
                        taille: data.taille,
                    };
                });
                console.log(fetchedImages);
                setImages(fetchedImages);
            } catch (e) {
                console.log(`Error fetching data: ${e}`);
            }
        };

        fetchImages();
    }, []);

    return (
        <BrowserRouter>
            <div>
                {!isTabletOrMobile ? (
                    <Container fluid>
                        <Row>
                            <Col xs={3} style={{ height: "100vh", textAlign: "left" }}>
                                <SideBar />
                            </Col>
                            <Col xs={9} style={{ height: "100vh" }} className="p-0">
                                <Routes>
                                    <Route path="/" element={<Caroussel />} />
                                    <Route path="/projects" element={<Projects />} />
                                    {/* TODO: faire les routes en fonction du firebase projects */}
                                    {/* <Route path="/projects/noers" element={<ReusableProject items={noers} title={"NOERS"} />} />
                                    <Route path="/projects/buffalo" element={<ReusableProject items={buffalo} title={"BUFFALO X BILLIE ELISH"} />} />
                                    <Route path="/projects/chanel" element={<ReusableProject items={chanel} title={"CHANEL"} />} />
                                    <Route path="/projects/jacquemus" element={<ReusableProject items={jacquemus} title={"JACQUEMUS"} />} />
                                    <Route path="/projects/precieuses" element={<ReusableProject items={prec} title={"LES PRECIEUSES"} />} />
                                    <Route path="/projects/levis" element={<ReusableProject items={levis} title={"LEVIS"} />} />
                                    <Route path="/projects/maritas" element={<ReusableProject items={maritas} title={"MARITAS"} />} />
                                    <Route path="/projects/elsa" element={<ReusableProject items={elsa} title={"ELSA HANCE"} />} /> */}
                                    {/* <Route path="/stylism" element={<Stylism />} /> */}
                                    <Route path="/technic" element={<Technic />} />
                                    <Route path="/moulage" element={<Moulage />} />
                                    <Route path="/autres" element={<Autres />} />
                                    <Route path="/about" element={<About />} />

                                    <Route path="/projects/:titre" element={<ReusableProject isProject />} />
                                    <Route path="/autres/:titre" element={<ReusableProject />} />

                                    {/* {images.map((image, index) => (
                                        <Route key={index} path={"/projects/" + formatUrl(image.titre)} element={<ReusableProject items={images} title={image.titre} />} />
                                    ))} */}
                                </Routes>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <HomePhone />
                )}
            </div>
        </BrowserRouter>
    );
}

export default Home;
