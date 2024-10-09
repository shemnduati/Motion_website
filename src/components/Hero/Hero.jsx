import React from 'react'
import HeroImage from "../../assets/logo.png"
const Hero = () => {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]'>
        {/* Text Section */}
        <div>
            <h1>
                COVID-19 Risk <br /> Assessment Tool
            </h1>
            <p>
                A set of solutions designed to help quickly
                identify coronavirus
                symptomps and get reliable  information
                regarding COVID-19 concerns.

            </p>
        </div>
        {/* Image Section */}
        <div>
            <img src={HeroImage} alt='Hero Image'></img>
        </div>
    </section>
  )
}

export default Hero