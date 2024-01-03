import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
       initial={{ y: -100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true }}
       transition={{
         duration: 1.2,
       }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="./image3.jpg"
      />
    <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">ML in OpenCV Intern</h4>
        <p className="font-bold text-2xl mt-1">GB Softonic</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" src="./python.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="./opencv.png" alt="" />
           
        </div>
        <p className="uppercase py-5 text-gray-300">Started... Ended...</p>
       <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summery Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed doloremque hic omnis, ipsum enim facilis ex labore ullam commodi!</li>
        <li>Summery Points Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
        <li>Summery Points Lorem ipsum dolor sit amet, </li>
        <li>Summery Points Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laborum nihil atque nam sint numquam suscipit distinctio facere asperiores pariatur.</li>
       
       </ul>
    </div>

    </article>
  );
};

export default ExperienceCard;
