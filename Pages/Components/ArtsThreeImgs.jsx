import React from 'react'

function ArtsThreeImgs() {
    return (
        <>
            <div className="artImagesDiv">
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artThreeImg1.webp" alt="" />
                        </div>
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artThreeImg2.webp" alt="" />
                        </div>
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artThreeImg3.webp" alt="" />
                        </div>
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artThreeImg4.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtsThreeImgs