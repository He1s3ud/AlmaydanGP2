import React from "react";
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="navbar">

            <div className="nav-logo">
              <span style={{color: '#00ff88', fontWeight: 'bold', fontSize: '1.5rem'}}>M</span>
              <img src={almaydanLogo} alt="almaydan logo" width={14} height={18} />
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