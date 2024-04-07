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
  deletePropertyApi,
  getPropertyList1,
} from "../../src/services/property.service";
import { OptionsPropertyTypeEnum } from "../enums/property.enum";

function AdminProperties() {
  // products list states
  const [curPage, setCurPage] = useState("");

  const [totalPages, setTotalPages] = useState("");

  const [productListState, setProductListState] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    getPropertyList();
  }, [toggler]);

  async function getPropertyList() {
    try {
      const propertyList = await getPropertyList1();
      const data = propertyList.data; // await res.json()
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

  async function deleteProperty(idd) {
    try {
      let payload = { id: idd };
      const deletedProperty = await deletePropertyApi(payload);

      if (deletedProperty.message === "Property deleted successfully!") {
        console.log(deletedProperty);
        toast.success("Delete Successfully");
        setToggler((state) => !state);
      } else {
        if (Object.values(deletedProperty.data).length > 0) {
          toast.warn(Object.values(data.data)[0][0]);
        } else {
          toast.warn(deletedProperty.message);
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
              <div className="title">Properties</div>
              <div className="path">
                Admin &gt; <span> Properties</span>
              </div>
              <Link to={"/admin-properties/add"}>
                <button className="addBtn">ADD new</button>
              </Link>
            </div>

            <div className="taglist">
              <table className="taglistTable">
                <thead>
                  <tr>
                    <td>Sr No.</td>
                    <td>Property Type</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Location</td>
                    <td>Is Active</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {productListState.map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{(curPage + 1) * 0 + (ind + 1)}</td>
                        {/* <td>
                          <img
                            src={(item.images && item.images[0]) ?? ""}
                            width={100}
                            alt="product image"
                          />
                        </td> */}
                        <td>{OptionsPropertyTypeEnum[item.propertyType]}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.location}</td>
                        <td>
                          {item.isActive ? (
                            <div className="isAct">Yes</div>
                          ) : (
                            <div className="isNotAct">No</div>
                          )}
                        </td>
                        <td>
                          <div className="actions">
                            <Link to={`/admin-properties/update/${item.id}`}>
                              <button className="EditIcobtn">
                                <MdModeEditOutline />
                              </button>
                            </Link>

                            <button
                              onClick={() => {
                                deleteProperty(item.id);
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

export default AdminProperties;
