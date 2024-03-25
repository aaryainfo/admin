import React, { useEffect } from 'react'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        // i18n.changeLanguage('En')
    }, [])

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }, []);

    const [t, i18n] = useTranslation("global")

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className='sticky-top bg-white'>
            <div className={`headerDiv ${nav ? 'show' : ''}`}>
                <div className="container">
                    <div className="innerDiv">
                        <div className="headerLeft">
                            <Link to='/'>
                                <div className="headerLogo"><img src="/Images/headerLogo.webp" alt="" loading="lazy" /></div>
                            </Link>
                        </div>
                        <div className="headerRight">
                            <ul className='nav-ul'>
                                <Link to="/">
                                    <li>HOME</li>
                                </Link>
                                <Link to="/aboutus">
                                    <li>ABOUT</li>
                                </Link>
                                <Link to="/ready">
                                    <li>READY PRODUCTS</li>
                                </Link>
                                <Link to="/artstuone">
                                    <li>ART STUDIO</li>
                                </Link>
                                <Link to="/careerA">
                                    <li>COOPERATION & CAREER</li>
                                </Link>
                                <Link to="/contact">
                                    <li>CONTACT</li>
                                </Link>

                                <li> <span style={{ color: "#AF9257" }} onClick={() => {
                                    handleChangeLanguage("En")
                                }} >EN </span>| <span onClick={() => {
                                    handleChangeLanguage("Pl")
                                }} > PL </span>|<span> CZ </span>| <span> HI</span></li>

                                <Link to="/empcorner">
                                    <li className='EmpMenu' >EMPLOYEE <br />
                                        CORNER</li>
                                </Link>

                            </ul>
                        </div>

                        <div className="buttonDiv" onClick={() => { setNav(true) }}>
                            <button className="toggleBtn" id="toggleBtnId">
                                <img loading="lazy" className='iconn' src="/Images/toggleBar.svg" alt="" />
                            </button>
                        </div>
                    </div>

                </div>


                <div className={`mobileDiv ${nav ? 'show' : ''}`} id="mobDivId">
                    <div className="closeDiv toggleBtn" id="closeBtnId">
                        <button className='iconn' onClick={() => { setNav(false) }}>
                            <AiOutlineClose />
                        </button>
                    </div>
                    <ul className="mobileList">
                        <Link to="/">
                            <li>HOME</li>
                        </Link>
                        <Link to="/aboutus">
                            <li>ABOUT</li>
                        </Link>
                        <Link to="/ready">
                            <li>READY PRODUCTS</li>
                        </Link>
                        <Link to="/artstuone">
                            <li>ART STUDIO</li>
                        </Link>
                        <Link to="/careerA">
                            <li>COOPERATION & CAREER</li>
                        </Link>
                        <Link to="/contact">
                            <li>CONTACT</li>
                        </Link>
                        <li>
                            EN | PL | CZ | HI
                        </li>
                        <Link to="/empcorner">
                            <li>EMPLOYEE
                                CORNER</li>
                        </Link>

                    </ul>
                </div>
            </div>
            {/* {nav.toString()} */}
        </div>
    )
}

export default Navbar