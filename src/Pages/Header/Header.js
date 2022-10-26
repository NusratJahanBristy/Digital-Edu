import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';
// import Button from 'react-bootstrap/Button';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>Digital Edu</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Courses</Nav.Link>
            {/* <Nav.Link href="#features">Blog</Nav.Link> */}
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/faq">anywords</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid?
               <>
                <span>  {user?.displayName}</span>
                <Button variant='light' onClick={handleLogOut}>logout</Button>
               </>
                :
                <>
                <Link to ='/login'>Login</Link>
                <Link to ='/register'>Register</Link>
                </>
              }
           </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
            {user?.photoURL ?
                <Image style={{ height: '30px' }} roundedCircle
                 src={user?.photoURL}></Image>
                : <FaUser></FaUser>}

            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSide></LeftSide>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;