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
  deleteCustomerApi,
  getCustomerList1,
} from "../../src/services/customer.service";

function AdminCustomers() {
  // products list states
  const [curPage, setCurPage] = useState("");

  const [totalPages, setTotalPages] = useState("");

  const [productListState, setProductListState] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    getCustomerList();
  }, [toggler, setToggler]);

  async function getCustomerList() {
    try {
      const customerList = await getCustomerList1();
      const data = customerList.data; // await res.json()
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

  async function deleteCustomer(idd) {
    try {
      let payload = { id: idd };
      const deletedCustomer = await deleteCustomerApi(payload);

      if (deletedCustomer.message === "Customer deleted successfully!") {
        console.log(deletedCustomer);
        toast.success("Delete Successfully");
        setToggler((state) => !state);
      } else {
        if (Object.values(deletedCustomer.data).length > 0) {
          toast.warn(Object.values(data.data)[0][0]);
        } else {
          toast.warn(deletedCustomer.message);
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
              <div className="title">Customers</div>
              <div className="path">
                Admin &gt; <span> Customers</span>
              </div>
              <Link to={"/admin-customers/add"}>
                <button className="addBtn">ADD new</button>
              </Link>
            </div>

            <div className="taglist">
              <table className="taglistTable">
                <thead>
                  <tr>
                    <td>Sr No.</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                    <td>Updated At</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {productListState.map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{(curPage + 1) * 0 + (ind + 1)}</td>

                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{dateFormat(item.updatedAt)}</td>

                        <td>
                          <div className="actions">
                            <Link to={`/admin-customers/update/${item.id}`}>
                              <button className="EditIcobtn">
                                <MdModeEditOutline />
                              </button>
                            </Link>

                            <button
                              onClick={() => {
                                deleteCustomer(item.id);
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

export default AdminCustomers;
