import React, { useEffect } from 'react'
import Readypage from './Components/Readypage'
import Navbar from './Components/Navbar'
import StoneBlk from './Components/StoneBlk'
import Monuments from './Components/Monuments'
import ReadyproText from './Components/ReadyproText'
import StoneTiles from './Components/stoneTiles'
import SingleTombstone from './Components/SingleTombstone'
import ReadyPStone from './Components/ReadyPStone'
import ReadyPText from './Components/ReadyPText'
import Collaborative from './Components/Collaborative'
import { useLocation } from 'react-router-dom'

function ReadyProducts() {

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
            <Readypage />
            <StoneBlk />
            <Monuments />
            <ReadyproText />
            {/* <Monuments menus={["BLACK MARBEL","WHITE MARBEL","MOCCA MARBEL","SILVETR TRAVERTAIN","BEIGE MARBEL","PINT ONYX"]} name={"TOMBSTONES AND MONUMENTS"} images={["blackMar1.png","blackMar2.png","blackMar3.png","blackMar4.png","blackMar5.png","blackMar6.png"]} subHeading={"BLACK MARBLE"}/>
            
             <Monuments menus={["TILES","BALUSTERS","STONE FURNITURE"]} name={"STONE PRODUCTS- TILES, BALUSTERS, STONE FURNITURE"} images={["tilesImg1.png","tilesImg2.png","tilesImg3.png","tilesImg5.png","tilesImg6.png","tilesImg4.png"]} subHeading={"TILES"}/>

            <Monuments menus={["SINGLE TOMBSTONES","DOUBLE TOMBSTONES","LARGE FURNITURE"]} name={"TOMBSTONES AND MONUMENTS"} images={["tilesImg1.png","tilesImg2.png","tilesImg3.png","tilesImg5.png","tilesImg6.png","tilesImg4.png"]} subHeading={"SINGLE TOMBSTONES"}/> */}
            <StoneTiles />
            <SingleTombstone />
            <ReadyPText />
            <ReadyPStone />
            <Collaborative />
        </>
    )
}

export default ReadyProducts