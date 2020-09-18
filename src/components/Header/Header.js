import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();

    const goToHome = () => {
        history.push('/');
    }

    const logInHandler = () => {
        console.log("log in clicked");
        // console.log(loggedInUser);
    }

    return (
        <div className='header'>

            <Navbar bg="light" expand="lg" >
                <Navbar.Brand onClick={goToHome} >
                    <img className="ml-5" style={{ width: '100px' }} src={require('../../images/Logo.png')} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="text-center" id="basic-navbar-nav" >

                    <Form className="m-auto" inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav className="m-auto">

                        <Nav.Link onClick={goToHome} className="m-2">Home</Nav.Link>
                        <Nav.Link href="" className="m-2">Destination</Nav.Link>
                        <Nav.Link href="" className="m-2">Blog</Nav.Link>
                        <Nav.Link href="" className="m-2">Contact</Nav.Link>


                        {
                            loggedInUser.isSignedIn
                                ? <Button variant="dark" className="m-2">{loggedInUser.displayName}</Button>

                                : <Link to="/logInAndSignUp">
                                    <Button onClick={logInHandler} variant="primary" className="m-2">Log In</Button>
                                </Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;