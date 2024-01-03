import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    directionLeft?:boolean
}

function SkillsGrid({directionLeft}: Props) {
  return (
    <motion.div
    initial={{x:directionLeft?-200:200 , opacity:0}}
    transition={{duration:1}}
    whileInView={{opacity:1 ,x:0}}
    className='group relative flex cursor-pointer'>
        <img
        className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
        src='./aws1.png'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default SkillsGrid