import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import CardSummery from '../shared/CardSummuery/CardSummery';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='10'>
                        <div className='card-grid'>
                            {
                                courses.map(course => <CardSummery key={course.id} course={course}></CardSummery>)


                            }
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;