import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/prime-logo.png'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {

    //check user exist or not;
    const { user,loading } = useContext(AuthContext)
    console.log(user)

    if(loading){
        return <div>Loading....</div>
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                    />
                    <span className='ms-2 display-6'>Tech Store</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/store">Store</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        {
                            user ?
                                <>
                                    <Link to="/login"><Button variant="success">Profile</Button></Link>
                                    <Link to="/login"><Button className='ms-2' variant="secondary">Logout</Button></Link>
                                </>
                                :
                                <>
                                    <Link to="/login"><Button variant="secondary">Login</Button></Link>
                                </>
                        }

                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
