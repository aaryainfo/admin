import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ArtSstoneBlk() {

    const navigate = useNavigate()


    // function myFunctionProto() {
    //     const element = document.getElementById("text2");
    //     element.scrollIntoView();
    // }

    // function myFunctionProject() {
    //     const element = document.getElementById("text3");
    //     element.scrollIntoView();
    // }

    // function myFunctionArt() {
    //     const element = document.getElementById("text4");
    //     element.scrollIntoView();
    // }

    return (
        <>
            <div className="artStudioStoneBlk">
                <div className="StoneblkDiv">
                    <div className="container px-md-2 px-0">
                        <div className="row gx-0">
                            <div className="col-md-3 col-6">
                                {/* <Link to="/artstuone" */}<div
                                    onClick={() => { navigate('/artstuone', { state: { "id": "text1" } }) }}
                                >
                                    <div className="stoneSec"
                                    // onClick={()=>{myFunctionDesign()}}
                                    >
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/artSsubImg1.webp" alt="img" />

                                        <div className="sqText">3D SCULPTING AND DESIGNING</div>
                                        <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                            <div className="col-md-3 col-6">
                                <div  onClick={() => { navigate('/artstuTwo', { state: { "id": "text2" } }) }}>
                                    <div className="stoneSec">
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/artSsubImg2.webp" alt="img" />
                                        <div className="sqText">PROTOTYPING
                                            AND MANUFACTURING</div>
                                        <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 col-6">
                                <div  onClick={() => { navigate('/artstuThree', { state: { "id": "text3" } }) }}>
                                    <div className="stoneSec">
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/artSsubImg3.webp" alt="img" />

                                        <div className="sqText">PROJECTS</div>
                                        <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div  onClick={() => { navigate('/artstuFour', { state: { "id": "text4" } }) }}>
                                    <div className="stoneSec"
                                    //  onClick={() => { myFunctionArt() }}
                                     >
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/artSsubImg4.webp" alt="img" />

                                        <div className="sqText">ART SPACE FOR ARTISTS</div>
                                        <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ArtSstoneBlk