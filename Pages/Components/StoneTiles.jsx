import React, { useEffect, useState } from 'react'

function StoneTiles() {

    const [stoneProduct, SetstoneProduct] = useState([])

    useEffect(() => {
        stoneProducts()
    }, [])

    async function stoneProducts() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/public/get-paginated-product-data-list?language=EN`, {
                method: 'GET',
                headers: {

                },
            })
            const data = await res.json()
            console.log(data);
            SetstoneProduct(data.data.categories[1].products_list)
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <div className="StoneTilesSec">
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="col-lg-6 px-0" id='ready4'>
                            <div className="TombStonesDiv" id='content2'>
                                {/* {props.name} */}
                                <div className="Tombstones">STONE PRODUCTS- TILES, BALUSTERS, STONE FURNITURE</div>

                                <div className="MonumentsSec">
                                    {/* {props.menus.map((el, item) => {
                                        return (
                                            <div key={item} className="MonWrap">
                                                <div className="Mon">{el}</div>
                                                <img className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                            </div>
                                        )
                                    })} */}

                                    {stoneProduct.map((el,index)=>{
                                        return(
                                            <div key={index} className="MonWrap">
                                            <div className="Mon">{el.product_name}</div>
                                            <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                        </div>
                                        )
                                    })}
                                   
                                    {/* <div className="MonWrap">
                                        <div className="Mon">BALUSTERS</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div>
                                    <div className="MonWrap">
                                        <div className="Mon">STONE FURNITURE</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div> */}
                                
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="blackMarbleDiv">
                                {/* {props.subHeading} */}
                                <div className="marble">TILES</div>
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
                                            <img loading="lazy"  className='w-100 ReadysqImg' src="/Images/tilesImg3.webp" alt="img" />
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

export default StoneTiles