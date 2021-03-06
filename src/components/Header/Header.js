import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    const navStyle = { textDecoration: 'none', color: 'black', fontSize: '18px', marginRight: '20px', fontWeight: '500' };

    const navItemHover = { color: '#174873', borderBottom: '3px solid #174873' }

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light">
                <Container className="py-2">
                    <NavLink to="/home" style={navStyle}>
                        <img className="w-50" src={logo} alt="" />
                    </NavLink>
                    <Nav>
                        <NavLink to="/home" style={navStyle} activeStyle={navItemHover}>Home</NavLink>
                        <NavLink to="/services" style={navStyle} activeStyle={navItemHover}>Services</NavLink>
                        <NavLink to="/about" style={navStyle} activeStyle={navItemHover}>About Us</NavLink>
                        <NavLink to="/contact" style={navStyle} activeStyle={navItemHover}>Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;