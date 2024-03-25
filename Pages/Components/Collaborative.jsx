import React from 'react'
import MotionComp from './MotionComp'
import { useTranslation } from 'react-i18next'

function Collaborative() {

  const [t, i18n] = useTranslation("global")
 
  return (
    <div className='CollaborativeDiv'>
      <div className="container-fluid mx-0">
        <div className="row">
          <div className="col-lg-5 px-0">

          </div>
          <div className="col-lg-7 px-0">
            <div className="CollaborativeContent">
              <MotionComp>
                <div className="Text">{t("home.FooterTxt")}</div>

                <div className="embElement">
                  <div className="elem">
                    <img loading="lazy" src="/Images/EmbEle1.svg" alt="" />
                    <div className="txt">{t("home.FootCountryPL")}</div>
                    <div className="smalltxt">{t("home.FooterSubTxt")}
                    </div>
                  </div>

                  <div className="elem">
                    <img loading="lazy" src="/Images/EmbEle1.svg" alt="" />
                    <div className="txt"> {t("home.FootCountryCZ")}</div>
                    <div className="smalltxt"> {t("home.FooterSubTxt")}
                    </div>
                  </div>

                  <div className="elem">
                    <img loading="lazy" src="/Images/EmbEle1.svg" alt="" />
                    <div className="txt"> {t("home.FootCountryIN")}</div>
                    <div className="smalltxt"> {t("home.FooterSubTxt")}
                    </div>
                  </div>
                </div>
              </MotionComp>

              <MotionComp>
                <div className="collabForm">
                  <input className='inputForm' placeholder= {t("home.footerName")} type="text" />
                  <input className='inputForm' placeholder={t("home.footerSubject")} type="text" />
                  <input className='inputForm' placeholder={t("home.footerEmail")} type="text" />
                  <textarea className='inputForm' name="" id="" cols="30" rows="6" placeholder={t("home.footerMsg")}></textarea>

                  <div className="btnWrapper">
                    <button className='CollabBtn'>
                    {t("home.footerSend")}
                    </button>
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

export default Collaborative