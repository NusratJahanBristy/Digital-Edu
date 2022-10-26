import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RighSide/RightSide';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSide></LeftSide>
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