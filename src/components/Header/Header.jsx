import React, { useEffect } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/prime-logo.png'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {

    //check user exist or not;
    const { user, googleLogout } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user==null){
            navigate("/")
        }
    },[user])
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
                    </Nav>
                    <Navbar.Text>
                        {
                            user ?
                                <>
                                    <Image className='my-photo ms-2' src={user.photoURL} roundedCircle />
                                    <Link to="/user"><Button className='ms-2' variant="success">Profile</Button></Link>
                                    <Button className='ms-2' onClick={googleLogout} variant="danger">Logout</Button>
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
