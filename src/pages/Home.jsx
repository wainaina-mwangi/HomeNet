import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyProcess from '../components/WhyProcess'


const Home = () => {
  return (
    <div className='overflow-hidden'>
     <Hero/>
     <About/>
     <WhyProcess/>
     

    </div>
  )
}

export default Home