import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CoursesDetails from '../CoursesDetails/CoursesDetails';

const LeftSide = () => {
    // const course=useLoaderData();
    // console.log(course)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3 className='py-4'>All Courses List</h3>
            {/* <h3>{course.title}</h3> */}
            <div className=''>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none text-dark' to={`/category/${category.id}`}>
                            {category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;