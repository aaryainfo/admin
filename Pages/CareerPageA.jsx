import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import CareerACreative from './Components/CareerACreative'
import Collaborative from './Components/Collaborative'
import CcareerBlock from './Components/CcareerBlock'
import CareerAImgTxt from './Components/CareerAImgTxt'
import { useLocation } from 'react-router-dom'

function CareerPageA() {

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
            <CareerACreative />
            <CcareerBlock/>
            <CareerAImgTxt/>
            <Collaborative />
        </>
    )
}

export default CareerPageA