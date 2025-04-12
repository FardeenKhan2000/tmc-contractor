import React from 'react'
import NavBar from '../components/NavBar'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <NavBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/>
    </div>
  )
}

export default Home