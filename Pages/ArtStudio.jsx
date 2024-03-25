import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import ArtstudioSec from './Components/ArtstudioSec'
import ArtSstoneBlk from './Components/ArtSstoneBlk'
import ArtSText from './Components/ArtSText'
import Collaborative from './Components/Collaborative'
import ArtTextImg from './Components/ArtTextImg'
import ArtImgs from './Components/ArtImgs'
import { useLocation } from 'react-router-dom'

function ArtStudio() {


    const location = useLocation()

    useEffect(() => {

        console.log(location);
        if (location.state) {
            // alert(location.state.id)
            const element = document.getElementById(location.state.id);
            element.scrollIntoView();
        }

    }, [location])

    return (
        <>
            <Navbar />
            <ArtstudioSec />
            <ArtSstoneBlk />
            <ArtSText />
            <ArtTextImg />
            <ArtImgs />
            <Collaborative />
        </>
    )
}

export default ArtStudio