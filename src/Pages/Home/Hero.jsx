import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Special Book?'],
        loop: Infinity
      })

    return (
        <div className="bg-[linear-gradient(to_right_bottom,rgba(0,7,0,0.8),rgba(16,71,52,0.3)),url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D')] bg-repeat bg-[length:120%_auto] animate-bgMove mt-5">
            <div className="max-w-[1350px] mx-auto md:flex space-y-10 items-center justify-between md:px-20 xl:px-0 rounded-2xl pt-15 text-center md:text-left px-5 mx-2">
                {/* text */}
            <motion.div initial={{x:-600}} animate={{x:0}} transition={{direction:2}} className="">
                <h1 className='md:text-6xl text-4xl text-primary font-extrabold leading-18 lg:mb- mb-5 max-w-[600px]'><span className='text-white'>Looking</span> for a Rare & <span>{text}</span></h1>
                <p className='max-w-[700px] mb-10 text-gray-200'>Unlock a world of knowledge with our vast collection of books, journals, and digital resources. Whether you're here to study, explore, or simply get lost in a great story, our library is your gateway to learning and inspiration.</p>
                <Link to={`all-books`} className='btn btn-primary rounded-full py-2 px-4 border-none'>View All Books</Link>
            </motion.div>
            {/* img */}
            <div className="">
                <motion.img animate={{x:[20, -30, 20]}}
                transition={{duration:10, delay:1, repeat:Infinity}} className='h-120 max-w-100 w-full mx-auto' src="https://gramentheme.com/html/bookle/assets/img/hero/hero-girl.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Hero;