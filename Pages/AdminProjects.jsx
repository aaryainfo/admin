import React from 'react'

import { MdModeEditOutline, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate';
import { AiOutlineLink } from 'react-icons/ai'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'

export default function AdminProjects() {


    // products list states 
    const [curPage, setCurPage] = useState('')

    const [totalPages, setTotalPages] = useState('')

    const [productListState, setProductListState] = useState([])
    const [toggler, setToggler] = useState(false)

    useEffect(() => {
        getProductList()
    }, [toggler])


    async function getProductList() {
        try {
            // let token = localStorage.getItem('vivotoken')
            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/get-paginated-project-list?per_page=10&page=1`, {
                method: "GET",
                headers: {

                }
            })
            const data = await res.json()
            // console.log(data);
            // setProductListState(data.data.product_list.product_data)

            if (data.status) {
                console.log("products generated", data)
                setProductListState(data.data.project_list.project_data_list)
                setTotalPages(data.data.project_list.last_page)

            } else {
                if (Object.values(data.data).length > 0) {
                    toast.warn(Object.values(data.data)[0][0])
                } else {
                    toast.warn(data.message)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    async function deleteProduct(idd) {
        try {

            let formData = new FormData()
            formData.append('_method', 'DELETE')

            const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/admin/delete-project?project_id=${idd}`, {
                method: "POST",
                headers: {

                },
                body: formData
            })
            const data = await res.json()

            if (data.status) {
                console.log(data);
                toast.success('Delete Successfully')
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

    // handle pagination 
    const handlePageClick = (event) => {
        setCurPage(event.selected + 1)
    };

    return (
        <div className='AdminDashMain'>
            <AdminHead />
            <div className="AdContent">
                <AdminSidebar />
                <div className="adRightContent">
                    <div className="pathSec">
                        <div className="title">
                            Projects
                        </div>
                        <div className="path">
                            Admin 	&gt; <span> Projects</span>
                        </div>
                        <Link to={'/admin-projects/add'}>
                            <button className="addBtn">
                                ADD new
                            </button>
                        </Link>
                    </div>

                    <div className="taglist">
                        <table className='taglistTable' >
                            <thead>
                                <tr>
                                    <td>
                                        Sr No.
                                    </td>
                                    <td>
                                        Image
                                    </td>
                                    <td>
                                        Title
                                    </td>
                                    <td>
                                        identification_number
                                    </td>
                                    <td>
                                        initiation_date
                                    </td>
                                    <td>
                                        Is Active
                                    </td>
                                    <td>
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {productListState.map((item, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>
                                                {((curPage + 1) * 0) + (ind + 1)}
                                            </td>
                                            <td>
                                                <img src={item.images[0].image} width={100} alt="product image" />
                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.identification_number}
                                            </td>
                                            <td>
                                                {item.initiation_date}
                                            </td>
                                            {/* <td>
                                                {item.text}
                                            </td> */}
                                            <td>
                                                {item.is_active ?
                                                    <div className="isAct">
                                                        Yes
                                                    </div>
                                                    :
                                                    <div className="isNotAct">
                                                        No
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                <div className="actions">
                                                    <Link to={`/admin-projects/update/${item.project_id}`}>
                                                        <button className='EditIcobtn' >
                                                            <MdModeEditOutline />
                                                        </button>
                                                    </Link>

                                                    <button onClick={() => { deleteProduct(item.project_id) }} className='EditDltbtn'>
                                                        <MdDelete />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}



                            </tbody>
                        </table>
                        <div className="reactPaginate">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={Math.ceil(totalPages)}
                                previousLabel="prev"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
