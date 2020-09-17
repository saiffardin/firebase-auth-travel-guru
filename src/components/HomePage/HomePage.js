import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const myCardStyle = {
        width: '18rem',
        margin: "30px 10px",
        borderRadius: "25px",

    };

    return (
        <div className='d-flex justify-content-around'>


            {/* card 1 : Sajek */}
            <Card style={myCardStyle}>
                <Card.Img variant="top" src={require('../../images/Sajek.png')} />
                <Card.Body>
                    <Card.Title>Sajek</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to='/sajek'>
                        <Button variant="primary">Go Sajek</Button>
                    </Link>
                </Card.Body>
            </Card>

            {/* card 2 : Sreemongol */}
            <Card style={myCardStyle}>
                <Card.Img variant="top" src={require('../../images/Sreemongol.png')} />
                <Card.Body>
                    <Card.Title>Sreemongol</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                    <Link to='sreemongol'>
                        <Button variant="primary">Go Sreemongol</Button>
                    </Link>
                </Card.Body>
            </Card>

            {/* card 3 : Sundorbon */}
            <Card style={myCardStyle}>
                <Card.Img variant="top" src={require('../../images/sundorbon.png')} />
                <Card.Body>
                    <Card.Title>Sundorbon</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to='sundorbon'>
                        <Button variant="primary">Go Sundorbon</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default HomePage;