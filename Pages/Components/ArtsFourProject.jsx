import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ArtsFourProject() {

    const [pubProject, setPubProject] = useState([])

    useEffect(() => {
        showData()
    }, [])

    async function showData() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/public/get-public-show-project?language=EN`)
            const data = await res.json()
            console.log(data);
            setPubProject(data.data.project_list)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="artSFourProjectDiv">
                <div className="container">
                    <div className="ProjectDiv">
                        <div className="project">PROJECTS</div>
                        <div className="artSFourProject">
                            <div className="row gy-5 gx-sm-5">
                                {pubProject.map((el, index) => {
                                    return (
                                        <div key={index} className="col-lg-4">
                                            <div className="imgDiv">
                                                <Link to={`/artstufoura/${el.project_id}`}>
                                                    <img loading="lazy" className='w-100' src={el.images[0].image} alt="" />
                                                </Link>
                                                <div className="imgTxt" id='text3' >
                                                    <div className="txt">{el.title}</div>
                                                    <div className="smTexts">
                                                        <div className="smTxt">{el.identification_number}</div>
                                                        <div className="smTxt">{el.initiation_date}</div>
                                                    </div>
                                                    <Link to={`/artstufoura/${el.project_id}`} >
                                                        <button className='projectBtn'>SEE PRODUCTS</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                {/* <div className="col-lg-4">
                                    <div className="imgDiv">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                        <div className="imgTxt">
                                            <div className="txt">A MIRROR PANE</div>
                                            <div className="smTexts">
                                                <div className="smTxt">PROJECT IDENTIFICATION NUMBER: DA 003</div>
                                                <div className="smTxt">DATE OF INITIATION: 27TH OF JUNE 2021</div>
                                            </div>
                                            <Link to="/artstufoura">
                                                <button className='projectBtn'>SEE PRODUCTS</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="imgDiv">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                        <div className="imgTxt">
                                            <div className="txt">A MIRROR PANE</div>
                                            <div className="smTexts">
                                                <div className="smTxt">PROJECT IDENTIFICATION NUMBER: DA 003</div>
                                                <div className="smTxt">DATE OF INITIATION: 27TH OF JUNE 2021</div>
                                            </div>
                                            <Link to="/artstufoura">
                                                <button className='projectBtn'>SEE PRODUCTS</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="imgDiv">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                        <div className="imgTxt">
                                            <div className="txt">A MIRROR PANE</div>
                                            <div className="smTexts">
                                                <div className="smTxt">PROJECT IDENTIFICATION NUMBER: DA 003</div>
                                                <div className="smTxt">DATE OF INITIATION: 27TH OF JUNE 2021</div>
                                            </div>
                                            <Link to="/artstufoura">
                                                <button className='projectBtn'>SEE PRODUCTS</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="imgDiv">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                        <div className="imgTxt">
                                            <div className="txt">A MIRROR PANE</div>
                                            <div className="smTexts">
                                                <div className="smTxt">PROJECT IDENTIFICATION NUMBER: DA 003</div>
                                                <div className="smTxt">DATE OF INITIATION: 27TH OF JUNE 2021</div>
                                            </div>
                                            <button className='projectBtn'>SEE PRODUCTS</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="imgDiv">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                        <div className="imgTxt">
                                            <div className="txt">A MIRROR PANE</div>
                                            <div className="smTexts">
                                                <div className="smTxt">PROJECT IDENTIFICATION NUMBER: DA 003</div>
                                                <div className="smTxt">DATE OF INITIATION: 27TH OF JUNE 2021</div>
                                            </div>
                                            <button className='projectBtn'>SEE PRODUCTS</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtsFourProject