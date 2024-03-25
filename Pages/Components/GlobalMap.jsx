import React from 'react'
import MotionComp from './MotionComp'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


function GlobalMap() {

    const [t, i18n] = useTranslation("global")
console.log(i18n);    
    // const getJsonData = async (namespace) => {
    //     const data = await i18n.getResourceBundle(i18n.globalMapsubTxt, namespace);
    //     console.log(data);
    // };    // Function to render dynamic content
    const renderDynamicContent = () => {
        return i18n.globalMapsubTxt.map((item, index) => (
            <div key={index}>
                <p>{t(item.globalMapsubTxt1)}</p>
                <p>{t(item.globalMapsubTxt2)}</p>
            </div>
        ));
console.log(renderDynamicContent);

    };

    return (
        <div className='GlobalMapDiv'>
            <div className='container-fluid mx-0'>
                <div className="row">
                    {/* <img src="/Images/GlobalMap.png" alt="" /> */}

                    <div className="col-lg-12">
                        <MotionComp>
                            <div className="content-global">
                                <div className="globalText">{t("home.globalMapTxt")}</div>
                                {renderDynamicContent}
                                <Link to='/contact'>
                                    <button className='globalButton'>{t("home.globalMapBtn")}</button>
                                </Link>
                                
                            </div>
                        </MotionComp>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default GlobalMap