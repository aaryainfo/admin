import React from 'react'
import AdminHead from './Components/Admin/Adminhead'
import AdminSidebar from './Components/Admin/Adminsidebar'


export default function AdminDashboard() {
    return (
        <div className='AdminDashMain'>
            <AdminHead/>
            <div className="AdContent">
                <AdminSidebar />
                <div className="adRightContent">
                    <div className="pathSec">
                        <div className="title">
                            Dashboard
                        </div>
                        <div className="path">
                            Admin 	&gt; <span> Dashboard</span>
                        </div>
                    </div>
                    <h2 className="hello">
                    Hello, Administrator!
                    </h2>
                </div>
            </div>
        </div>
    )
}
