import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const CategoriesDetails = () => {
    const singleCategory = useLoaderData()
    console.log(singleCategory)
    return (
        <div>
            {
                singleCategory.map(category =>
                    <Card className='w-50 mx-auto'>
                    <Card.Img variant="top" className='card-img' src={category.img} />
                    <Card.Body>
                        <Card.Title>{category.title}</Card.Title>
                        <Card.Text>
                            {
                                category.details?.length > 200 ?
                                    <p>{category.details?.slice(0, 220) + '...'}<Link to={`/courses/${category.id}`}>Read More</Link></p>
                                    : <p>{category.details}</p>
                            }
                        </Card.Text>
        
                    </Card.Body>
                    <button className='text-decoration-none btn btn-dark btn-block'><Link className='text-white  text-decoration-none' to={`/courses/${category.id}`}>Go to Details</Link></button>
                </Card>


            )}

        </div>
    );
};

export default CategoriesDetails;