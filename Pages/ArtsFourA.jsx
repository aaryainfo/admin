import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import ArtsFourApro from './Components/ArtsFourApro'
import ArtsFourAProject from './Components/ArtsFourAProject'

function ArtsFourA() {
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])
    
    return (
        <>
            <Navbar />
            <ArtsFourApro/>
            <ArtsFourAProject/>
        </>
    )
}

export default ArtsFourA