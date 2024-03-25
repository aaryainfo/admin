import React from 'react'
import Navbar from './Components/Navbar'
import Aboutpage from './Components/Aboutpage'
import AboutEvent from './Components/AboutEvent'
import Commitment from './Components/Commitment'
import AboutJourney from './Components/AboutJourney'
import Collaborative from './Components/Collaborative'
import GalleryPage from './Components/GalleryPage'
function AboutUs() {
  return (
    <div>
      <Navbar />
      <Aboutpage />
      <AboutEvent />
      <Commitment/>
      <AboutJourney/>
      <GalleryPage/>
      <Collaborative/>
      
    </div>
  )
}

export default AboutUs