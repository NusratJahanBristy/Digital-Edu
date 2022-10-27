import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesDetails from '../CoursesDetails/CoursesDetails';

const LeftSide = () => {
    const course=useLoaderData();
    console.log(course)
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
fetch('http://localhost:5000/courses-categories')
.then(res=>res.json())
.then(data=>setCategories(data))
    },[])


    return (
        <div>
            <h1>All Courses List:{categories.length}</h1>
            {/* <h3>{course.title}</h3> */}
            <div className=''>
                {/* {
                    course.map(cors=><p key={cors.id}>
                        <Link className='text-decoration-none' to={`/coursesDetails/${cors.id}`}>{cors.name}</Link>
                    </p>)
                } */}
                {
                    categories.map(category=><p key={category.id}>
                        <Link className='text-decoration-none' to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;