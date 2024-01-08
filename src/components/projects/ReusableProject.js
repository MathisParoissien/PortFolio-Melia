import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import Item from "../Item";
import { BsArrowLeft } from "react-icons/bs";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { formatUrl } from "../../formatUrl";

function ReusableProject({ isTabletOrMobile, isProject }) {
    const { titre } = useParams();
    const [project, setProject] = useState(null);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            const titreDecoded = decodeURIComponent(titre);
            // Charger tous les projets
            const projectsSnapshot = await getDocs(collection(db, "projects"));
            // Trouver le projet par son titre
            const projData = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).find((proj) => formatUrl(proj.titre) === titreDecoded); // Utilisez titreDecoded si nécessaire

            if (projData) {
                setProject(projData);
                // Charger les photos si la collection existe
                const photosCollectionRef = collection(db, "projects", projData.id, "photos");
                const photosSnapshot = await getDocs(photosCollectionRef);
                const photosList = photosSnapshot.docs.map((doc) => doc.data());
                setPhotos(photosList);
            } else {
                console.log("No such project!");
            }
        };

        const fetchOthers = async () => {
            console.log("test");
            const titreDecoded = decodeURIComponent(titre);
            // Charger tous les projets
            const projectsSnapshot = await getDocs(collection(db, "autre"));
            // Trouver le projet par son titre
            const projData = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).find((proj) => formatUrl(proj.titre) === titreDecoded); // Utilisez titreDecoded si nécessaire

            if (projData) {
                setProject(projData);
                // Charger les photos si la collection existe
                const photosCollectionRef = collection(db, "autre", projData.id, "photos");
                const photosSnapshot = await getDocs(photosCollectionRef);
                const photosList = photosSnapshot.docs.map((doc) => doc.data());
                setPhotos(photosList);
            } else {
                console.log("No such project!");
            }
        };

        if (isProject) {
            fetchProject();
        } else {
            fetchOthers();
        }
    }, [titre]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {!isTabletOrMobile ? (
                <Container fluid className="project-container">
                    <div style={{ paddingTop: "5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <NavLink href={"/projects"}>
                            <BsArrowLeft size={25} />
                        </NavLink>
                        <h1 className="font" style={{ paddingLeft: "10vh" }}>
                            {project.titre}
                        </h1>
                        <div></div>
                        <div></div>
                    </div>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="font" style={{ textAlign: "center" }}>
                                {project.desc}
                            </div>
                        </Col>
                        {photos.map((photo, index) => (
                            <Col xs={photo.taille} key={index}>
                                <Item project={{ src: photo.image, alt: "", title: "", text: "", taille: photo.taille }} parent={false} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <Container fluid style={{ paddingTop: "2.5vh" }}>
                    {/* ... mobile view */}
                </Container>
            )}
        </>
    );
}

export default ReusableProject;

// class ReusableProject extends Component {
//     render() {
//         return (
//             <>
//                 {!this.props.isTabletOrMobile ? (
//                     <Container fluid className="project-container">
//                         <div style={{ paddingTop: "5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                             <NavLink href={"/projects"}>
//                                 <BsArrowLeft size={25} />
//                             </NavLink>
//                             <h1 className="font" style={{ paddingLeft: "10vh" }}>
//                                 {this.props.title}
//                             </h1>
//                             <div></div>
//                             <div></div>
//                         </div>

//                         <Row style={{ marginBottom: "20px" }}>
//                             {this.props.items.map((p, index) => (
//                                 <Col xs={p.xs}>
//                                     <Item project={p} key={index} parent={false} />
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Container>
//                 ) : (
//                     <Container fluid style={{ paddingTop: "2.5vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
//                         <h1 className="font">{this.props.title}</h1>

//                         {/* {this.props.items.map((p, index) => (
//                             <Col className="w-100" style={{ paddingBottom: "15px" }}>
//                                 <Item project={p} key={index} parent={false} />
//                             </Col>
//                         ))} */}
//                     </Container>
//                 )}
//             </>
//         );
//     }
// }
// export default ReusableProject;
