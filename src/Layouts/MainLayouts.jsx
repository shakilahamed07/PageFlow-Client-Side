import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-(285px))] max-w-[1350px] mx-auto '>
                <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayouts;