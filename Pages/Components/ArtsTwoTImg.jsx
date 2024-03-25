import React from 'react'

function ArtsTwoTImg() {
    return (
        <>
            <div className="artTextImgDiv">
                <div className="ArtTxt">
                    <div className="container-fluid mx-0">
                        <div className="row">
                            <div className="col-lg-6 px-0 py-0">
                                <div className="imgSec" style={{backgroundImage: `url(${"/Images/artSTwoTxt1.webp"})`}}>
                                    <img loading="lazy" className='w-100 artTImg artImg1' src="/Images/artSTwoTxt1.webp" alt="img" />
                                    <div className="artText">

                                        <div className="InnerTxt">
                                            <div className="text">
                                                <p>Beyond the realm of robots and machines, our team includes skilled craftsmen and sculptors who contribute a unique and artistic touch to our objects, sculptures, and products. Their craftsmanship adds an extra layer of finesse and individuality to the final creations. </p>
                                                <p>The marriage of 3D printing and scanning not only streamlines our manufacturing process but also fosters an environment of continuous innovation. It empowers us to iterate rapidly, make adjustments with ease, and deliver final products that exceed expectations.</p>
                                                <p>In the realm of prototyping and manufacturing, 3D printing and scanning stand as pillars of efficiency and innovation. These technologies propel our creations from the digital canvas to tangible masterpieces, ensuring that every detail is meticulously realized. Explore the future of design with us, where precision meets imagination.</p>
                                            </div>
                                            {/* <img className="ThreeDImg" src="/Images/3D.png " alt="img" /> */}

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 px-0">
                                <img loading="lazy" className='w-100 artTImg' src="/Images/artSTwoTxt2.webp" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtsTwoTImg