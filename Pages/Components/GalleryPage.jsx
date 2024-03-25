import React, { useEffect, useState } from 'react'

import data from "../data/image.json"
import Modal from '../Components/Modal'

// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function GalleryPage() {

    const [clickedImg, setClickedImg] = useState(null)
    const [cureentIndex, setCurrentIndex] = useState(null)

    const handleClick = (item, index) => {
        setCurrentIndex(index)
        setClickedImg(item.link)
    }

    const handelRotationRight = () => {
        const totalLength = data.data.length
        if (cureentIndex + 1 >= totalLength) {
            setCurrentIndex(0)
            const newUrl = data.data[0]
            setClickedImg(newUrl)
            return;
        }
        const newIndex = cureentIndex + 1
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex
        })
        const newItem = newUrl[0].link
        setClickedImg(newItem)
        setCurrentIndex(newIndex)
    }


    const handelRotationLeft = () => {
        const totalLength = data.data.length
        if (cureentIndex === 0) {
            setCurrentIndex(totalLength - 1)
            const newUrl = data.data[totalLength - 1].link
            setClickedImg(newUrl)
            return;
        }
        const newIndex = cureentIndex - 1
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex
        })
        const newItem = newUrl[0].link
        setClickedImg(newItem)
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <>
            <div className="GalleryDiv">
                <div className="container">
                    <div className="innerGallery">
                        <div className="row gx-0">
                            {data.data.map((el, index) => {
                                return (
                                    <div className="col-lg-2 col-6">
                                        <div onClick={() => { handleClick(el, index) }} className="Wrapper">
                                            <div key={index} className="wrapper-img">
                                                <img loading="lazy" className='w-100' src={el.link} alt={el.text} />
                                            </div>

                                            <div className="AbtplusSign">
                                                <img loading="lazy" src="/Images/AbtusPlusSign.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>


            </div>

            {clickedImg &&
                <Modal clickedImg={clickedImg} handelRotationRight={handelRotationRight} setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                />}
        </>
    )
}

export default GalleryPage
