import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaFacebook,FaGithub,FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-light text-center  p-3'>        
         <Nav.Link as={Link} to="/login"><FaFacebook/></Nav.Link>
         <Nav.Link as={Link} to="/login"><FaGithub/></Nav.Link>
         <Nav.Link as={Link} to="/login"><FaLinkedin/></Nav.Link>
           <p style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>© 2023 Copyright:Digital Edu.com</p>
        </div>
    );
};

export default Footer;