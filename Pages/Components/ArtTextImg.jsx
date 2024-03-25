import React from 'react'

function ArtTextImg() {
    return (
        <>
            <div className="artTextImgDiv">
                <div className="ArtTxt">
                    <div className="container-fluid mx-0">
                        <div className="row">
                            <div className="col-lg-6 px-0 py-0">
                                <div className="imgSec"  style={{backgroundImage: `url(${"/Images/ArtTmainImg1.webp"})`}}>
                                    <img loading="lazy" className='w-100 artTImg artImg1' src="/Images/ArtTmainImg1.webp" alt="img" />
                                    <div className="artText">

                                        <div className="InnerTxt">
                                            <div className="text">In our 3D design and sculpting processes, we harness the power of various well-known software brands such as Autodesk Fusion 360, Maya, ZBrush, Blender, and Unreal Engine. This not only streamlines the manufacturing process but also proves to be a significant advantage during the design stage. The versatility of these software tools empowers our creative team to explore intricate details, experiment with diverse textures, and iterate rapidly, ultimately leading to more refined and innovative designs. This, in turn, enhances our ability to collaborate seamlessly with vendors, as we can provide them with meticulously crafted models that are not just ready for manufacturing but also embody a level of precision and detail that sets our work apart.
                                            </div>
                                            <img loading="lazy" className="ThreeDImg" src="/Images/3D.png " alt="img" />

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 px-0">
                                <img loading="lazy" className='w-100 artTImg' src="/Images/ArtTmainImg2.webp" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtTextImg