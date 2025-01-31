import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
 import HeroImage from '../assets/hero1.png';
 
// import FaArrowRight  from "react-icons/md";


 const Home = () => {
  return (
   <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 msx-w-md'>
                I have 2 years of experience in building and designing software. Currently, I love working on web applications using technologies like Laravel, React, Tailwind, PHP, and MySQL
                </p>
            <div>
                <button className='text_white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Protfolio
                    <span className='hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    {/* <FaArrowRight/> */}
                    </span>
                </button>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="My profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
    </div>
   </div>
  );
};

export default Home;
