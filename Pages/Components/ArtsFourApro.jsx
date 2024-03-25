import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArtsFourApro() {

    const {id} = useParams()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/get-public-single-project?language=CZ&project_id=${id}`)
            const data = await res.json()
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="artsFourAProDiv">
                <div className="patch">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="imgDiv">
                                <img loading="lazy" className='w-100' src="/Images/artSFourAImg.webp" alt="" />
                            </div>
                            <div className="smImg">
                                <div className="row gx-3 gy-3">
                                    <div className="col-4">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img loading="lazy" className='w-100' src="/Images/projectImg.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="mirrorpaneDiv">
                                <div className="mirrorTXt">A MIRROR PANE</div>
                                <div className="bordertxt">
                                    <div className="txt">PROJECT IDENTIFICATION NUMBER: DA 003</div>
                                    <div className="txt">DATE OF INITIATION: 27TH OF JUNE 2021</div>
                                </div>
                                <div className="smTxts">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .</p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .</p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .</p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .</p>
                                </div>
                                <button className='mirrorBtn'>DOWNLOAD PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtsFourApro