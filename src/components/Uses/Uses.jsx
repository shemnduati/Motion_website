import React from 'react';
import Img1 from "../../assets/uses/1.png";
import Img2 from "../../assets/uses/2.png";
import Img3 from "../../assets/uses/3.png";

function Uses() {
  return (
    <section>
       <div className="container">
        <div className="grid gri-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className='flex flex-col justify-center xl:pr-14'>
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
            </div>
            <div>
                <img src={ Img1 } alt=" " className='w-full rounded-3xl' />
                <p className='text-gray-400 mt-4'>Coronavirus</p>
            </div>
            <div>
                <img src={ Img2 } alt=" " className='w-full rounded-3xl' />
                <p className='text-gray-400 mt-4'>Diagnostic</p>
            </div>
            <div>
                <img src={ Img3 } alt=" " className='w-full rounded-3xl' />
                <p className='text-gray-400 mt-4'>Test</p>
            </div>
        </div>
        </div> 
    </section>
  )
}

export default Uses