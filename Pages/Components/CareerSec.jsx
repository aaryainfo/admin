import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function CareerSec() {

    const navigate = useNavigate()

    const [t, i18n] = useTranslation("global")

    return (
        <div className='CareerDiv'>
            <div className="container-fluid mx-0">
                <div className="carHead">{t("home.careerMainTXt")}</div>
                <div className="cardsWrapper">
                    <div className="row">
                        <div className="col-lg-4 px-0">
                            <div className="careerCard"  onClick={() => { navigate('/careerA', { state: { "id": "career1" } }) }}>
                                <img loading="lazy" className='Careerimg w-100' src="/Images/Career1.webp" alt="" />

                                <div className="carContent">
                                    <div className="txt">{t("home.careerSmtxtOne")}</div>
                                    <img loading="lazy" className='plusIco' src="/Images/careerPlus.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 px-0">
                            <div className="careerCard"  onClick={() => { navigate('/careerB', { state: { "id": "career2" } }) }}>
                                <img loading="lazy" className='Careerimg w-100' src="/Images/Career2.webp" alt="" />

                                <div className="carContent">
                                    <div className="txt">{t("home.careerSmtxtTwo")}</div>
                                        <img loading="lazy" className='plusIco' src="/Images/careerPlus.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 px-0">
                            <div className="careerCard"  onClick={() => { navigate('/careerC', { state: { "id": "career3" } }) }}>
                                <img loading="lazy" className='Careerimg w-100' src="/Images/Career3.webp" alt="" />

                                <div className="carContent">
                                    <div className="txt">{t("home.careerSmtxtThree")}</div>
                                        <img loading="lazy" className='plusIco' src="/Images/careerPlus.svg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CareerSec