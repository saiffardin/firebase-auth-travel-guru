import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RoomDemo = () => {

    return (
        <div>
            
            <Card className='d-flex flex-row m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('../../images/room-1.png')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{ width: '200px' }}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card className='d-flex flex-row m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('../../images/room-2.png')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{ width: '200px' }}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card className='d-flex flex-row m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('../../images/room-3.png')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{ width: '200px' }}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>

            
        </div>
    );
};

export default RoomDemo;