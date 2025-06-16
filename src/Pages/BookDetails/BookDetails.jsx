import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            details
        </div>
    );
};

export default BookDetails;