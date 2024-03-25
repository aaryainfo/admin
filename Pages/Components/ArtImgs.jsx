import React from 'react'

function ArtImgs() {
    return (
        <>
            <div className="artImagesDiv">
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artTextImg1.webp" alt="" />
                        </div>
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artTextImg2.webp" alt="" />
                        </div>
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artTextImg3.webp" alt="" />
                        </div>
                        <div className="col-lg-3 col-6 px-0">
                            <img loading="lazy" className='w-100 artImgg' src="/Images/artTextImg4.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtImgs