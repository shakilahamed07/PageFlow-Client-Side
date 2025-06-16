import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const BooksCategary = ({category}) => {

    const navigate = useNavigate();
    const handleViewCategory = (category) =>{
        navigate(`/category-books/${category}`)
    }

    return (
        <div onClick={()=>handleViewCategory(category.name)} className='flex items-center justify-between px-4 shadow-md rounded-2xl py-10 w-[360px] mx-auto'>
            <div className="">
                <h1 className='text-3xl font-bold'>{category.name}</h1>
                <p className='mb-6'>{category.dis}</p>
                <p className='btn bg-base-400 rounded-full border-none'><FaArrowRight /></p>
            </div>
            <div className="">
                <img className='w-30' src={`${category.img}`} alt="" />
            </div>
        </div>
    );
};

export default BooksCategary;