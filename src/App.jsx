import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ReadyProducts from "../Pages/ReadyProducts";
import ArtStudio from "../Pages/ArtStudio";
import ArtstuTwo from "../Pages/ArtstuTwo";
import ArtstuThree from "../Pages/ArtstuThree";
import ArtstuFour from "../Pages/ArtstuFour";
import ArtsFourA from "../Pages/ArtsFourA";
import CareerPageA from "../Pages/CareerPageA";
import CareerPageB from "../Pages/CareerPageB";
import CareerPageC from "../Pages/CareerPageC";
import EmpCorner from "../Pages/EmpCorner";
import ContactPage from "../Pages/ContactPage";
import AdminLogin from "../Pages/Adminlogin";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminProducts from "../Pages/AdminProducts";
import AdminAddProduct from "../Pages/AdminAddProduct";
import { ToastContainer } from "react-toastify";
import AdminUpdateProduct from "../Pages/AdminUpdateProduct";
import AdminAddProject from "../Pages/AdminAddProject";
import AdminProjects from "../Pages/AdminProjects";
import AdminUpdateProject from "../Pages/AdminUpdateProject";

// Blogs
import AdminBlogs from "../Pages/BlogsPages/AdminBlogs";
import AdminAddBlog from "../Pages/BlogsPages/AdminAddBlog";
import AdminUpdateBlog from "../Pages/BlogsPages/AdminUpdateBlog";

// Customers
import AdminCustomers from "../Pages/CustomersPages/AdminCustomers";
import AdminAddCustomer from "../Pages/CustomersPages/AdminAddCustomer";
import AdminUpdateCustomer from "../Pages/CustomersPages/AdminUpdateCustomer";
// added comment

function App() {
  // Check if token is present in localStorage
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        {/* Redirect to Dashboard if token is present, otherwise to Login */}
        <Route
          path="/dashboard"
          element={token ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<AdminLogin />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/ready' element={<ReadyProducts />} />
        <Route path='/artstuone' element={<ArtStudio />} />
        <Route path='/artstutwo' element={<ArtstuTwo />} />
        <Route path='/artstuthree' element={<ArtstuFour />} />
        <Route path='/artstufour' element={<ArtstuThree />} />
        <Route path='/artstufoura/:id' element={<ArtsFourA />} />
        <Route path='/careerA' element={<CareerPageA />} />
        <Route path='/careerB' element={<CareerPageB />} />
        <Route path='/careerC' element={<CareerPageC />} />
        <Route path='/empcorner' element={<EmpCorner />} />
        <Route path='/contact' element={<ContactPage />} />


        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/admin-products' element={<AdminProducts/>} />
        <Route path='/admin-products/add' element={<AdminAddProduct/>} />
        <Route path='/admin-products/update/:id' element={<AdminUpdateProduct/>} />

        <Route path='/admin-projects' element={<AdminProjects/>} />
        <Route path='/admin-projects/add' element={<AdminAddProject/>} />
        <Route path='/admin-projects/update/:id' element={<AdminUpdateProject/>} />
*/}
        {/* {token ?? <Route path='/admin-blogs' element={<AdminBlogs/>} />}
        <Route path='/admin-blogs/add' element={<AdminAddLinks/>} />
        <Route path='/admin-blogs/update/:id' element={<AdminUpdateLinks/>} />  */}

        {token && (
          <>
            <Route path="/admin-blogs" element={<AdminBlogs />} />
            <Route path="/admin-blogs/add" element={<AdminAddBlog />} />
            <Route
              path="/admin-blogs/update/:id"
              element={<AdminUpdateBlog />}
            />

            <Route path="/admin-customers" element={<AdminCustomers />} />
            <Route path="/admin-customers/add" element={<AdminAddCustomer />} />
            <Route
              path="/admin-customers/update/:id"
              element={<AdminUpdateCustomer />}
            />
          </>
        )}

        {/* //temp */}
        {/* <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/admin-products/add" element={<AdminAddProduct />} />
        <Route
          path="/admin-products/update/:id"
          element={<AdminUpdateProduct />}
        />

        <Route path="/admin-projects" element={<AdminProjects />} />
        <Route path="/admin-projects/add" element={<AdminAddProject />} />
        <Route
          path="/admin-projects/update/:id"
          element={<AdminUpdateProject />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
