import React, { useEffect } from "react";
import "../common.css";
// import HeaderLogo from "./Images/Header-logo.png";

function IndexPage() {
  // useEffect(() => {
  //   console.log("hello: ", HeaderLogo);
  // }, []);
  return (
    <>
      <header className="sticky-top">
        <div className="first-header">
          <div className="container">
            <div className="header-child">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="navbar" id="headDiv1">
                    <ul className="menu-list">
                      <li>
                        <a href="./Index.html" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/About.html">About</a>
                      </li>
                      <li>
                        <a href="/Agents.html">Agents</a>
                      </li>
                      <li>
                        <a href="/Blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="/Contact.html">Contact</a>
                      </li>
                    </ul>
                    <div className="MobileMenuBar1 new-menubar">
                      <span className="material-symbols-outlined cross  addToggler ">
                        <i className="fa-solid fa-bars"></i>
                      </span>
                    </div>
                    <div className="MobileNewMenuList">
                      <ul className="menu-list">
                        <li>
                          <a href="./Index.html" className="active">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="/About.html">About</a>
                        </li>
                        <li>
                          <a href="/Agents.html">Agents</a>
                        </li>
                        <li>
                          <a href="/Blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="/Contact.html">Contact</a>
                        </li>
                      </ul>
                      <div className="MobileMenuBar removeToggler">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="mainlogo header-img">
                  {/* <a href="./Index.html"> */}
                  {/* <img src={HeaderLogo} alt="Header Logo" /> */}
                  {/* </a> */}
                  <a href="./Index.html">
                    <img src="/Images/Header-logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pull-right">
                  <ul className="header-child-list">
                    <li>
                      <a href="./Buy.html">BUY</a>
                    </li>
                    <li>
                      <a href="./Buy.html">SALE</a>
                    </li>
                    <li>
                      <a href="./Buy.html"> RENT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="owl-carousel owl-theme" id="banner-carasoul">
          <div className="item">
            <div id="slider" className="sl-slider-wrapper">
              <div className="sl-slider">
                <div>
                  <div
                    className="slider sl-slide"
                    data-orientation="horizontal"
                    data-slice1-rotation="-25"
                    data-slice2-rotation="-25"
                    data-slice1-scale="2"
                    data-slice2-scale="2"
                  >
                    <div className="banner-img bg-img">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="banner-content">
                              <h2 className="banner-head">
                                2 Bed Rooms and 1 Dinning Room Aparment on Sale
                              </h2>
                              <div className="locate">
                                <div className="icon">
                                  <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="add">
                                  1890 Syndey, Australia
                                </div>
                              </div>
                              <p className="banner-cnt">
                                Until he extends the circle of his compassion to
                                all living things, man will not himself find
                                peace.
                              </p>
                              <div className="banner-btn">
                                <button className="dolor-btn">
                                  $ 20,000,000
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider"></div>
            <div className="banner-img bg-img banner-img1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h2 className="banner-head">
                        2 Bed Rooms and 1 Dinning Room Aparment on Sale
                      </h2>
                      <div className="locate">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="add">1890 Syndey, Australia</div>
                      </div>
                      <p className="banner-cnt">
                        Until he extends the circle of his compassion to all
                        living things, man will not himself find peace.
                      </p>
                      <div className="banner-btn">
                        <button className="dolor-btn">$ 20,000,000</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider"></div>
            <div className="banner-img banner-img2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h2 className="banner-head">
                        2 Bed Rooms and 1 Dinning Room Aparment on Sale
                      </h2>
                      <div className="locate">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="add">1890 Syndey, Australia</div>
                      </div>
                      <p className="banner-cnt">
                        Until he extends the circle of his compassion to all
                        living things, man will not himself find peace.
                      </p>
                      <div className="banner-btn">
                        <button className="dolor-btn">$ 20,000,000</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider"></div>
            <div className="banner-img banner-img3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h2 className="banner-head">
                        2 Bed Rooms and 1 Dinning Room Aparment on Sale
                      </h2>
                      <div className="locate">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="add">1890 Syndey, Australia</div>
                      </div>
                      <p className="banner-cnt">
                        Until he extends the circle of his compassion to all
                        living things, man will not himself find peace.
                      </p>
                      <div className="banner-btn">
                        <button className="dolor-btn">$ 20,000,000</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
        <div className="banner-search">
          <div className="banner-search-back">
            <div className="container">
              <div className="row">
                <div className="search-head">Buy, Sale & Rent</div>
                <div className="col-md-6">
                  <input
                    type="text focus"
                    className="form-input"
                    placeholder="Search of Properties"
                  />
                  <div className="row">
                    <div className="col-xl-3 col-md-4">
                      <select className="form-input">
                        <option value="1">Buy</option>
                        <option value="2">Rent</option>
                        <option value="3">Sale</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <select className="form-input">
                        <option value="1">Price</option>
                        <option value="2">$150,000 - $200,000</option>
                        <option value="3">$200,000 - $250,000</option>
                        <option value="3">$250,000 - $300,000</option>
                        <option value="4">$300,000 - above</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <select className="form-input">
                        <option value="1">Property</option>
                        <option value="2">Apartment</option>
                        <option value="3">Building</option>
                        <option value="4">Office Space</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <button className="find-btn">
                        <a href="./Buy.html">Find Now</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="join-now">
                    Join now and get updated with all the properties deals.
                  </p>

                  <button
                    type="button"
                    className="login-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </button>

                  <div
                    className="modal fade modal-md"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="login-detail">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="login-head">Login</div>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Enter email"
                              />
                              <input
                                type="password"
                                className="form-input"
                                placeholder="......"
                              />
                              <div className="remember">
                                <input type="checkbox" />
                                <div className="text1">Remember me</div>
                              </div>
                              <button className="sign-in-btn">Sign In</button>
                            </div>
                            <div className="col-lg-6">
                              <div className="user-signup">
                                <div className="login-head">
                                  New User Sign Up
                                </div>
                                <div className="user-para">
                                  Join today and get updated with all the
                                  properties deal happening around.
                                </div>
                                <button className="join-btn">
                                  <a href="./Register.html">Join Now</a>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      <section className="featured-properties">
        <div className="container">
          <div className="featured-head">
            <h2 className="head1">Featured Properties</h2>
            <button className="view-listing">
              <a href="./Buy.html">View All Listing</a>
            </button>
          </div>
          <div className="properties-sec">
            <div className="owl-carousel owl-theme" id="properties-sec">
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    {/* src="./Images/Propeties-img1.jpg" */}
                    <img
                      src="/Images/Propeties-img1.jpg"
                      alt="jio"
                      className="w-100"
                    />
                    <div className="status">New</div>
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img2.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./BlogDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img3.jpg"
                      alt=""
                      className="w-100"
                    />
                    <div className="status status-color">Sold</div>
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img4.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img1.jpg"
                      alt=""
                      className="w-100"
                    />
                    <div className="status status-color">Sold</div>
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img2.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img1.jpg"
                      alt=""
                      className="w-100"
                    />
                    <div className="status">New</div>
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img2.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./BlogDetail.html">View Details</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="about-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-9">
          <div className="about-us-child">
            <h2 className="about-us-head">About Us</h2>
            <div className="about-us-content">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact
              original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
            <div className="learn-more">
              <a href="./About.html">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-3">
          <div className="about-us-child">
            <h2 className="about-us-head mt-left">Recommended Properties</h2>
            <div className="recomend-properties">
              <div className="owl-carousel owl-theme" id="about-carasoul">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="/Images/AboutUs1.jpg" alt="" className="w-100">
                    </div>
                    <div className="col-lg-8">
                      <p className="Integer1">
                        <a href="#">Integer sed porta quam</a>
                      </p>
                      <div className="price">$300,000</div>
                      <div className="more-details">
                        <a href="./PropertyDetail.html"> More Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="/Images/AboutUs2.jpg" alt="" className="w-100">
                    </div>
                    <div className="col-lg-8">
                      <p className="Integer1">
                        <a href="#">Integer sed porta quam</a>
                      </p>
                      <div className="price">$300,000</div>
                      <div className="more-details">
                        <a href="./PropertyDetail.html"> More Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="/Images/AboutUs3.jpg" alt="" className="w-100">
                    </div>
                    <div className="col-lg-8">
                      <p className="Integer1">
                        <a href="#">Integer sed porta quam</a>
                      </p>
                      <div className="price">$300,000</div>
                      <div className="more-details">
                        <a href="./PropertyDetail.html"> More Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src="/Images/AboutUs4.jpg" alt="" className="w-100">
                    </div>
                    <div className="col-lg-8">
                      <p className="Integer1">
                        <a href="#">Integer sed porta quam</a>
                      </p>
                      <div className="price">$300,000</div>
                      <div className="more-details">
                        <a href="./PropertyDetail.html"> More Details</a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="Footer">
    <div className="footer-child">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-3">
            <h4 className="informatin-head">Information</h4>
            <ul className="footer-link">

              <li>
                <a href="/About.html">About</a>
              </li>
              <li>
                <a href="/Agents.html">Agents</a>
              </li>
              <li>
                <a href="/Blog.html">Blog</a>
              </li>
              <li>
                <a href="/Contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="informatin-head mt-top">Newsletter</h4>
            <p className="news-para">Get notified about the latest properties in our marketplace.</p>
            <input type="text" className="form-input" placeholder="Enter Your email address">
            <div className="Notify-btn">
              Notify Me!
            </div>
          </div>
          <div className="col-md-3">
            <h4 className="informatin-head mt-top">Follow Us</h4>
            <div className="media-icon">
              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>

            </div>
          </div>
          <div className="col-md-3">
            <h4 className="informatin-head mt-top">Contact Us</h4>
            <div className="contact-para">
              Bootstrap Realestate Inc.
            </div>
            <div className="add">
              <i className="fa-solid fa-location-dot"></i>
              <div className="cnt">
                8290 Walk Street, Australia
              </div>
            </div>
            <div className="add">
              <i className="fa-solid fa-envelope"></i>
              <div className="cnt">
                hello@bootstrapreal.com
              </div>
            </div>
            <div className="add">
              <i className="fa-solid fa-phone"></i>
              <div className="cnt">
                (123) 456-7890
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          © Copyright 2024 | Aarya Infosolutions
        </div>
      </div>
    </div>
  </section> */}
    </>
  );
}

export default IndexPage;
