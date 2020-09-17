import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className='header'>

            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="#home" >
                    <img className="ml-5" style={{ width: '100px' }} src={require('../../images/Logo.png')} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="text-center" id="basic-navbar-nav" >

                    <Form className="m-auto" inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav className="m-auto">
                        <Nav.Link href="" className="m-2">News</Nav.Link>
                        <Nav.Link href="" className="m-2">Destination</Nav.Link>
                        <Nav.Link href="" className="m-2">Blog</Nav.Link>
                        <Nav.Link href="" className="m-2">Contact</Nav.Link>
                        {/* <Link to="logIn"> */}
                            <Button variant="primary" className="m-2">Log In</Button>
                        {/* </Link> */}



                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;