import React from "react";
import "../../css/Projects.css";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import Item from "../Item";
import { BsArrowLeft } from "react-icons/bs";
import { Component } from "react";

class ReusableProject extends Component {
    render() {
        return (
            <>
                {!this.props.isTabletOrMobile ? (
                    <Container fluid className="project-container">
                        <div style={{ paddingTop: "5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <NavLink href={"/projects"}>
                                <BsArrowLeft size={25} />
                            </NavLink>
                            <h1 className="font" style={{ paddingLeft: "10vh" }}>
                                {this.props.title}
                            </h1>
                            <div></div>
                            <div></div>
                        </div>

                        <Row style={{ marginBottom: "20px" }}>
                            {this.props.items.map((p, index) => (
                                <Col xs={p.xs}>
                                    <Item project={p} key={index} parent={false} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                ) : (
                    <Container fluid style={{ paddingTop: "2.5vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <h1 className="font">{this.props.title}</h1>

                        {this.props.items.map((p, index) => (
                            <Col className="w-100" style={{ paddingBottom: "15px" }}>
                                <Item project={p} key={index} parent={false} />
                            </Col>
                        ))}
                    </Container>
                )}
            </>
        );
    }
}
export default ReusableProject;
