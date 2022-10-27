import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://digital-edu-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3 className='py-4 text-primary'>All Courses List</h3>
            <div className=''>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none text-primary' to={`/singleCategory/${category.id}`}>
                            {category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;