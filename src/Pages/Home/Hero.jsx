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
        <div className='md:flex space-y-10  items-center justify-between md:px-25 bg-linear-to-bl from-base-200 to- rounded-2xl pt-15 text-center md:text-left px-5 mx-2'>
            {/* text */}
            <motion.div initial={{x:-600}} animate={{x:0}} transition={{direction:1}} className="">
                <h1 className='md:text-6xl text-4xl font-extrabold leading-18 lg:mb-12 mb-8 max-w-[600px] mx-auto'><span className='text-primary'>Looking</span> for a Rare & <span>{text}</span></h1>
                <Link to={`all-books`} className='btn btn-primary rounded-full py-2 px-4 border-none'>View All Books</Link>
            </motion.div>
            {/* img */}
            <div className="">
                <motion.img animate={{x:[20, -30, 20]}}
                transition={{duration:10, delay:1, repeat:Infinity}} className='h-120 max-w-100 w-full mx-auto' src="https://gramentheme.com/html/bookle/assets/img/hero/hero-girl.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;