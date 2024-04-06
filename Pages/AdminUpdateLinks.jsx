import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'
import { getBlogWithId, updateBlogList } from '../src/services/admin-auth.service'


function AdminUpdateLinks() {


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


    // useEffect(() => {
    //     getProducts()
    // }, [])

    // useEffect(() => {
    //     getImagesData()
    // }, [])

    // useEffect(() => {
    //     getImagesData()

    // }, [toggler])

    useEffect(() => {
        getBlogId()
    }, [toggler])


    async function getBlogId() {
        try {
            const payload = {"id": id}
            console.log("payload: ", payload)
            const getBlog = await getBlogWithId(payload);
            const data = getBlog.data;// await res.json()
            console.log(data);
            // setProductListState(data.data.product_list.product_data)

            SetLangEN(data.title)
                // setCurCategory(data.data.product_list[0].category_id)
                // SetLangPL(data.data.product_list[1].name)
                // SetLangCZ(data.data.product_list[2].name)
                // SetLangHI(data.data.product_list[3].name)

            // if (data.length) {
            //     console.log("products generated", data)
            //     // setProductListState(data)
            //     // setTotalPages(data.data.project_list.last_page)

            // } else {
            //     // if (Object.values(data.data).length > 0) {
            //     //     toast.warn(Object.values(data.data)[0][0])
            //     // } else {
            //     //     toast.warn(data.message)
            //     // }
            // }

        } catch (error) {
            console.log(error)
        }
    }


    async function updateProducts() {
        try {
            if (!langEN) {
                toast.warn('Please fill the required field')
                return
            }
            // if (!langPL) {
            //     toast.warn('Please fill the required field')
            //     return
            // }
            // if (!langCZ) {
            //     toast.warn('Please fill the required field')
            //     return
            // }
            // if (!langHI) {
            //     toast.warn('Please fill the required field')
            //     return
            // }
            let formData = new FormData()
            // formData.append('category_id', curCategory)

            formData.append('id', id)

            formData.append('title', langEN)
            formData.append('content', 'temp dummy data')
            formData.append('mostPopular', 4)
            formData.append('isActive', true)

            
            let payload = {};

             for (const pair of formData.entries()) {
    const key = pair[0];
    console.log("key: ", key)
    const value = pair[1];
        console.log("value: ", value)


    if (key === 'images') {
        payload[key] = [value]; // If you want to include the entire array
        // If you want to include each value of the array separately:
        // payload[key] = [...(payload[key] || []), ...value];
    } else {
        payload[key] = value;
    }
}

            console.log('payload123: ', payload);
            const blogList = await updateBlogList(payload);
            const data = blogList.data;// await res.json()
            console.log('data: ', data);
            // setProductListState(data.data.product_list.product_data)

            if (data) {
                console.log("products generated", data)
                toast.success('Product Updated Successfully')
                // setProductListState(data);
                navigate('/admin-links')
                // setTotalPages(data.data.project_list.last_page)

            } else {
                // if (Object.values(data.data).length > 0) {
                //     toast.warn(Object.values(data.data)[0][0])
                // } else {
                //     toast.warn(data.message)
                // }
            }

            // if (data.status) {
            //     toast.success('Product Updated Successfully')
            //     navigate('/admin-products')
            // } else {
            //     if (Object.values(data.data).length > 0) {
            //         toast.warn(Object.values(data.data)[0][0])
            //     } else {
            //         toast.warn(data.message)
            //     }
            // }
        } catch (error) {
            console.log(error.message);
        }
    }

    // async function getProducts() {
    //     try {
    //         const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/get-single-product-list?product_id=${id}`, {
    //             method: 'GET',
    //             headers: {

    //             }
    //         })
    //         const data = await res.json()

    //         if (data.status) {
    //             SetLangEN(data.data.product_list[0].name)
    //             setCurCategory(data.data.product_list[0].category_id)
    //             SetLangPL(data.data.product_list[1].name)
    //             SetLangCZ(data.data.product_list[2].name)
    //             SetLangHI(data.data.product_list[3].name)

    //         }

    //         console.log(data);

    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // async function getImagesData() {
    //     try {
    //         const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/get-show-all-image?keyname=product&id=${id}`, {
    //             method: 'GET',
    //             headers: {
    //             }
    //         })
    //         const data = await res.json()
    //         console.log(data);

    //         if (data.status) {
    //             setImages(data.data.image_list)
    //         } else {
    //             if (Object.values(data.data).length > 0) {
    //                 toast.warn(Object.values(data.data)[0][0])
    //             } else {
    //                 toast.warn(data.message)
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // async function postImagesData(filee) {
    //     try {

    //         let formData = new FormData
    //         formData.append('images[0]', filee)
    //         formData.append('id', id)
    //         formData.append('keyname', 'product')

    //         const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/post-store-image`, {
    //             method: 'POST',
    //             headers: {
    //             },
    //             body: formData
    //         })
    //         const data = await res.json()
    //         if (data.status) {
    //             toast.success('Image Successfully Added')

    //             setToggler((state) => !state)
    //         }
    //         console.log(data);

    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // async function deleteImages(product_id) {

    //     let formData = new FormData()
    //     formData.append('id', id)
    //     formData.append('image_id', product_id)
    //     formData.append('keyname', 'product')
    //     formData.append('_method', 'DELETE')

    //     try {
    //         const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/delete-image`, {
    //             method: 'POST',
    //             headers: {
    //             },
    //             body: formData
    //         })
    //         const data = await res.json()
    //         console.log(data);

    //         if (data.status) {
    //             setToggler((state) => !state)

    //         } else {
    //             if (Object.values(data.data).length > 0) {
    //                 toast.warn(Object.values(data.data)[0][0])
    //             } else {
    //                 toast.warn(data.message)
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }



    return (
        <>
            <div className='AdminDashMain'>
                <AdminHead />
                <div className="AdContent">
                    <AdminSidebar />
                    <div className="adRightContent">
                        <div className="pathSec">
                            <div className="title">
                                Update Links
                            </div>
                            <div className="path">
                                Admin	&gt; Links	&gt; <span> Update Links</span>
                            </div>
                        </div>
                        {/* add tag form */}
                        <div className="formDiv">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="formTitle">
                                        Update Links
                                    </div>
                                    <div className="form">
                                        <div className="inBox">
                                            <div className="inTitle">Link Heading(EN)<span className='req'>*</span> </div>
                                            <input type="text" name="" value={langEN} onChange={(e) => {
                                                SetLangEN(e.target.value)
                                            }} className='inText' placeholder='Enter title' id="" />
                                        </div>
                                        <div className="inBox">
                                            <div className="inTitle">Link Heading(PL) <span className='req'>*</span> </div>
                                            <input type="text" name="" value={langPL} onChange={(e) => {
                                                SetLangPL(e.target.value)
                                            }} className='inText' placeholder='Enter title' id="" />
                                        </div>
                                        <div className="inBox">
                                            <div className="inTitle">Link Heading(CZ) <span className='req'>*</span> </div>
                                            <input type="text" name="" value={langCZ} onChange={(e) => {
                                                SetLangCZ(e.target.value)
                                            }} className='inText' placeholder='Enter title' id="" />
                                        </div>
                                        <div className="inBox">
                                            <div className="inTitle">Link Heading(HI) <span className='req'>*</span> </div>
                                            <input type="text" name="" value={langHI} onChange={(e) => {
                                                SetLangHI(e.target.value)
                                            }} className='inText' placeholder='Enter title' id="" />
                                        </div>

                                        <div className="inBox">
                                            <div className="inTitle">Go to Link<span className='req'>*</span> </div>
                                            <input type="text" name="" className='inText' placeholder='Enter Link' id="" />
                                        </div>

                                        <div className="inBox">
                                            <div className="inTitle">Is Active</div>
                                            <input type="checkbox" checked={tagIsActive ? "checked" : ""} onChange={(e) => {
                                                setTagIsActive(e.target.checked)
                                            }} name="" className='inCheck' id="" />
                                        </div>


                                        <div className="formBtns">
                                            <button className="add" onClick={() => { updateProducts() }} >
                                                Add Links
                                            </button>
                                            <Link to={'/admin-links'}>
                                                <button className="cancel">
                                                    Cancel
                                                </button>
                                            </Link>
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

export default AdminUpdateLinks