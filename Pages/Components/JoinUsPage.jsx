import React from 'react'
import MotionComp from './MotionComp'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

function JoinUsPage() {

    const navigate = useNavigate()

    const [t, i18n] = useTranslation("global")


    return (
        <div className='JoinUsPageDiv'>
            <div className="row gx-0">
                <div className="col-lg-6">
                    <div className="img1Div">
                        <img loading="lazy" className='w-100' src="/Images/joinUsImg1 .webp" alt="" />

                        <div className="content">
                            <div className="innerContent">
                                <MotionComp>
                                    <div className="text">{t("home.joinUsHeadOne")}</div>
                                </MotionComp>

                                <div className="signimg">
                                    <img loading="lazy" src="/Images/signImg.svg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img2Div">
                        <img loading="lazy" className='w-100' src="/Images/joinUsImg2.webp" alt="" />


                        <div className="content">
                            <div className="innerContent">
                                <MotionComp>
                                    <div className="text">{t("home.joinUsHeadTwoTxt")}</div>

                                    <div className="smallText">
                                        {t("home.joinHeadTwoSubtxt")}
                                    </div>
                                    <Link to='/aboutus'>
                                        <button className='contentBtn'>{t("home.JoinusBtn")}</button>
                                    </Link>
                                    <div className="horizontalTxt">
                                        {t("home.joinusVerTxt")}
                                    </div>
                                </MotionComp>

                            </div>
                        </div>

                        <div className="verticalTxt">
                            {t("home.joinusVerTxt")}
                        </div>


                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img3Div">
                        <img loading="lazy" className='w-100 image3' src="/Images/joinUsImg3.webp" alt="" />

                        <div className="verTxt">
                            {t("home.readyProTxt")}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img4Div">

                        <div className="row gx-0">

                            <div className="col-6"  onClick={() => { 
                                navigate('/ready', { state: { "id": "ready1" } }) 
                            //   navigate('/artstuone', { state: { "id": "text1" } }) 
                                }}>
                               
                                <div className="sqWrapper">
                                    <img loading="lazy" className='w-100 sqImg' src="/Images/stoneBlk1.webp" alt="" />

                                    <div className="sqText"> {t("home.stoneBlkOne")}</div>
                                    <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />
                                </div>
                               
                               
                            </div>
                            <div className="col-6"  onClick={() => { navigate('/ready', { state: { "id": "ready2" } }) }}>
                                <div className="sqWrapper">
                                    <img loading="lazy" className='w-100 sqImg' src="/Images/stoneBlk2.webp" alt="" />
                                    <div className="sqText"> {t("home.stoneBlkTwo")}</div>
                                    <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />
                                </div>

                            </div>
                            <div className="col-6"  onClick={() => { navigate('/ready', { state: { "id": "ready3" } }) }}>
                                <div className="sqWrapper">
                                    <img loading="lazy" className='w-100 sqImg' src="/Images/stoneBlk3.webp" alt="" />
                                    <div className="sqText"> {t("home.stoneBlkThree")}</div>
                                    <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />
                                </div>

                            </div>
                            <div className="col-6"  onClick={() => { navigate('/ready', { state: { "id": "ready4" } }) }}>
                                <div className="sqWrapper">
                                    <img loading="lazy" className='w-100 sqImg' src="/Images/stoneBlk4.webp" alt="" />
                                    <div className="sqText"> {t("home.stoneBlkFour")}</div>
                                    <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUsPage