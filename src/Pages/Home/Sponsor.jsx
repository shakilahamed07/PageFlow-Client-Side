import React from 'react';

const Sponsor = () => {
    return (
        <div className="">
            <p className='mx-auto text-center text-gray-500 mb-5 max-w-[600px] px-2'>Our sponsors are the backbone of our success, providing essential support and resources. Their generous contributions help us grow, innovate, and reach new heights together. We deeply appreciate them.
            </p>
            <div className='flex flex-wrap justify-center items-center gap-20  mb-20 mt-20'>
            <img className='w-50 h-15 grayscale-90' src="https://www.kitchentreaty.com/wp-content/themes/kitchentreaty2020/mobile-header/logo.png" alt="" />
            <img className='w-50 h-20 grayscale-90' src="https://beingnutritious.com/wp-content/uploads/2023/03/Logo-mobile-400x140-1.jpg" alt="" />
            <img className='w-50 h-10 grayscale-90' src="https://www.cacfp.org/wp-content/uploads/sites/1980/2019/04/NCA-Logo-2024-768x329.png" alt="" />
            <img className='w-50 h-20 grayscale-90' src="https://www.bowlofdelicious.com/wp-content/uploads/2021/09/mobile-400.jpg" alt="" />
        </div>
        </div>
    );
};

export default Sponsor;