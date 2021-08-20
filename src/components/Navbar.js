import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
   const [click,setClick] = useState(false)
   const [button,setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)

   const showButton = () =>{
       if(window.innerWidth <= 960){
           setButton(false)
       }else{
           setButton(true)
       }
   }
window.addEventListener('resize', showButton)
useEffect(() =>{
    showButton()
},[])

    return (
        <>

        {/* MOBILE NAVIGATION */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div onClick={handleClick}>
                        <span className="mobile-menu-toggle">{click ? <FaTimes /> : <FaBars />}</span>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' onClick={closeMobileMenu} className="nav-links mobile">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' onClick={closeMobileMenu} className="nav-links mobile">
                                CONTACT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/certificate' onClick={closeMobileMenu} className="nav-links mobile">
                                CERTIFICATES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cv' onClick={closeMobileMenu} className="nav-links mobile">
                                CV
                            </Link>
                        </li>
                    </ul>

                    
{/*NORMAL NAVIGATION BAR */}
                    <div className="main-navbar">
                    {button && 
                    <div className="main-navbar-container">
                            <ul className="list-items">
                        <li className="list-item">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to='/contact' className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to='/certificate' className="nav-link">
                                Certificate
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to='/cv' className="nav-link">
                                CV
                            </Link>
                        </li>
                    </ul>
                        </div>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
