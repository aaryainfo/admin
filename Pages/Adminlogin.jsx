import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AdminLogin() {

    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()


    async function loginFn() {
        try {
            let formData = new FormData()
            formData.append('email', userEmail)
            formData.append('password', userPass)
            const res = await fetch('https://vivopune.com/backend/public/api/account/admin-login', {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            })

            const data = await res.json()
            console.log(data)
            if (data.status) {
                toast.success(data.message)
                localStorage.setItem('vivotoken', data.data.token)
                navigate('/admin-dashboard')
            } else {
                if(Object.values(data.data).length > 0){
                    toast.warn(Object.values(data.data)[0][0])
                }else{
                    toast.warn(data.message)
                }
            }



        } catch (error) {
            console.log(error)
            toast.warn("Something went wrong")
        }
    }

    return (
        <div className='adminLoginPage' >
            <div className="adminLoginDiv">
                <div className="heading">Admin Login</div>
                <div className="inBox">
                    <div className="tit">
                        Email ID
                    </div>
                    <input type="text" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} placeholder='Enter Email' className="inText" />
                </div>
                <div className="inBox">
                    <div className="tit">
                        Password
                    </div>
                    <input type="password" value={userPass} onChange={(e) => { setUserPass(e.target.value) }} placeholder='Enter Password' className="inText" />
                </div>
                <button className="loginbtn"
                //  onClick={() => { loginFn() }}
                  >
                    Login
                </button>
            </div>
        </div>
    )
}