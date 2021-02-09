import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './navigation.css'



export const NavigationBar = ({history})=> (
    <div className="container-fluid">
        <Navbar className="navigation__container" collapseOnSelect expand="lg">
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={()=> history.push('/')}>Redux Puppies</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link onClick={()=> history.push('/login')}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default withRouter(NavigationBar);