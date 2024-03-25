import React, { useEffect, useState } from 'react'

function Monuments(props) {

    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        blockData()
    }, [])

    async function blockData() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/public/get-paginated-product-data-list?language=EN`, {
                method: 'GET',
                headers: {

                },
            })
            const data = await res.json()
            console.log(data);
            setBlocks(data.data.categories[0].products_list)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="MonumentsPage" id='ready3'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 px-0">
                            <div className="TombStonesDiv" id='content1'>
                                {/* {props.name} */}
                                <div className="Tombstones">STONE- BLOCKS
                                    STONE SLABS</div>

                                <div className="MonumentsSec">
                                    {/* {props.menus.map((el, item) => {
                                        return (
                                            <div key={item} className="MonWrap">
                                                <div className="Mon">{el}</div>
                                                <img className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                            </div>
                                        )
                                    })} */}
                                    {blocks.map((el,index) => {
                                        return (
                                            <div key={index} className="MonWrap">
                                                <div className="Mon">{el.product_name}</div>
                                                <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                            </div>
                                        )
                                    })}

                                    {/* <div className="MonWrap">
                                        <div className="Mon">WHITE MARBEL</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div>
                                    <div className="MonWrap">
                                        <div className="Mon">MOCCA MARBEL</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div>
                                    <div className="MonWrap">
                                        <div className="Mon">SILVETR TRAVERTAIN</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div>
                                    <div className="MonWrap">
                                        <div className="Mon">BEIGE MARBEL</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div>
                                    <div className="MonWrap">
                                        <div className="Mon">PINT ONYX</div>
                                        <img loading="lazy" className=' Monplus' src="/Images/monuPlus.svg" alt="" />
                                    </div> */}

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="blackMarbleDiv">
                                {/* {props.subHeading} */}
                                <div className="marble">BLACK MARBLE</div>
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
                                            <img loading="lazy" className='w-100 ReadysqImg ' src="/Images/blackMar1.webp" alt="img" />
                                        </div>

                                        <div className="col-lg-4 col-6  px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg ' src="/Images/blackMar2.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg ' src="/Images/blackMar3.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg ' src="/Images/blackMar4.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg ' src="/Images/blackMar5.webp" alt="img" />
                                        </div>
                                        <div className="col-lg-4 col-6 px-0">
                                            <img loading="lazy" className='w-100 ReadysqImg ' src="/Images/blackMar6.webp" alt="img" />
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

export default Monuments