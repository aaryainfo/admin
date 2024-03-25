import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import ArtstudioSec from './Components/ArtstudioSec'
import Collaborative from './Components/Collaborative'
import ArtSstoneBlk from './Components/ArtSstoneBlk'
import ArtsFourProject from './Components/ArtsFourProject'
import { useLocation } from 'react-router-dom'

function ArtstuFour() {
  const location = useLocation()

  // useEffect(() => {

  //     console.log(location);
  //     if (location.state) {
  //         // alert(location.state.id)
  //         const element = document.getElementById(location.state.id);
  //         element.scrollIntoView();
  //     }
  // }, [])
  return (
    <>
        <Navbar/>
        <ArtstudioSec/>
        <ArtSstoneBlk/>
        <ArtsFourProject/>
        <Collaborative/>

    </>
  )
}

export default ArtstuFour