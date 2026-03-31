import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Process from '../components/process'


const Home = () => {
  return (
    <div className='overflow-hidden'>
     <Hero/>
     <About/>
     <Process/>
     

    </div>
  )
}

export default Home