import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'

function AdminAddLinks() {

    const [curCategory, setCurCategory] = useState('')

    const navigate = useNavigate()


    // add product states 
    const [tagTitle, setTagTitle] = useState('')
    const [tagIsActive, setTagIsActive] = useState(true)

    const [langEN, SetLangEN] = useState('')
    const [langPL, SetLangPL] = useState('')
    const [langCZ, SetLangCZ] = useState('')
    const [langHI, setLangHI] = useState('')


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


    async function addProducts() {
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
            formData.append('en_name', langEN)
            formData.append('pl_name', langPL)
            formData.append('cz_name', langCZ)
            formData.append('hi_name', langHI)

            formData.append('is_active', tagIsActive ? 1 : 0)

            images.forEach((el, index) => {
                formData.append(`images[${index}]`, el)
            })

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/post-store-product`, {
                method: 'POST',
                headers: {

                },
                body: formData
            })
            const data = await res.json()
            console.log(data);

            if (data.status) {
                toast.success('Product Added Successfully')
                navigate('/admin-links')
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
        <>
            <div className='AdminDashMain'>
                <AdminHead />
                <div className="AdContent">
                    <AdminSidebar />
                    <div className="adRightContent">
                        <div className="pathSec">
                            <div className="title">
                                Add Links
                            </div>
                            <div className="path">
                                Admin	&gt; Links	&gt; <span> Add Links</span>
                            </div>
                        </div>
                        {/* add tag form */}
                        <div className="formDiv">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="formTitle">
                                        Add Links
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
                                                setLangHI(e.target.value)
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
                                            <button className="add" onClick={() => { addProducts() }} >
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

export default AdminAddLinks