import React, { useEffect } from 'react'
import ArtstuPrototyp from './Components/ArtstuPrototyp'
import Navbar from './Components/Navbar'
import Collaborative from './Components/Collaborative'
import ArtstudioSec from './Components/ArtstudioSec'
import ArtSstoneBlk from './Components/ArtSstoneBlk'
import ArtsTwoTImg from './Components/ArtsTwoTImg'
import ArtImgs from './Components/ArtImgs'
import { useLocation } from 'react-router-dom'

function ArtstuTwo() {

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
            <ArtstudioSec/>
            <ArtSstoneBlk/>
            <ArtstuPrototyp />
            <ArtsTwoTImg/>
            <ArtImgs/>
            <Collaborative/>
        </>
    )
}

export default ArtstuTwo