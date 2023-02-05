import React from "react";
import { Document, Page } from "react-pdf";
import { useMediaQuery } from "react-responsive";
import cv from "./cv.png";

const About = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    return <div className="project-container">{isTabletOrMobile ? <img className="w-100" src={cv} /> : <img className="h-100" src={cv} />}</div>;
};

export default About;
