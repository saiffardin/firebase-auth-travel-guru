import React, { useContext, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const LogIn = (props) => {

    initializeLoginFramework();

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: '',
        displayName: '',
        photoURL: '',
        firstName: '',

    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/afterLogin" } };


    const FormStyle = {
        border: '1px solid black',
        width: '500px',
        padding: '20px',
        margin: '0 auto',
    }

    const handleBlur = (e) => {

        let isEmailValid = false;
        let isPasswordValid = false;
        let ifFieldValid = false;

        if (e.target.name === 'email') {
            isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            ifFieldValid = isEmailValid;
        }

        if (e.target.name === 'password') {
            isPasswordValid = /\d{1}/.test(e.target.value);
            ifFieldValid = isPasswordValid;
        }

        if (ifFieldValid) {
            let newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);

            console.log(e.target.value);
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.email && user.password) {
            console.log("sent to database");


            const email = user.email;
            const password = user.password;

            signInWithEmailAndPassword(user)
                .then(res => {
                    if (res === -1) {
                        alert('user-not-found. Create Account First');
                        return;
                    }

                    if (res === -2) {
                        alert('The password is incorrect or the user does not have a password');
                        return;
                    }
                    else {
                        setLoggedInUser(res);
                        history.replace(from);
                    }
                    // console.log(res);

                })

            document.getElementById("login-form").reset();

        }
        else {
            alert("Please put your email and password properly");
        }

    }

    return (
        <div className="container">


            <Form noValidate onSubmit={handleSubmit} style={FormStyle} id='login-form'>

                <h5 className="mb-5 mt-2 font-weight-bold">Log In</h5>

                {/* Email */}
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            onBlur={handleBlur}
                            name='email'
                        />
                    </Form.Group>
                </Form.Row>


                {/* Password */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onBlur={handleBlur}
                            name='password'
                        />
                    </Form.Group>
                </Form.Row>

                <Button style={{ width: '100%' }} type="submit">Log In</Button>

                {props.children}

            </Form>

        </div>
    );
};

export default LogIn;