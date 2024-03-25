import React from 'react'
import Navbar from './Components/Navbar'
import ContactImgs from './Components/ContactImgs'
import Collaborative from './Components/Collaborative'
import GlobalMap from './Components/GlobalMap'
import ContTxtImgs from './Components/ContTxtImgs'

function ContactPage() {
    return (
        <>
            <Navbar />
            <ContactImgs />
            <GlobalMap/>
            <ContTxtImgs/>
            <Collaborative />
        </>
    )
}

export default ContactPage