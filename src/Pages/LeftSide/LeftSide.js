import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
fetch('http://localhost:5000/courses-categories')
.then(res=>res.json())
.then(data=>setCategories(data))
    },[])


    return (
        <div>
            <h1>All Courses List:{categories.length}</h1>
            <div className=''>
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