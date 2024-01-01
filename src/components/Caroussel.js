import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-bootstrap";
import { db } from "../firebase/firebase"; // Assurez-vous que ce chemin est correct
import { collection, getDocs } from "firebase/firestore";
import { formatUrl } from "../formatUrl";

function DarkVariantExample() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "accueil"));
                const fetchedImages = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        src: data.image, // Use the correct field name based on your Firestore document
                        alt: data.titre, // 'titre' is the field name for title in your Firestore
                        title: data.titre,
                        text: data.desc, // 'desc' is the field name for description in your Firestore
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

    const captionStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Fond noir semi-transparent
        padding: "20px", // Rembourrage autour du texte
        borderRadius: "1px", // Bords arrondis (optionnel)
    };

    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <NavLink href={"/projects/" + formatUrl(image.title)}>
                        <img className="d-block imageTest" src={image.src} alt={image.alt} />
                    </NavLink>
                    <Carousel.Caption style={captionStyle}>
                        <h3 style={{ fontFamily: "Light" }}>{image.title}</h3>
                        <p style={{ fontFamily: "Regular" }}>{image.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default DarkVariantExample;
