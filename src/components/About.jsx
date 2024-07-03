import React from 'react'

export const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
          I am a dedicated and skilled software engineer
          with a passion for developing innovative programs
          that expedite the efficiency and effectiveness of
          organizational success. With a strong foundation
          in various programming languages,
          I have a proven track record of designing,
          implementing, and optimizing software solutions in a range of industries.
        </p>

        <br/>
        <p className='text-xl'>
        I am continuously seeking opportunities to learn
         and grow, staying updated with the latest 
         industry trends and technologies. 
         My goal is to leverage my skills and experience 
         to contribute to cutting-edge projects and
          drive technological advancements within an innovative team.

        </p>
      </div>
    </div>
  )
}
