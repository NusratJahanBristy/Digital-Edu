import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightSide from '../RighSide/RightSide';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2'>
                        <h2>left</h2>
                    </Col>
                    <Col lg='10'>
                        <RightSide></RightSide>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;