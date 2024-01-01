import React, { Component, useState } from "react";
import "../css/Item.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";

function MyVerticallyCenteredModal(props) {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Aperçu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.image} className="w-100" />
                    {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
                </Modal.Body>
            </Modal>
        </div>
    );
}

function Item(props) {
    const [hovering, setHovering] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleShow = () => setOpen(!open);
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    return (
        <div
            style={{ height: isTabletOrMobile ? "60vh" : "", backgroundImage: `url(${props.project.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className={`item ${hovering ? "item-hover" : ""}`}
            onMouseEnter={() => {
                setHovering(true);
            }}
            onMouseLeave={() => {
                setHovering(false);
            }}
            onClick={() => {
                setOpen(true);
            }}
        >
            <div className={hovering && props.parent === true ? "item-text" : "hidden"}>
                <p className="item-title">{props.project.title}</p>
                <p className="text-hover">{props.project.text}</p>
            </div>

            {props.parent === false && (
                <MyVerticallyCenteredModal
                    image={props.project.src}
                    show={open}
                    onHide={() => {
                        handleShow();
                        console.log("open ->", open);
                    }}
                />
            )}
        </div>
    );
}

export default Item;
