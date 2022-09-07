import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const style = {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none',
    paddingRight: 10,
}

const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Agenda</Navbar.Brand>
                <Nav className="me-auto">
                    <Link style={style} to="/">Demo</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;