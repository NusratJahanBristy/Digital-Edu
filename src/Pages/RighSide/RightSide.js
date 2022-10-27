import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import "./RightSide.css";

const RightSide = ({ course }) => {
    const { title, details, img } = course
    return (
        <div className=''>
            <CardGroup>
                <Card>
                    {/* <Card.Img className='card-img' variant="top" src={img} /> */}
                    <Image className='card-img'  src={img} alt=''/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                     {
                        details.length>200?
                        <p>{details.slice(0,220)+'...'}<Link to={`/courseDetails`}>Read More</Link></p>
                    :<p>{details}</p>
                    }
                        </Card.Text>
                    </Card.Body>
                  
               
                      
                    <button className='text-decoration-none btn btn-dark btn-block'><Link className='text-white  text-decoration-none'  to='/coursesDetails'>Go to Details</Link></button>
                   
                </Card>


            </CardGroup>
            {/* <h1>{title}</h1>
            <img src={img}/> */}

        </div>
    );
};

export default RightSide;