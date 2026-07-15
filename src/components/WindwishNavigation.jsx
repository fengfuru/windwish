import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function WindwishNavigation() {

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>windwish</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="commission">Commission</Nav.Link>
                        <Nav.Link as={Link} to="shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default WindwishNavigation;