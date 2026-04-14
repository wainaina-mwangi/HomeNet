import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyProcess from '../components/WhyProcess'
import Services from '../components/Services'
import Plans from "../components/Plans"
import Availability from '../components/CoverageChecker'


const Home = () => {
  return (
    <div className='overflow-hidden'>
     <Hero/>
     <Services/>
     <About />
     <WhyProcess/>
     <Plans/>
     <Availability/>
     

    </div>
  )
}

export default Home