import React from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { AiOutlineLink } from "react-icons/ai";
import AdminHead from "../Components/Admin/Adminhead";
import AdminSidebar from "../Components/Admin/Adminsidebar";
import {
  deleteBlogApi,
  getBlogList1,
} from "../../src/services/admin-auth.service";

function AdminBlogs() {
  // products list states
  const [curPage, setCurPage] = useState("");

  const [totalPages, setTotalPages] = useState("");

  const [productListState, setProductListState] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    getBlogList();
  }, [toggler]);

  async function getBlogList() {
    try {
      const blogList = await getBlogList1();
      const data = blogList.data; // await res.json()
      console.log(data);
      // setProductListState(data.data.product_list.product_data)

      if (data.length) {
        console.log("products generated", data);
        setProductListState(data);
        // setTotalPages(data.data.project_list.last_page)
      } else {
        // if (Object.values(data.data).length > 0) {
        //     toast.warn(Object.values(data.data)[0][0])
        // } else {
        //     toast.warn(data.message)
        // }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBlog(idd) {
    try {
      let payload = { id: idd };
      const deletedBlog = await deleteBlogApi(payload);

      if (deletedBlog.message === "Blog deleted successfully!") {
        console.log(deletedBlog);
        toast.success("Delete Successfully");
        setToggler((state) => !state);
      } else {
        if (Object.values(deletedBlog.data).length > 0) {
          toast.warn(Object.values(data.data)[0][0]);
        } else {
          toast.warn(deletedBlog.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // handle pagination
  const handlePageClick = (event) => {
    setCurPage(event.selected + 1);
  };
  const dateFormat = (passedDate) => {
    const date = new Date(passedDate);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    console.log(formattedDate); // Output: "2024-03-31"
    return formattedDate;
  };

  return (
    <>
      <div className="AdminDashMain">
        <AdminHead />
        <div className="AdContent">
          <AdminSidebar />
          <div className="adRightContent">
            <div className="pathSec">
              <div className="title">Blogs</div>
              <div className="path">
                Admin &gt; <span> Blogs</span>
              </div>
              <Link to={"/admin-blogs/add"}>
                <button className="addBtn">ADD new</button>
              </Link>
            </div>

            <div className="taglist">
              <table className="taglistTable">
                <thead>
                  <tr>
                    <td>Sr No.</td>
                    <td>Image</td>
                    <td>Title</td>
                    <td>Most Polupar</td>
                    <td>Updated At</td>
                    <td>Is Active</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {productListState.map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{(curPage + 1) * 0 + (ind + 1)}</td>
                        <td>
                          <img
                            src={(item.images && item.images[0]) ?? ""}
                            width={100}
                            alt="product image"
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.mostPopular}</td>
                        <td>{dateFormat(item.updatedAt)}</td>
                        {/* <td>
                                                {item.text}
                                            </td> */}
                        <td>
                          {item.isActive ? (
                            <div className="isAct">Yes</div>
                          ) : (
                            <div className="isNotAct">No</div>
                          )}
                        </td>
                        <td>
                          <div className="actions">
                            <Link to={`/admin-blogs/update/${item.id}`}>
                              <button className="EditIcobtn">
                                <MdModeEditOutline />
                              </button>
                            </Link>

                            <button
                              onClick={() => {
                                deleteBlog(item.id);
                              }}
                              className="EditDltbtn"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
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
    </>
  );
}

export default AdminBlogs;
