import React from 'react';
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div className='max-w-2xl mx-auto text-center'>
            <img src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?ga=GA1.1.751526860.1746424154&semt=ais_hybrid&w=740" alt="" />
            <Link to='/' className='btn btn-primary border-none'>Go Home</Link>
        </div>
        
    );
};

export default ErrorElement;