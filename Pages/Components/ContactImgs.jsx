import React from 'react'

function ContactImgs() {
    return (
        <>
            <div className="contactImgsDiv">
                <div className="container-fluid px-0">
                    <div className="row gx-0">
                        <div className="col-lg-6">
                            <div className="conImg">
                                <img loading="lazy" className='w-100 imgg' src="/Images/contactImg1.webp" alt="img" />
                                <div className="verTxt">DAGADART</div>
                                <div className="ImgDiv">
                                <div className="verTxtt">DAGADART</div>
                                    <div className="conTxt">CONNECT WITH DAGADART ACROSS CONTINENTS</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img loading="lazy" className='w-100 imgg' src="/Images/contactImg2.webp" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactImgs