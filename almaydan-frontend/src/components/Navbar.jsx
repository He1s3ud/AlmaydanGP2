import React from "react";
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="navbar">

            <div className="nav-logo">
                <span style={{color: '#00ff88', fontWeight: 'bold', fontSize: '1.5rem'}}>M</span>
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
                <img src= {searchIcon} alt="search icon"/>
            
            </div>
            


        </nav>
    )

}
export default Navbar;