import React, { useRef } from 'react'

import JoditEditor from 'jodit-react';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'

export default function AdminAddProject() {

    const [curCategory, setCurCategory] = useState('')

    const navigate = useNavigate()


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
    const [langHI, setLangHI] = useState('')

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


    const [images, setImages] = useState([])


    function dltImg(inx) {
        let temparr = [...images]
        let newArr = temparr.filter((item, inxx) => {
            if (inxx != inx) {
                return true
            } else {
                return false
            }
        })
        setImages(newArr)
    }

    async function addProjects() {
        try {

            if (!langEN || !langPL || !langCZ || !langHI) {
                toast.warn('Please fill the required field')
                return
            }

            if (!idNumEN || !idNumPL || !idNumCZ || !idNumHI) {
                toast.warn('Please fill the required field')
                return
            }

            if (!dateEN || !datePL || !dateCZ || !dateHI) {
                toast.warn('Please fill the required field')
                return
            }

            if (!textEN || !textPL || !textCZ || !textHI) {
                toast.warn('Please fill the required field')
                return
            }

            if (!pdfEN || !pdfPL || !pdfCZ || !pdfHI) {
                toast.warn('Please fill the required field')
                return
            }
            let formData = new FormData()

            // formData.append('category_id', curCategory)

            formData.append('name', langEN)

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

            formData.append('en_pdf', pdfEN)
            formData.append('pl_pdf', pdfPL)
            formData.append('cz_pdf', pdfCZ)
            formData.append('hi_pdf', pdfHI)

            formData.append('is_active', tagIsActive ? 1 : 0)

            images.forEach((el, index) => {
                formData.append(`images[${index}]`, el)
            })

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/post-store-project`, {
                method: 'POST',
                headers: {

                },
                body: formData
            })
            const data = await res.json()
            console.log(data);

            if (data.status) {
                toast.success('Project Added Successfully')
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

    return (
        <div className='AdminDashMain'>
            <AdminHead />
            <div className="AdContent">
                <AdminSidebar />
                <div className="adRightContent">
                    <div className="pathSec">
                        <div className="title">
                            Add Project
                        </div>
                        <div className="path">
                            Admin	&gt; Project	&gt; <span> Add Project</span>
                        </div>
                    </div>
                    {/* add tag form */}
                    <div className="formDiv">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="formTitle">
                                    Add Projects
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
                                            setLangHI(e.target.value)
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
                                            <input onChange={(e) => { setPdfEN(e.target.files[0]) }} type="file" name="" id="" />
                                        </div>

                                        <div className="pdfDiv mt-2">
                                            <input onChange={(e) => { setPdfPL(e.target.files[0]) }} type="file" name="" id="" />
                                        </div>

                                        <div className="pdfDiv mt-2">
                                            <input onChange={(e) => { setPdfCZ(e.target.files[0]) }} type="file" name="" id="" />
                                        </div>

                                        <div className="pdfDiv mt-2">
                                            <input onChange={(e) => { setPdfHI(e.target.files[0]) }} type="file" name="" id="" />
                                        </div>
                                    </div>


                                    <div className="imgsDDiv">
                                        <div className="headi">Images</div>
                                        <label htmlFor="inpId" className='imgBtn'>
                                            Choose image
                                        </label>
                                        <input onChange={(e) => {
                                            let newArr = [...images]
                                            newArr.push(e.target.files[0])
                                            setImages(newArr)
                                            e.target.files[0]
                                        }} type="file" className='d-none' name="" id="inpId" />

                                        <div className="imgs">
                                            {images.map((img, inx) => {
                                                return (
                                                    <div className="imgWrapper">
                                                        <img key={inx} src={URL.createObjectURL(img)} width={70} alt="img" />
                                                        <button onClick={() => {
                                                            dltImg(inx)
                                                        }} className="cls">X</button>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="formBtns">
                                        <button className="add" onClick={() => { addProjects() }} >
                                            Add Project
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
