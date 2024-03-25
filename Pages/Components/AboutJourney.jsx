import React from 'react'
import MotionComp from './MotionComp'
import { useNavigate } from 'react-router-dom'

function AboutJourney() {

    const navigate = useNavigate()

    return (
        <>
            <div className="AboutjourneyPage">
                <div className="container-fluid mx-0">
                    <div className="journeyAbtDiv">
                        <div className="row">
                            <div className="col-lg-6 px-0">
                                <MotionComp>
                                <div className="abtWrapper">
                                    <div className="mainWrapper">
                                        <div className="mainTxt">EMBARK ON AN <span><img loading="lazy" className='artImg' src="/Images/bannerSmall .webp" alt="" /></span>
                                            JOURNEY</div>

                                        <div className="accordionDiv">
                                            <div className="accText" onClick={() => { navigate('/artstuone', { state: { "id": "art1" } }) }}>
                                                <div className="txt">INNOVATIVE DESIGN, SCULPTING, AND 3D ARTISTRY</div>

                                                <img loading="lazy" className='plusSign' src="/Images/joinPlus.svg" alt="" />
                                            </div>

                                            <div className="accText" onClick={() => { navigate('/artstutwo', { state: { "id": "art2" } }) }}>
                                                <div className="txt">ADVANCED PROTOTYPING AND MANUFACTURING:
                                                    INTEGRATING ARTISTRY WITH 3D PRINTING AND SCANNING</div>
                                                <img loading="lazy" className='plusSign' src="/Images/joinPlus.svg" alt="" />
                                            </div>

                                            <div className="accText" onClick={() => { navigate('/artstufour', { state: { "id": "art3" } }) }}>
                                                <div className="txt">ART SPACE FOR ARTISTS</div>
                                                <img loading="lazy" className='groupPlus' src="/Images/joinPlus.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </MotionComp>
                               
                            </div>

                            <div className="col-lg-6">
                                <MotionComp>
                                <div className="jourAbtText">
                                    <div className="verJourneyTxt">JOIN US</div>
                                    <div className="journeyTxtwrap">
                                    <div className="jTxt">Join us in exploring the convergence of artistry and engineering, where each creation embodies the spirit of our times
                                    </div>
                                    <div className="jSubTxt">At DagadArt, innovation knows no bounds, and creativity unfolds in every stroke, shaping a legacy of enduring artistry. Explore the journey, be part of the story, and witness the evolution of art with DagadArt.</div>
                                    </div>
                                    
                                </div>
                                </MotionComp>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutJourney