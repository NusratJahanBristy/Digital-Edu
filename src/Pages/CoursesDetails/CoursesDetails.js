import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CoursesDetails.css'
import { useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

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
                    
                        <div ref={ref}>
                            <Card  >
                            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='p-2 m-2 bg-dark text-white'><FaDownload></FaDownload></button>}
      </Pdf>

                             
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