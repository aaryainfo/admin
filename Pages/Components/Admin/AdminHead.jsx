import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function AdminHead() {
  const navigate = useNavigate();

  return (
    <div className="AdHeadr">
      <div className="logoTog">
        <img src="/Images/" alt="logo" />
        <button className="adTogler">
          <FaBars />
        </button>
      </div>
      <div className="userInfo">
        <div className="userin">
          <AiOutlineUser />
          <div className="name">Admin</div>
        </div>
        <button
          className="logoutBtn"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout <AiOutlineLogout />
        </button>
      </div>
    </div>
  );
}
