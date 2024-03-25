import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Collaborative from './Components/Collaborative'
import CareerACreative from './Components/CareerACreative'
import CcareerBlock from './Components/CcareerBlock'
import CareerBImgTxt from './Components/CareerBImgTxt'
import { useLocation } from 'react-router-dom'

function CareerPageB() {

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
            <CareerACreative/>
            <CcareerBlock/>
            <CareerBImgTxt/>
            <Collaborative />
        </>
    )
}

export default CareerPageB