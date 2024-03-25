import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import CareerACreative from './Components/CareerACreative'
import CcareerBlock from './Components/CcareerBlock'
import Collaborative from './Components/Collaborative'
import CareerCImgTxt from './Components/CareerCImgTxt'
import { useLocation } from 'react-router-dom'

function CareerPageC() {

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
            <Navbar/>
            <CareerACreative/>
            <CcareerBlock/>
            <CareerCImgTxt/>
            <Collaborative/>
        </>
    )
}

export default CareerPageC