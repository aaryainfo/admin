import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CcareerBlock() {

    const navigate = useNavigate()

    return (
        <>
            <div className="cooperationBlkDiv">
                <div className="StoneblkDiv">
                    <div className="container px-md-2 px-0">
                        <div className="row gx-0">
                            <div className="col-md-4 col-6">
                                <div onClick={() => { navigate('/careerA', { state: { "id": "careerA" } }) }}
                                // {/* Link to="/careerA"  */}
                                >
                                    <div className="stoneSec">
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/artSsubImg1.webp" alt="img" />

                                        <div className="sqText CareerSqTxt ">EMPLOYMENT,STUDIES OR INTERNSHIPS</div>
                                        <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                                    </div>
                                </div>

                                {/* </Link> */}
                            </div>
                            <div className="col-md-4 col-6">
                                <div onClick={() => { navigate('/careerB', { state: { "id": "careerB" } }) }}>
                                    <div className="stoneSec">
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/careerAblk1.webp" alt="img" />
                                        <div className="sqText CareerSqTxt">STONE, ROW MATERIAL SUPPLIES, MANUFACTURING COOPERATION</div>
                                        <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-6">
                                <div onClick={() => { navigate('/careerC', { state: { "id": "careerC" } }) }}>
                                    <div className="stoneSec">
                                        <img loading="lazy" className='w-100 sqImg ' src="/Images/careerAblk2.webp" alt="img" />

                                        <div className="sqText CareerSqTxt">STUDIO SUBLETTING, MANUFACTURING OF YOUR PROJECTS.</div>
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

export default CcareerBlock