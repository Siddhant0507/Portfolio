'use client'
import React from "react";
import {motion} from 'framer-motion'
type Props = {};
const project = [1, 2, 3, 4, 5];
const Projects = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center justify-evenly mx-auto z-0 items-center overflow-hidden max-w-full">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full overflow-x-scroll flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {project.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{y:-300 , opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="w-32 h-32" src="./python.png" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl">Personal Portfolio</h4>
              <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores qui cum animi necessitatibus assumenda quisquam sint rem, expedita fuga sapiente! Tempore non debitis, aut fugiat eveniet possimus asperiores saepe iste!</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 feft-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;




// import React from 'react';

// const YourComponent = () => {
//   const dataArray = [
//     { image: 'image1.jpg', title: 'Title 1', desc: 'Description 1' },
//     { image: 'image2.jpg', title: 'Title 2', desc: 'Description 2' },
//     // Add more objects as needed
//   ];

//   return (
//     <div>
//       {dataArray.map((item, index) => (
//         <div key={index}>
//           <img src={item.image} alt={`Image ${index}`} />
//           <h2>{item.title}</h2>
//           <p>{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourComponent;