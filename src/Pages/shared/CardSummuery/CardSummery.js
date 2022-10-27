import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import './CardSummery.css'

const CardSummery = ({ course }) => {
    const { id, title, details, img } = course || {};
    console.log(course, title)
    return (
        <Card>
            <Card.Img variant="top" className='card-img' src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details?.length > 200 ?
                            <p>{details?.slice(0, 220) + '...'}<Link to={`/courses/${id}`}>Read More</Link></p>
                            : <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <button className='text-decoration-none btn btn-dark btn-block'><Link className='text-white  text-decoration-none' to={`/courses/${id}`}>Go to Details</Link></button>
        </Card>

    );
};

export default CardSummery;