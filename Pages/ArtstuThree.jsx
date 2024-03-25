import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Collaborative from './Components/Collaborative'
import ArtstudioSec from './Components/ArtstudioSec'
import ArtSstoneBlk from './Components/ArtSstoneBlk'
import ArtSartist from './Components/ArtSartist'
import ArtsThImg from './Components/ArtsThImg'
import ArtsThreeImgs from './Components/ArtsThreeImgs'
import { useLocation } from 'react-router-dom'

function ArtstuThree() {

    const location = useLocation()

    useEffect(() => {

        console.log(location);
        if (location.state) {
            // alert(location.state.id)
            const element = document.getElementById(location.state.id);
            element.scrollIntoView();
        }

    }, [])
    
    return (
        <>
            <Navbar />
            <ArtstudioSec />
            <ArtSstoneBlk />
            <ArtSartist />
            <ArtsThImg/>
            <ArtsThreeImgs/>
            <Collaborative />
        </>
    )
}

export default ArtstuThree