import React, { useEffect } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'

export default function AdminUpdateProduct() {

    const navigate = useNavigate()

    const { id } = useParams()


    const [curCategory, setCurCategory] = useState('')

    // add product states 

    const [tagIsActive, setTagIsActive] = useState(true)

    const [langEN, SetLangEN] = useState('')
    const [langPL, SetLangPL] = useState('')
    const [langCZ, SetLangCZ] = useState('')
    const [langHI, SetLangHI] = useState('')


    const [images, setImages] = useState([])

    const [toggler, setToggler] = useState(false)

    // addTagFn
    // async function addTagFn() {
    //     try {
    //         if (!tagTitle) {
    //             toast.warn("Please fill required fields")
    //             return
    //         }

    //         let formData = new FormData()
    //         formData.append('title', tagTitle)
    //         formData.append('is_active', tagIsActive ? 1 : 0)

    //         let token = localStorage.getItem('vivotoken')
    //         const res = await fetch('https://vivopune.com/backend/public/api/admin/add-new-tag', {
    //             method: "POST",
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             },
    //             body: formData
    //         })
    //         const data = await res.json()
    //         console.log(data)
    //         if (data.status) {

    //             toast.success(data.message)
    //             navigate('/admin-tags')
    //         } else {
    //             if (Object.values(data.data).length > 0) {
    //                 toast.warn(Object.values(data.data)[0][0])
    //             } else {
    //                 toast.warn(data.message)
    //             }
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         toast.warn("Something went wrong")
    //     }
    // }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getImagesData()
    }, [])

    useEffect(() => {
        getImagesData()

    }, [toggler])


    async function updateProducts() {
        try {
            if (!langEN) {
                toast.warn('Please fill the required field')
                return
            }
            if (!langPL) {
                toast.warn('Please fill the required field')
                return
            }
            if (!langCZ) {
                toast.warn('Please fill the required field')
                return
            }
            if (!langHI) {
                toast.warn('Please fill the required field')
                return
            }
            let formData = new FormData()
            formData.append('category_id', curCategory)

            formData.append('product_id', id)

            formData.append('en_name', langEN)
            formData.append('pl_name', langPL)
            formData.append('cz_name', langCZ)
            formData.append('hi_name', langHI)

            // PUT method
            formData.append('_method', 'PUT')

            formData.append('is_active', tagIsActive ? 1 : 0)

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/put-update-product`, {
                method: 'POST',
                headers: {

                },
                body: formData
            })
            const data = await res.json()
            console.log(data);

            if (data.status) {
                toast.success('Product Updated Successfully')
                navigate('/admin-products')
            } else {
                if (Object.values(data.data).length > 0) {
                    toast.warn(Object.values(data.data)[0][0])
                } else {
                    toast.warn(data.message)
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getProducts() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/get-single-product-list?product_id=${id}`, {
                method: 'GET',
                headers: {

                }
            })
            const data = await res.json()

            if (data.status) {
                SetLangEN(data.data.product_list[0].name)
                setCurCategory(data.data.product_list[0].category_id)
                SetLangPL(data.data.product_list[1].name)
                SetLangCZ(data.data.product_list[2].name)
                SetLangHI(data.data.product_list[3].name)

            }

            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    }

    async function getImagesData() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/get-show-all-image?keyname=product&id=${id}`, {
                method: 'GET',
                headers: {
                }
            })
            const data = await res.json()
            console.log(data);

            if (data.status) {
                setImages(data.data.image_list)
            } else {
                if (Object.values(data.data).length > 0) {
                    toast.warn(Object.values(data.data)[0][0])
                } else {
                    toast.warn(data.message)
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function postImagesData(filee) {
        try {

            let formData = new FormData
            formData.append('images[0]', filee)
            formData.append('id', id)
            formData.append('keyname', 'product')

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/post-store-image`, {
                method: 'POST',
                headers: {
                },
                body: formData
            })
            const data = await res.json()
            if (data.status) {
                toast.success('Image Successfully Added')

                setToggler((state) => !state)
            }
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteImages(product_id) {

        let formData = new FormData()
        formData.append('id', id)
        formData.append('image_id', product_id)
        formData.append('keyname', 'product')
        formData.append('_method', 'DELETE')

        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/delete-image`, {
                method: 'POST',
                headers: {
                },
                body: formData
            })
            const data = await res.json()
            console.log(data);

            if (data.status) {
                setToggler((state) => !state)

            } else {
                if (Object.values(data.data).length > 0) {
                    toast.warn(Object.values(data.data)[0][0])
                } else {
                    toast.warn(data.message)
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div className='AdminDashMain'>
            <AdminHead />
            <div className="AdContent">
                <AdminSidebar />
                <div className="adRightContent">
                    <div className="pathSec">
                        <div className="title">
                            Update Product
                        </div>
                        <div className="path">
                            Admin	&gt; Products	&gt; <span> Update product</span>
                        </div>
                    </div>
                    {/* add tag form */}
                    <div className="formDiv">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="formTitle">
                                    Update Products
                                </div>
                                <div className="form">
                                    <div className="inBox">
                                        <div className="inTitle">Product Name(EN)<span className='req'>*</span> </div>
                                        <input type="text" name="" value={langEN} onChange={(e) => {
                                            SetLangEN(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Product Name(PL) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={langPL} onChange={(e) => {
                                            SetLangPL(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Product Name(CZ) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={langCZ} onChange={(e) => {
                                            SetLangCZ(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Product Name(HI) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={langHI} onChange={(e) => {
                                            SetLangHI(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Is Active</div>
                                        <input type="checkbox" checked={tagIsActive ? "checked" : ""} onChange={(e) => {
                                            setTagIsActive(e.target.checked)
                                        }} name="" className='inCheck' id="" />
                                    </div>

                                    <div className="imgsDDiv">
                                        <div className="headi">Images</div>

                                        <label htmlFor="inpId" className='imgBtn'>
                                            Choose image
                                        </label>

                                        <input onChange={(e) => {
                                            postImagesData(e.target.files[0])
                                        }} type="file" className='d-none' name="" id="inpId" />

                                        <div className="imgs">
                                            {images.map((img, inx) => {
                                                return (
                                                    <div className="imgWrapper">
                                                        <img key={inx} src={img.image} width={70} alt="img" />
                                                        <button onClick={() => {
                                                            deleteImages(img.id)

                                                        }} className="cls">X</button>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/* <div className="imgsDDiv">
                                        <div className="imgs">
                                            <div className="imgWrapper">
                                                <img src='/Images/artSsubImg1.webp' width={70} alt="img" />
                                                <button onClick={() => {
                                                    dltImg(inx)
                                                }} className="cls">X</button>
                                            </div>

                                            <div className="imgWrapper">
                                                <img src='/Images/artSsubImg1.webp' width={70} alt="img" />
                                                <button onClick={() => {
                                                    dltImg(inx)
                                                }} className="cls">X</button>
                                            </div>

                                            <div className="imgWrapper">
                                                <img src='/Images/artSsubImg1.webp' width={70} alt="img" />
                                                <button onClick={() => {
                                                    dltImg(inx)
                                                }} className="cls">X</button>
                                            </div>
                                        </div>

                                    </div> */}



                                    <div className="formBtns">
                                        <button className="add" onClick={() => { updateProducts() }} >
                                            Update Product

                                        </button>
                                        <Link to={'/admin-products'}>
                                            <button className="cancel">
                                                Cancel
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="catsTags">
                                    <div className="catSec">
                                        <div className="cattitle">
                                            Choose Category
                                        </div>
                                        <ul className='CatUl' >
                                            <li className='CatLi'>
                                                <div className="catElem">
                                                    <input onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setCurCategory(1)
                                                        }
                                                    }} checked={curCategory == 1 ? "checked" : ""} type="checkbox" /> STONE- BLOCKS STONE SLABS
                                                </div>

                                                <div className="catElem">
                                                    <input onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setCurCategory(2)
                                                        }
                                                    }} checked={curCategory == 2 ? "checked" : ""} type="checkbox" /> STONE PRODUCTS
                                                </div>

                                                <div className="catElem">
                                                    <input onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setCurCategory(3)
                                                        }
                                                    }} checked={curCategory == 3 ? "checked" : ""} type="checkbox" /> TOMBSTONES AND MONUMENTS
                                                </div>

                                                <div className="catElem">
                                                    <input onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setCurCategory(4)
                                                        }
                                                    }} checked={curCategory == 4 ? "checked" : ""} type="checkbox" /> SCULPTURES AND UNIQUE PROJECTS
                                                </div>
                                            </li>
                                        </ul>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
