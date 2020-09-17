import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BookingForm = (props) => {

    let destination = props.destination;
    let history = useHistory();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            // event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (validated) {
            history.push('/afterLogin');
        }
    };

    const bookingFormStyle = {
        border: '1px solid black',
        width: '500px',
        padding: '20px',
    }


    return (
        <div className="container">
            {/* <h1>Booking Form</h1> */}
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={bookingFormStyle}>

                {/* Origin */}
                <Form.Row >
                    {/*  */}
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control
                            readOnly
                            required
                            type="text"
                            placeholder="Enter where you from"
                            defaultValue="Dhaka"
                            style={{ fontWeight: "bold" }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Destination */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            readOnly
                            required
                            type="text"
                            placeholder="Enter where you want to go"
                            defaultValue={destination}
                            style={{ fontWeight: "bold" }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Date */}
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>From</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>To</Form.Label>
                        <Form.Control

                            required
                            type="date"
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Button style={{ width: '100%' }} type="submit">Start Booking</Button>
            </Form>
        </div>
    );
};

export default BookingForm;