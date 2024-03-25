import React from 'react'
import { Link } from 'react-router-dom'

function Readypage() {

    function myFunctionBlks() {
        const element = document.getElementById("content1");
        element.scrollIntoView();
    }

    return (
        <>
            <div className="ReadyProductDiv">
                <div className="container-fluid mx-0 px-0">
                    <div className="row gx-0">
                        <div className="col-lg-6">
                            <div className="imgDiv">
                                <img loading="lazy" className='w-100' src="/Images/ReadyImg1.webp" alt="" />
                                <div className="ReadyContent">
                                    <div className="readyWrapper">
                                        <div className="content">READY <span><img loading="lazy" src="/Images/ArtImg.svg" alt="" /></span>
                                            OF DAGAD ART</div>
                                        <div className="smText">Get to know our products and enjoy perfect design </div>
                                        <div className="elements">
                                            <div className="elem"  onClick={() => { myFunctionBlks() }}>SEE OUR PRODUCTS</div>
                                            <Link to='/artstuone'  className='textDecor'>
                                                <div className="elem">ART STUDIO</div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img loading="lazy" className='w-100' src="/Images/ReadyImg2.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Readypage