import React from 'react'
import Card from "../HowItHelps/Card.jsx";  
import Icon1 from "../../assets/icon/1.png";   
import Icon2 from "../../assets/icon/2.png";   
import Icon3 from "../../assets/icon/3.png";
import {motion} from "framer-motion";
import { SlideLeft, SlideRight } from '../../utility/animation';        

const HowItHelps = () => {
  return (
    <section>
        <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-2">
                    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        <motion.div
                             variants={SlideRight(0.2)} 
                             whileInView={"animate"} 
                             initial="initial"
                        >
                        <Card 
                            icon={Icon1} 
                            heading="Symptoms"
                            text=" Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Praesent sit amet nulla auctor,
                            vestibulum magna sed, convallis"
                        />
                        </motion.div>
                        <motion.div
                             variants={SlideRight(0.4)} 
                             whileInView={"animate"} 
                             initial="initial"
                        >
                        <Card 
                            icon={Icon2} 
                            heading="Recommedations" 
                            text=" Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Praesent sit amet nulla auctor,
                            vestibulum magna sed, convallis"
                        />
                        </motion.div>
                        <motion.div
                             variants={SlideRight(0.6)} 
                             whileInView={"animate"} 
                             initial="initial"
                        >
                        <Card 
                            icon={Icon3} 
                            heading="Local information"
                            text=" Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sit amet nulla auctor,
                             vestibulum magna sed, convallis"
                         />
                        </motion.div>
                    </div>
                </div>
                <motion.div 
                    variants={SlideLeft(0.8)} 
                    whileInView={"animate"} 
                    initial="initial"
                    className='flex flex-col xl:justify-center xl:pr-14'
                >
                    <h1 className='text-3xl font-bold text-darkBlue'>How it helps people</h1>
                    <p className=' text-gray-400 mt-4'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Praesent sit amet nulla auctor,
                        vestibulum magna sed, convallis
                    </p>
                    <p className='text-sm text-gray-400 mt-4'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Praesent sit amet nulla auctor,
                        vestibulum magna sed, convallis.{" "}
                        <a href='#' className='text-primary'>Learn More</a>
                    </p>
                    <button className='w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg
                     hover:bg-primary hover:tex-white transform duaratio-300'>
                        Get in Touch
                    </button>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default HowItHelps