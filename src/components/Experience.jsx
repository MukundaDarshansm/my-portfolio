import React from 'react'
import html from "../assets/html.png";
import Tailwind_CS from "../assets/Tailwind_CS.png";
import css from "../assets/CSS.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.jpeg";
import Php from "../assets/php.png";
import jquery from "../assets/jquery.png";
import Java from "../assets/Java.png";
import GitHub from "../assets/GitHub.png";





export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: Tailwind_CS,
      title: 'TAILWIND',
      style: 'shadow-sky-400'
    },
    {
      id: 4,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 5,
      src: react,
      title: 'REACT',
      style: 'shadow-blue-500'
    },
    {
      id: 6,
      src: Php,
      title: 'PHP',
      style: 'shadow-blue-900'
    },
    {
      id: 7,
      src: jquery,
      title: 'jquery',
      style: 'shadow-white'
    },
    {
      id: 8,
      src: laravel,
      title: 'LARAVEL',
      style: 'shadow-orange-500'
    },
    {
      id: 9,
      src: GitHub,
      title: 'GITHUB',
      style: 'shadow-gray-500'
    },
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>
            These are the technologies I've worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({ id, src, title, style }) => (

              <div
              key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}
