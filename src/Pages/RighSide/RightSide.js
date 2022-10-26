import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSide = () => {
    const courses=useLoaderData();
    console.log(courses)
    return (
        <div>
            <h1>thid is rightsside</h1>
            {/* <h4>{courses.length}</h4> */}
        </div>
    );
};

export default RightSide;