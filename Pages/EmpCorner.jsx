import React from 'react'
import Navbar from './Components/Navbar'
import Collaborative from './Components/Collaborative'
import EmpcornTxt from './Components/EmpcornTxt'
import EmpTable from './Components/EmpTable'

function EmpCorner() {
    return (
        <>
            <Navbar/>
            <EmpcornTxt/>
            <EmpTable/>
            <Collaborative/>
        </>
    )
}

export default EmpCorner