import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BookingForm from '../BookingForm/BookingForm';

const Sreemongol = () => {
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col sm>
                    <h1>Sreemongol</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse ullam expedita officiis pariatur. Iusto magni earum eos, assumenda blanditiis iste tempora fugit cumque veritatis nemo maxime distinctio, voluptatibus mollitia.
                        </p>
                    </Col>

                    <Col sm>
                        <BookingForm destination='Sreemongol'></BookingForm>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sreemongol;