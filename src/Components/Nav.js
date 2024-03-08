import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Nav=()=>{
    return(
        <>
        <div className="menu-icon">
           <NavLink className="logo-img" to="/"> <img src="https://www.nidhibank.co.in/images/logo-2.png" alt=""  className="hero-img" /></NavLink>
            <ul className="Navbar-list">
                <li>
                    <NavLink className="Nav-link active" to="/"><FaHome /></NavLink>
                </li>
                <li className="dropdown">
                    <NavLink className="nav-link" to="/">About Us</NavLink>
                    <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-link" to="/">Bank's History</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Chairmain's Message</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Board Of Director</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Management</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Financial Strength</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Photo Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Know Your Bank</NavLink>
                    </li>
                    </ul>
                </li>


                <li className="dropdown">
                    <NavLink className="nav-link" to="/">Services</NavLink>
                    <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-link" to="/">Rupay Debit Card</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Rupay Card Offers</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Locker Facility</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">NEFT/RTGS</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Stamp Franking</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Unclaimed Account</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">SMS Banking</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Mobile Banking</NavLink>
                      </li>
                    </ul>
                </li>


                <li className="dropdown">
                    <NavLink className="nav-link" to="/">Advances</NavLink>
                    <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-link" to="/">Home Loan</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Vehicle Loan</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Education Loan</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Gold Loan</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Personal Loan</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Mortgage Loan</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">EMI Calculator</NavLink>
                    </li>
                    </ul>
                </li>


                <li className="dropdown" >
                    <NavLink className="nav-link" to="/">Deposit</NavLink>
                    <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-link" to="/">Saving Account</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Current Account</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Fixed Deposit</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Recurring Deposit</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Deposit Calculator</NavLink>
                    </li>
                    </ul>
                </li>


                <li className="dropdown">
                    <NavLink className="nav-link" to="/">Interest Rate</NavLink>
                    <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-link" to="/">Loan Interest Rate</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Deposit Interest Rate</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Service Charges</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Management</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Financial Strength</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Photo Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Know Your Bank</NavLink>
                    </li>
                    </ul>
                </li>

                <li>
                    <NavLink className="nav-link" to="/">Download</NavLink>
                </li>
                <li className="dropdown">
                    <NavLink className="nav-link" to="/">Contact Us</NavLink>
                    <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-link" to="/">Branch Network</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-link" to="/">Feedback</NavLink>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>

        </>
    );
}

export default Nav;
