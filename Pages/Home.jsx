import React from 'react'
import Navbar from './Components/Navbar'
import Homebanner from './Components/Homebanner'
import JoinUsPage from './Components/JoinUsPage'
import JourneyPage from './Components/JourneyPage'
import GlobalMap from './Components/GlobalMap'
import Collaborative from './Components/Collaborative'
import CareerSec from './Components/CareerSec'
import InstaFeeds from './Components/InstaFeeds'
import Languages from './Components/Languages'
import GetcurrentAddress from './Components/GetcurrentAddress'

function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Languages/> */}
      <GetcurrentAddress/>
      <Homebanner/>
      <JoinUsPage/>
      <JourneyPage/>
      <CareerSec/>
      <GlobalMap/>
      <Collaborative/>
      {/* <InstaFeeds/> */}
      
    </div>
  )
}

export default Home