import React from 'react'

const About = () => {
  return (
    <div 
    name='about' 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-16'>Hello! I'm Neha Pawar, a passionate and eager developer with a deep interest in coding and problem-solving. Although I am a fresher, I am excited to embark on my journey in the tech world and learn from real-world experiences. I thrive in environments that encourage creativity, innovation, and continuous learning.

            I am proficient in C++, HTML, CSS, React, MySQL and I am always exploring new technologies to expand my skill set. Whether it’s building projects, collaborating with others, or experimenting with new ideas, I bring enthusiasm and dedication to everything I do.

            </p>

            <br />

            <p className='text-xl'>I’m always open to new challenges and opportunities to grow both professionally and personally. Feel free to browse through my portfolio, and don't hesitate to reach out if you'd like to collaborate or chat about technology!</p>
        </div>
    </div>
  )
}

export default About;