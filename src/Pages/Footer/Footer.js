import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-light text-center p-4 mt-5'>
            <div className='px-5 mx-5 m-3  d-flex justify-content-evenly '>
                <Nav.Link as={Link} to="/register"><FaFacebook /></Nav.Link>
                <Nav.Link as={Link} to="/register"><FaGithub /></Nav.Link>
                <Nav.Link as={Link} to="/register"><FaLinkedin /></Nav.Link>

            </div>
            <p style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>© 2023 Copyright:Digital Edu.com</p>
        </div>
    );
};

export default Footer;