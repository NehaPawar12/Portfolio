import React from 'react'
import htmlimg from '../assets/html.png'
import cssimg from '../assets/css.png'
import github from '../assets/github.png'
import reactImage from '../assets/react.png'
import tailwindimg from '../assets/tailwind.png'
import mysqlimg from '../assets/MySQL.png'
import cpp from '../assets/cpp.png'
import js from '../assets/JavaScript.png'
import nodejs from '../assets/Node.js.png'


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: htmlimg,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: cssimg,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 4,
            src: tailwindimg,
            title: 'TailWind',
            style: 'shadow-sky-400',
        },
        {
            id: 5,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-400',
        },
        
        {
            id: 6,
            src: mysqlimg,
            title: 'MYSQL',
            style: 'shadow-blue-900',
        },
        {
            id: 7,
            src: cpp,
            title: 'C++',
            style: 'shadow-sky-800',
        },
        {
            id: 8,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-200',
        },
        {
            id: 9,
            src: nodejs,
            title: 'Node.js',
            style: 'shadow-green-400',
        },
        
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I have worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
