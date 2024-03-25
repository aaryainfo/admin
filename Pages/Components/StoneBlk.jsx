import React from 'react'
// import { useNavigate } from 'react-router-dom';

function StoneBlk() {

    
    function myFunctionBlks() {
        const element = document.getElementById("content1");
        element.scrollIntoView();
    }

    function myFunctionPro() {
        const element = document.getElementById("content2");
        element.scrollIntoView();
    }

    function myFunctionTomb() {
        const element = document.getElementById("content3");
        element.scrollIntoView();
    }

    function myFunctionUni() {
        const element = document.getElementById("content4");
        element.scrollIntoView();
    }

    return (
        <>
            <div className="StoneblkDiv">
                <div className="container px-md-2 px-0">
                    <div className="row gx-0">
                        <div className="col-md-3 col-6">
                            <div className="stoneSec" onClick={() => { myFunctionBlks() }}>
                                <img loading="lazy" className='w-100 sqImg ' src="/Images/stoneBlk1.webp" alt="img" />

                                <div className="sqText">STONE- BLOCKS
                                    STONE SLABS</div>
                                <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                            </div>
                        </div>
                        <div className="col-md-3 col-6" >
                            <div className="stoneSec" onClick={()=>{myFunctionPro()}}>
                                <img loading="lazy" className='w-100 sqImg ' src="/Images/stoneBlk2.webp" alt="img" />
                                <div className="sqText">STONE
                                    PRODUCTS</div>
                                <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stoneSec" onClick={()=>{myFunctionTomb()}}>
                                <img loading="lazy" className='w-100 sqImg ' src="/Images/stoneBlk3.webp" alt="img" />

                                <div className="sqText">Tombstones and Monuments </div>
                                <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stoneSec" onClick={()=>{myFunctionUni()}}>
                                <img loading="lazy" className='w-100 sqImg ' src="/Images/stoneBlk4.webp" alt="img" />

                                <div className="sqText">Sculptures and unique projects</div>
                                <img loading="lazy" className='plusIcon' src="/Images/groupPlus.svg" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoneBlk