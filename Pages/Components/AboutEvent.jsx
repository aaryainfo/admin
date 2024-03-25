import React from 'react'
import MotionComp from './MotionComp'

function AboutEvent() {
    return (
        <>
            <div className="AboutEventSec">
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="col-lg-6 px-0">
                            <div className="eventWrapper">
                                <MotionComp>
                                <div className="eventTextsIn">
                                    <div className="numberOne">2002</div>
                                    <div className="innerTxtDiv">Embracing technological strides in 2002, we acquired our first automatic saw and machining equipment, ushering in an era of precision and efficiency. The year 2009 marked a transformative phase with our foray into larger-scale projects, broadening the horizons of our creative expression.</div>
                                    <div className="numberTwo">2019</div>
                                    <div className="innerTxtDiv">In 2019, a new chapter unfolded as we ventured into India, expanding our artistic journey and embracing a rich tapestry of art and culture. Today, DagadArt is a virtual studio, collaborating with artists globally, and envisioning a future where "Art as Human Development" takes centre stage.</div>
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

export default AboutEvent