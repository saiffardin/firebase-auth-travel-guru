import React, { useContext, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const SignUp = (props) => {

    let history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const FormStyle = {
        border: '1px solid black',
        width: '500px',
        padding: '20px',
        margin: '0 auto',
    }

    const toggle = () => {
        console.log('fdfdsfs');
    }

    let isFirstNameValid = false;
    let isLastNameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;

    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let passwordConfirm = '';



    const handleBlur = (e) => {

        if (e.target.name === 'firstName' && /^[a-zA-Z ]{2,30}$/.test(e.target.value)) {
            // isFirstNameValid = /^[a-zA-Z ]{2,30}$/.test(e.target.value);
            isFirstNameValid = true;
            console.log(e.target.value, isFirstNameValid);
            firstName = e.target.value;
        }


        else if (e.target.name === 'lastName' && /^[a-zA-Z ]{2,30}$/.test(e.target.value)) {
            // isLastNameValid = /^[a-zA-Z ]{2,30}$/.test(e.target.value);
            isLastNameValid = true;
            console.log(e.target.value, isLastNameValid);
            lastName = e.target.value;
        }

        else if (e.target.name === 'email' && /\S+@\S+\.\S+/.test(e.target.value)) {
            // isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isEmailValid = true;
            console.log(e.target.value, isEmailValid);
            email = e.target.value;
        }

        else if (e.target.name === 'password' && e.target.value.length > 5 && /\d{1}/.test(e.target.value)) {
            password = e.target.value;
            console.log(e.target.value, /\d{1}/.test(e.target.value));
            console.log('password: ', password);

        }


        else if (e.target.name === 'confirmPassword') {
            if (password.trim() !== '' && password === (e.target.value)) {

                isPasswordValid = true;
                console.log("password matched", isPasswordValid);

                passwordConfirm = password;
                console.log('passwordConfirm: ', passwordConfirm);
            }
            else {
                console.log("password didn't matched. handleBlur");
                // alert("password didn't matched.");
                // return;
            }
        }

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('\n');
        console.log('isFirstNameValid : ', isFirstNameValid);
        console.log('isLastNameValid : ', isLastNameValid);
        console.log('isEmailValid: ', isEmailValid);
        console.log('isPasswordValid : ', isPasswordValid);
        console.log('\n');

        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
            console.log("\nAll OK. handleBlur");
            createAccount();
        }
        else {
            console.log('invalid');
            alert('Please Fill the form properly');
        }

    };


    const createAccount = () => {

        let newUser = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            displayName: firstName,
            isSignedIn: true,
        };

        console.log(newUser);
        setLoggedInUser(newUser)

        // call signup manager


        document.getElementById("signup-form").reset();
    }


    return (

        <div className="container">

            <Form noValidate onSubmit={handleSubmit} style={FormStyle} id='signup-form'>

                <h5 className="mb-5 mt-2 font-weight-bold">Create an Account</h5>

                {/* First Name */}
                <Form.Row >
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onBlur={handleBlur}
                            name='firstName'
                        />
                    </Form.Group>
                </Form.Row>

                {/* Last Name */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onBlur={handleBlur}
                            name='lastName'
                        />
                    </Form.Group>
                </Form.Row>

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


                {/* Confirm Password */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom05">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onBlur={handleBlur}
                            name='confirmPassword'
                        />
                    </Form.Group>
                </Form.Row>


                <Button style={{ width: '100%' }} type="submit">Create Account</Button>

                {props.children}

            </Form>
        </div>
    );
};

export default SignUp;