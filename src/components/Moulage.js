import React, { useEffect, useState } from "react";
import "../css/Projects.css";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import Item from "./Item";
import { useMediaQuery } from "react-responsive";
import { db } from "../firebase/firebase"; // Assurez-vous que ce chemin est correct
import { collection, getDocs } from "firebase/firestore";

const Moulage = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "moulage"));
                const fetchedImages = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        src: data.image, // Use the correct field name based on your Firestore document
                        alt: data.titre, // 'titre' is the field name for title in your Firestore
                        title: data.titre,
                        text: data.desc,
                        taille: data.taille,
                        // href: data.href, // Add this if you have a field for href in your Firestore documents
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
                        Moulage
                    </h1>
                    {images.map((image, index) => (
                        <Col key={index} className="w-100" style={{ paddingBottom: "15px" }}>
                            <Item project={image} parent={false} />
                        </Col>
                    ))}
                </div>
            ) : (
                <Row style={{ marginRight: "0px", marginBottom: "20px" }}>
                    {images.map((image, index) => (
                        <Col key={index} className="w-100" style={{ paddingBottom: "15px" }}>
                            <Item project={image} parent={false} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Moulage;
