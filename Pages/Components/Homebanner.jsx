import React from 'react'
import { motion } from 'framer-motion'
import MotionComp from './MotionComp'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Homebanner() {

    const [t, i18n] = useTranslation("global")

    return (
        <div className='HomebannerSec' >
            <div className="container">
                <div className="BannerPage">
                    <div className="row align-items-start gy-4">
                        <div className="col-lg-5">
                            <MotionComp>
                                <div

                                    className="InnerDiv">

                                    <div className="WelHorizontalDiv">
                                        WELCOME IN DAGADART
                                    </div>

                                    <div className="bannerContent" style={{ color: 'black' }} >{t("home.heroHeading")}<span><img loading="lazy" className='artImg' src="/Images/bannerSmall .webp" alt="img" /></span> <br /></div>
                                    <div className="bannerText">{t("home.heroSubHeading")}</div>
                                    <div className="artstudioDiv d-sm-block d-none ">

                                        <Link to='/ready' className='textDecor'>
                                            <div className="artStudio">{t("home.heroPtOne")}</div>
                                        </Link>
                                        <Link to='/artstuone' className='textDecor' >
                                            <div className="artStudio">{t("home.heroPtTwo")}</div>
                                        </Link>
                                    </div>

                                    <div className="WelVerticalDiv">
                                        {t("home.heroVerText")}
                                    </div>

                                </div>
                            </MotionComp>

                        </div>
                        <div className="col-lg-7">
                            <div className="productsArt">
                                <div className="InnerDivImg">
                                    <img loading="lazy" className='w-100 d-none d-sm-block' src="/Images/homeBanner1.webp" alt="" />
                                    <img loading="lazy" className='w-100 d-block d-sm-none' src="/Images/mobBanImg.webp" alt="" />
                                    {/* <div className="mobProducts">
                                    <div className="mobproductText">SEE OUR PRODUCTS</div>
                                    <div className="mobproductText">ART STUDIO</div>
                                </div> */}
                                </div>

                                <div className="artstudioDiv d-sm-none d-block">
                                    <Link to='/ready'>
                                        <div className="artStudio">SEE OUR PRODUCTS</div>
                                    </Link>

                                    <div className="artStudio">ART STUDIO</div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
            <div className="contactDetailsDiv">
                <div className="CallDiv">
                    <div className="call">{t("home.heroCall")}</div>
                    <div className="wapLogo"><img loading="lazy" src="/Images/WapLogo.svg" alt="" /></div>
                </div>
                <div className="CallDiv">
                    <div className="call">{t("home.heroSocialmedia")}</div>
                    <div className="wapLogo"><img loading="lazy" src="/Images/InstaLogo.svg" alt="" /></div>
                </div>
                <div className="CallDiv">
                    <div className="call">{t("home.heroContact")}</div>
                    <div className="wapLogo"><img loading="lazy" src="/Images/@rateLogo.svg" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Homebanner