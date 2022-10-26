import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import LeftSide from '../LeftSide/LeftSide';
// import RightSide from '../RighSide/RightSide';

const Courses = () => {
    const courses=useLoaderData();
    console.log(courses)
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='10'>
                        {/* <RightSide></RightSide> */}
                        <h4>fjgo</h4>
                    
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;