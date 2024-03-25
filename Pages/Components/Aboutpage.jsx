import React from 'react'
import MotionComp from './MotionComp'

function Aboutpage() {
    return (
        <div>
            <div className="aboutpageDiv">
                <div className="container-fluid mx-0 ">
                    <div className="row">
                        <div className="col-lg-6 gx-0">
                            <div className="innerDiv">
                                <img loading="lazy" className='w-100' src="/Images/aboutImg1.webp" alt="img" />

                                <div className="inner-Wrapper">
                                    <MotionComp>
                                        <div className="innerTxt">Welcome to DagadArt, an immersive canvas where the synergy of art and technology paints a vibrant tapestry.</div>
                                    </MotionComp>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <MotionComp>
                                <div className="aboutInnerTxt">
                                    <div className="verText">ABOUT DAGADART</div>
                                    <div className="innerText">
                                        <div className="text">Our journey commenced in October 1991 when our main sculptures and originator embarked on a creative odyssey in tombstone renovation and sculpting. Pioneering innovation, we introduced our first individual tombstone in Poland in 1994, proving the idea of our craftsmanship.</div>
                                        <div className="year">1996</div>
                                        <div className="smText">In subsequent years, we forged ahead with pioneering ventures, founding our first company in Poland in 1995 focused on renovating stone tombstones and crafting letters in stone. By 1996, our inaugural sculpture took form, laying the groundwork for artistic exploration. The year 2000 witnessed a milestone as we established our first tombstone workshop and studio a dedicated space for creativity and craftsmanship.</div>
                                    </div>

                                </div>
                            </MotionComp>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutpage