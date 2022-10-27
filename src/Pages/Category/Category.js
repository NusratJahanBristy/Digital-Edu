import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSummery from '../shared/CardSummuery/CardSummery';

const Category = () => {
    const categories = useLoaderData()
    // console.log(categories)

    return (
        <div>
            {
                categories.map(c => <CardSummery key={c.id} courses={c}></CardSummery>)
            }
        </div>
    );
};

export default Category;