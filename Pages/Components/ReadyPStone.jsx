import React, { useEffect, useState } from 'react'

function ReadyPStone() {

    const [uniqueProject, SetuniqueProject] = useState([])

    useEffect(() => {
        uniqueProducts()
    }, [])

    async function uniqueProducts() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/public/get-paginated-product-data-list?language=EN`, {
                method: 'GET',
                headers: {

                },
            })
            const data = await res.json()
            console.log(data);
            SetuniqueProject(data.data.categories[3].products_list)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="StoneTilesSec" id='ready2'>
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="col-lg-6 px-0">
                            <div className="TombStonesDiv" id='content4'>
                                {/* {props.name} */}
                                <div className="Tombstones">SCULPTURES
                                    AND UNIQUE PROJECTS</div>

                                <div className="MonumentsSec">
                                    {/* {props.menus.map((el, item) => {
                                        return (
                                            <div key={item} className="MonWrap">
                                                <div className="Mon">{el}</div>
                                                <img className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                            </div>
                                        )
                                    })} */}

                                    {uniqueProject.map((el, index) => {
                                        return (
                                            <div key={index} className="MonWrap">
                                                <div className="Mon">{el.product_name}</div>
                                                <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                            </div>
                                        )
                                    })}

                                    {/* <div className="MonWrap">
                                        <div className="Mon">BLANK SLOT</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div>
                                    <div className="MonWrap">
                                        <div className="Mon">BLANK SLOT</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div> */}

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="blackMarbleDiv">
                                {/* {props.subHeading} */}
                                <div className="marble">SINGLE TOMBSTONES</div>
                                <div className="black-marble">
                                    <div className="row gx-0">
                                        {/* {props.images.map((el, item) => {
                                            return (
                                                <div key={item} className="col-lg-4 col-6 px-0">
                                                    <img className='w-100 ReadysqImg' src={`/Images/${el}`} alt="img" />
                                                </div>
                                            )
                                        })} */}

                                        <div className="col-lg-4 col-6  px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg' src="/Images/tilesImg1.webp" alt="img" />
                                        </div>

                                        <div className="col-lg-4 col-6  px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg' src="/Images/tilesImg2.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg' src="/Images/tilesImg3.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg' src="/Images/tilesImg4.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg' src="/Images/tilesImg5.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg' src="/Images/tilesImg6.webp" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ReadyPStone