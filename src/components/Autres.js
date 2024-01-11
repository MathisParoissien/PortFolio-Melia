import React, { useEffect, useState } from "react";
import "../css/Projects.css";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import Item from "./Item";
import { useMediaQuery } from "react-responsive";

import { db } from "../firebase/firebase"; // Assurez-vous que ce chemin est correct
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { formatUrl } from "../formatUrl";

const Autres = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Modifier la requête pour inclure le tri
                console.log("here");
                const querySnapshot = await getDocs(query(collection(db, "autre"), orderBy("tri")));

                const fetchedImages = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        image: data.image,
                        alt: data.titre,
                        titre: data.titre,
                        desc: data.desc,
                        taille: data.taille,
                        tri: data.tri || 0,
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
        <Container fluid className="project-container" style={{ paddingBottom: isTabletOrMobile ? "20vh" : "" }}>
            {isTabletOrMobile ? (
                <div>
                    <h1 style={{ paddingTop: "2.5vh" }} className="font">
                        Autres Projets
                    </h1>
                    {images.map((image, index) => (
                        <Col className="w-100" style={{ paddingBottom: "15px" }}>
                            <NavLink href={"/autres/" + formatUrl(image.titre)}>
                                <Item project={{ src: image.image, title: image.titre, text: image.desc, xs: image.taille, href: image.titre }} parent={true} />
                            </NavLink>
                        </Col>
                    ))}
                </div>
            ) : (
                <Row style={{ marginRight: "0px", marginBottom: "20px" }}>
                    {images.map((image, index) => (
                        <Col xs={image.taille} key={index}>
                            <NavLink href={"/autres/" + formatUrl(image.titre)}>
                                <Item project={{ src: image.image, title: image.titre, text: image.desc, xs: image.taille, href: image.titre }} parent={true} />
                            </NavLink>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Autres;
