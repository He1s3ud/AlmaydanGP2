import React from "react";
import './Navbar.css';
import logo from '../assets/almaydanLogo.svg'


const Navbar = () =>{
    return(
        <nav className="navbar">

            <div className="nav-logo">
                <img src="He1s3ud/AlmaydanGP2/almaydan-frontend/src/assets/almaydanLogo.svg" alt="almaydan logo"/>
            </div> 

            <ul className="nav-links">
                <li>جدول المباريات </li>
                <li><span className="live-dot">●</span>الآن</li>
                <li>الساحة </li>
                <li>المعسكر</li>
                <li>اسال حميدان</li>
                <li>حول</li>

            </ul>

            <div className="nav-left-icons">
                <span className="search-icon">🔍</span>
            
            </div>
            


        </nav>
    )

}
export default Navbar;