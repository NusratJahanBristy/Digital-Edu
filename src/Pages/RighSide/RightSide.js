import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSide = ({course}) => {
const {id,title,details,img}=course
    return (
        <div>
            <h1>{title}</h1>
            <img src={img}/>
    
        </div>
    );
};

export default RightSide;