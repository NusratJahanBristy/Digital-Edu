import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
// import CoursesDetails from '../CoursesDetailsq/CoursesDetails';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const courses=useLoaderData();
    return (
        <div>
            <h3>details</h3>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='10'>
                      {/* <div className='card-grid'>
                        {
                            courses.map(course =><CoursesDetails key={course.id} course={course}></CoursesDetails>)

                           
                        }
                      </div> */}
                    
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CoursesDetails;