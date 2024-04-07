import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink } from "react-router-dom";
import { FaProductHunt, FaUserAlt } from "react-icons/fa";
import { RiDashboard3Fill } from "react-icons/ri";
import { RiLinksFill } from "react-icons/ri";

export default function AdminSidebar() {
  return (
    <div className="adSidebar">
      <div className="inner">
        <div className="sideLinks">
          <NavLink to={"/admin-dashboard"} className="siLink">
            <RiDashboard3Fill className="catIcons" />
            Dashboard
          </NavLink>
        </div>
        {/* <Accordion flush className="customAcco">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <FaProductHunt className="catIcons" /> Product Mngmnt
            </Accordion.Header>
            <Accordion.Body>
              <ul>
               
                <li>
                  <NavLink to={"/admin-products"}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={"/admin-projects"}>Projects</NavLink>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <div className="sideLinks">
          <NavLink className="siLink" to={"/admin-properties"}>
            <RiLinksFill className="catIcons" /> Properties
          </NavLink>
        </div>
        <div className="sideLinks">
          <NavLink className="siLink" to={"/admin-blogs"}>
            <RiLinksFill className="catIcons" /> Blogs
          </NavLink>
        </div>
        <div className="sideLinks">
          <NavLink className="siLink" to={"/admin-customers"}>
            <FaUserAlt className="catIcons" /> Contacts
          </NavLink>
        </div>

        <div className="sideLinks">
          <NavLink className="siLink" to={"/admin-enquiry"}>
            <FaUserAlt className="catIcons" /> Enquiries
          </NavLink>
        </div>
        <div className="sideLinks">
          <NavLink className="siLink" to={"/admin-webusers"}>
            <FaUserAlt className="catIcons" /> Customers
          </NavLink>
        </div>
      </div>
    </div>
  );
}
