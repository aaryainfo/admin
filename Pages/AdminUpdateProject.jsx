import React, { useEffect, useRef } from 'react'
import JoditEditor from 'jodit-react';

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'

export default function AdminUpdateProject() {

    const navigate = useNavigate()

    const { id } = useParams()


    const [curCategory, setCurCategory] = useState('')


    // add product states 
    const [tagTitle, setTagTitle] = useState('')
    const [tagIsActive, setTagIsActive] = useState(true)

    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const editor3 = useRef(null);
    const editor4 = useRef(null);

    // const [content, setContent] = useState('');

    const [langEN, SetLangEN] = useState('')
    const [langPL, SetLangPL] = useState('')
    const [langCZ, SetLangCZ] = useState('')
    const [langHI, SetLangHI] = useState('')

    const [idNumEN, setidNumEN] = useState('')
    const [idNumPL, setidNumPL] = useState('')
    const [idNumCZ, setidNumCZ] = useState('')
    const [idNumHI, setidNumHI] = useState('')

    const [dateEN, setDateEN] = useState('')
    const [datePL, setDatePL] = useState('')
    const [dateCZ, setDateCZ] = useState('')
    const [dateHI, setDateHI] = useState('')

    const [textEN, setTextEN] = useState('')
    const [textPL, setTextPL] = useState('')
    const [textCZ, setTextCZ] = useState('')
    const [textHI, setTextHI] = useState('')

    const [pdfEN, setPdfEN] = useState('')
    const [pdfPL, setPdfPL] = useState('')
    const [pdfCZ, setPdfCZ] = useState('')
    const [pdfHI, setPdfHI] = useState('')
    const [viewPdfEN, setviewPdfEN] = useState('')
    const [viewPdfPL, setviewPdfPL] = useState('')
    const [viewPdfCZ, setviewPdfCZ] = useState('')
    const [viewPdfHI, setviewPdfHI] = useState('')


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


    async function deleteImages(product_id) {

        let formData = new FormData()
        formData.append('id', id)
        formData.append('image_id', product_id)
        formData.append('keyname', 'project')
        formData.append('_method', 'DELETE')

        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/delete-image`, {
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

            formData.append('project_id', id)

            formData.append('en_title', langEN)
            formData.append('pl_title', langPL)
            formData.append('cz_title', langCZ)
            formData.append('hi_title', langHI)

            formData.append('en_identification_number', idNumEN)
            formData.append('pl_identification_number', idNumPL)
            formData.append('cz_identification_number', idNumCZ)
            formData.append('hi_identification_number', idNumHI)

            formData.append('en_date', dateEN)
            formData.append('pl_date', datePL)
            formData.append('cz_date', dateCZ)
            formData.append('hi_date', dateHI)

            formData.append('en_text', textEN)
            formData.append('pl_text', textPL)
            formData.append('cz_text', textCZ)
            formData.append('hi_text', textHI)

            if (pdfEN) {
                formData.append('en_pdf', pdfEN)
            }
            if (pdfPL) {
                formData.append('pl_pdf', pdfPL)
            }
            if (pdfCZ) {
                formData.append('cz_pdf', pdfCZ)
            }
            if (pdfHI) {
                formData.append('hi_pdf', pdfHI)
            }

            formData.append('is_active', tagIsActive ? 1 : 0)

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/put-update-project`, {
                method: 'POST',
                headers: {

                },
                body: formData
            })
            const data = await res.json()
            console.log(data);

            if (data.status) {
                toast.success('Project Updated Successfully')
                navigate('/admin-projects')
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
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/get-single-project?project_id=${id}`, {
                method: 'GET',
                headers: {

                }
            })
            const data = await res.json()

            if (data.status) {
                SetLangEN(data.data.project_list[0].title)
                SetLangPL(data.data.project_list[1].title)
                SetLangCZ(data.data.project_list[2].title)
                SetLangHI(data.data.project_list[3].title)

                setidNumEN(data.data.project_list[0].identification_number)
                setidNumPL(data.data.project_list[1].identification_number)
                setidNumCZ(data.data.project_list[2].identification_number)
                setidNumHI(data.data.project_list[3].identification_number)

                setDateEN(data.data.project_list[0].initiation_date)
                setDatePL(data.data.project_list[1].initiation_date)
                setDateCZ(data.data.project_list[2].initiation_date)
                setDateHI(data.data.project_list[3].initiation_date)

                setTextEN(data.data.project_list[0].text)
                setTextPL(data.data.project_list[1].text)
                setTextCZ(data.data.project_list[2].text)
                setTextHI(data.data.project_list[3].text)

                setviewPdfEN(data.data.project_list[0].pdf)
                setviewPdfPL(data.data.project_list[1].pdf)
                setviewPdfCZ(data.data.project_list[2].pdf)
                setviewPdfHI(data.data.project_list[3].pdf)

            }

            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    }

    async function getImagesData() {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/get-show-all-image?keyname=project&id=${id}`, {
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
            formData.append('keyname', 'project')

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/post-store-image`, {
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


    return (
        <div className='AdminDashMain'>
            <AdminHead />
            <div className="AdContent">
                <AdminSidebar />
                <div className="adRightContent">
                    <div className="pathSec">
                        <div className="title">
                            Update Project
                        </div>
                        <div className="path">
                            Admin	&gt; Project	&gt; <span> Update Project</span>
                        </div>
                    </div>
                    {/* add tag form */}
                    <div className="formDiv">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="formTitle">
                                    Update Projects
                                </div>
                                <div className="form">
                                    <div className="inBox">
                                        <div className="inTitle">Project Title(EN)<span className='req'>*</span> </div>
                                        <input type="text" name="" value={langEN} onChange={(e) => {
                                            SetLangEN(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Project Title(PL) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={langPL} onChange={(e) => {
                                            SetLangPL(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Project Title(CZ) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={langCZ} onChange={(e) => {
                                            SetLangCZ(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Project Title(HI) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={langHI} onChange={(e) => {
                                            SetLangHI(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>

                                    {/*  */}

                                    <div className="inBox">
                                        <div className="inTitle"> Identification number(EN) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={idNumEN} onChange={(e) => {
                                            setidNumEN(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Identification number(PL) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={idNumPL} onChange={(e) => {
                                            setidNumPL(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Identification number(CZ) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={idNumCZ} onChange={(e) => {
                                            setidNumCZ(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>
                                    <div className="inBox">
                                        <div className="inTitle">Identification number(HI)<span className='req'>*</span> </div>
                                        <input type="text" name="" value={idNumHI} onChange={(e) => {
                                            setidNumHI(e.target.value)
                                        }} className='inText' placeholder='Enter title' id="" />
                                    </div>

                                    <div className="inBox">
                                        <div className="inTitle"> Project Date(EN) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={dateEN} onChange={(e) => {
                                            setDateEN(e.target.value)
                                        }} className='inText' placeholder='Enter Date' id="" />
                                    </div>

                                    <div className="inBox">
                                        <div className="inTitle"> Project Date(PL) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={datePL} onChange={(e) => {
                                            setDatePL(e.target.value)
                                        }} className='inText' placeholder='Enter Date' id="" />
                                    </div>

                                    <div className="inBox">
                                        <div className="inTitle"> Project Date(CZ) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={dateCZ} onChange={(e) => {
                                            setDateCZ(e.target.value)
                                        }} className='inText' placeholder='Enter Date' id="" />
                                    </div>

                                    <div className="inBox">
                                        <div className="inTitle"> Project Date(HI) <span className='req'>*</span> </div>
                                        <input type="text" name="" value={dateHI} onChange={(e) => {
                                            setDateHI(e.target.value)
                                        }} className='inText' placeholder='Enter Date' id="" />
                                    </div>


                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <JoditEditor
                                                ref={editor1}
                                                value={textEN}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setTextEN(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { setTextEN(newContent) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <JoditEditor
                                                ref={editor2}
                                                value={textPL}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setTextPL(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { setTextPL(newContent) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <JoditEditor
                                                ref={editor3}
                                                value={textCZ}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setTextCZ(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { setTextCZ(newContent) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <JoditEditor
                                                ref={editor4}
                                                value={textHI}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setTextHI(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { setTextHI(newContent) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="imgsDDiv">
                                        <div className="headi">PDF's</div>
                                        <div className="pdfDiv">
                                            <input onChange={(e) => {
                                                setPdfEN(e.target.files[0])
                                                setviewPdfEN('')
                                            }} type="file" name="" id="" />

                                            {viewPdfEN &&
                                                <a target='blank' className='viewPdfBtn' href={viewPdfEN}>View PDF</a>
                                            }
                                            
                                        </div>

                                        <div className="pdfDiv mt-2">
                                            <input onChange={(e) => {
                                                setPdfPL(e.target.files[0])
                                                setviewPdfPL('')
                                            }} type="file" name="" id="" />

                                            {viewPdfPL &&
                                                <a target='blank' className='viewPdfBtn' href={viewPdfPL}>View PDF</a>
                                            }

                                        </div>

                                        <div className="pdfDiv mt-2">
                                            <input onChange={(e) => {
                                                setPdfCZ(e.target.files[0])
                                                setviewPdfCZ('')

                                            }} type="file" name="" id="" />

                                            {viewPdfCZ &&
                                                <a target='blank' className='viewPdfBtn' href={viewPdfCZ}>View PDF</a>
                                            }
                                        </div>

                                        <div className="pdfDiv mt-2">
                                            <input onChange={(e) => {
                                                setPdfHI(e.target.files[0])
                                                setviewPdfHI('')
                                            }} type="file" name="" id="" />

                                            {viewPdfHI &&
                                                <a target='blank' className='viewPdfBtn' href={viewPdfHI}>View PDF</a>
                                            }
                                        </div>
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

                                    <div className="formBtns">
                                        <button className="add" onClick={() => { updateProducts() }} >
                                            Update Project
                                        </button>
                                        <Link to={'/admin-projects'}>
                                            <button className="cancel">
                                                Cancel
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-4">
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
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
