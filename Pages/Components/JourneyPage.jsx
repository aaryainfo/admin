import React from 'react'
import MotionComp from './MotionComp'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function JourneyPage() {

    const navigate = useNavigate()

    const [t, i18n] = useTranslation("global")

    return (
        <div className='journeyPageDiv'>
            <div className="container-fluid mx-0">
                <div className="row">
                    <div className="col-lg-8 px-0">
                        <div className="journeyImgDiv">
                            <img loading="lazy" className='w-100 journeyImg d-none d-md-block' src="/Images/JourneyImg.webp" alt="" />
                            <img loading="lazy" className='journeyImgSm d-block d-md-none' src="/Images/journeyImgSm.webp" alt="" />
                            <div className="JourneyArt">{t("home.journeyHrTxt")}</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mainContent">

                            <MotionComp>
                            <div className="mainWrapper">
                                <div className="mainTxt"> {t("home.JourneyTxt")} <span><img loading="lazy" className='artImg' src="/Images/bannerSmall .webp" alt="" /></span>
                                </div>

                                <div className="accordionDiv">
                                    <div className="accText"  onClick={() => { navigate('/artstuone', { state: { "id": "art1" } }) }}>
                                        <div className="txt">{t("home.JonSubtxtOne")}</div>

                                        <img loading="lazy" className='plusSign' src="/Images/joinPlus.svg" alt="" />
                                    </div>

                                    <div className="accText"  onClick={() => { navigate('/artstutwo', { state: { "id": "art2" } }) }}>
                                        <div className="txt">{t("home.JonSubtxtTwo")}</div>
                                        <img loading="lazy" className='plusSign' src="/Images/joinPlus.svg" alt="" />
                                    </div>

                                    <div className="accText"  onClick={() => { navigate('/artstufour', { state: { "id": "art3" } }) }}>
                                        <div className="txt">{t("home.JonSubtxtThree")}</div>
                                        <img loading="lazy" className='groupPlus' src="/Images/joinPlus.svg" alt="" />
                                    </div>
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

export default JourneyPage