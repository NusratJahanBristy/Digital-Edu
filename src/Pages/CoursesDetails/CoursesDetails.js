import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CoursesDetails.css'
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const courses = useLoaderData();
    console.log(courses)
    const { title, img, details, price } = courses;
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='8'>
                        <div >
                            <Card  >
                                <Card.Img variant="top" className='card-img' src={img} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {details}
                                    </Card.Text>
                                    <h2 className='p-2'>Prices:${price}</h2>
                                    <Button className='bg-dark '><Link className='text-decoration-none text-white ' to='/checkout'>Get premium access</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesDetails;