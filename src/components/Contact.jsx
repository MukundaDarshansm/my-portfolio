import React from 'react'

export const Contact = () => {
  return (
    <div  name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text4x\ font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the Form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/wbrkvxpa" method='post' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" className="p-2 bg-transparent border-2 rounded-e-md text-white focus:outline-none" placeholder='Enter Your Name' />
                <input type="text" name="email" className="my-4 p-2 bg-transparent border-2 rounded-e-md text-white focus:outline-none" placeholder='Enter Your Email' />
                <textarea name="message"  placeholder='Enter Your Message' className="p-2 bg-transparent border-2 rounded-e-md text-white focus:outline-none" rows="10" id=""></textarea>
<button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Let's Talk</button>
            </form>
        </div>
    </div>
    </div>
  )
}
