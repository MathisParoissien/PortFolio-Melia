import React, { useEffect, useState } from "react";
import "../css/Projects.css";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import Item from "./Item";
import { useMediaQuery } from "react-responsive";
import { db } from "../firebase/firebase"; // Assurez-vous que ce chemin est correct
import { collection, getDocs } from "firebase/firestore";

const Technic = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "dessin"));
                const fetchedImages = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        src: data.image, // Use the correct field name based on your Firestore document
                        alt: "", // 'titre' is the field name for title in your Firestore
                        title: "",
                        text: "",
                        taille: data.taille,
                        tag: data.tag || "",
                        // href: data.href, // Add this if you have a field for href in your Firestore documents
                    };
                });
                setImages(fetchedImages);

                const queryCat = await getDocs(collection(db, "categories"));
                const fetchedTag = queryCat.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        tag: data.tag,
                        name: data.name,
                    };
                });

                console.log(fetchedTag);
                setCategories(fetchedTag);
            } catch (e) {
                console.log(`Error fetching data: ${e}`);
            }
        };

        fetchImages();
    }, []);

    const filteredImages = images.filter((image) => {
        return !selectedCategory || (image.tag && String(image.tag) === selectedCategory);
    });

    return (
        <Container fluid className="project-container">
            <h1 className="font mt-4">Dessins Techniques</h1>
            {/* Sélecteur de catégories */}
            <Row className="justify-content-center m-4">
                <Col xs={12} md={6}>
                    <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Toutes les catégories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.tag} className="font">
                                {category.name}
                            </option>
                        ))}
                    </select>
                </Col>
            </Row>

            {/* Contenu filtré ou complet */}
            {isTabletOrMobile ? (
                <div>
                    <Row style={{ marginRight: "0px", marginBottom: "20px" }}>
                        {filteredImages.map((image, index) => (
                            <Col key={index} className="w-100">
                                <Item project={image} parent={false} />
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (
                <div>
                    <Row style={{ marginRight: "0px", marginBottom: "20px" }}>
                        {filteredImages.map((image, index) => (
                            <Col key={index} xs={image.taille}>
                                <Item project={image} parent={false} />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default Technic;
