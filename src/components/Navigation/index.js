import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './navigation.css'



export const NavigationBar = ()=> (
    <div className="container-fluid">
        <Navbar className="navigation__container" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#NavigationBar">Redux Puppies</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default NavigationBar;