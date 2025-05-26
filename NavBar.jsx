import React, { useState } from "react";import './stylesheet/home.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.png';

const Header = () =>{
    return(
        <div className="header">
            <img src={Logo} alt="Icon" className="logo"/>
            <h1 className="headerText">RMC Sewa</h1>
        </div>
    )
}

const Navbar = () =>{
    const [serviceDropdown, setServiceDropdown] = useState(false);
    const [formDropdown, setFormDropdown] = useState(false);
    const [yojanaDropdown, setYojanaDropdown] = useState(false);

    const toggleServiceDropdown = () => {
        setServiceDropdown(!serviceDropdown);
        setFormDropdown(false);
        setYojanaDropdown(false);
    };
    const toggleFormDropdown = () => {
        setFormDropdown(!formDropdown);
        setServiceDropdown(false);
        setYojanaDropdown(false);
    };

    return(
        <div>
            <Header />
            <nav className="navbar">
            <div className="nav-links">
                <Link to="/home" className="navText">Home</Link>
                <div className="dropdown">
                    <button onClick={toggleServiceDropdown} className="dropbtn">
                        Services
                    </button>
                    {serviceDropdown && (
                        <div className="dropdown-content">
                            <Link to="/proprtyTax">Property Tax</Link>
                            <Link to="/waterCharges">Water Charges</Link>
                            <Link to="/electricityCharges">Electricity Charges</Link>
                            <Link to="/vehicalTax">Vehical Tax</Link>
                            <Link to="/ememoPayment">E-memo Payment</Link>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <button onClick={toggleFormDropdown} className="dropbtn">
                        Forms
                    </button>
                    {formDropdown && (
                        <div className="dropdown-content">
                            <Link to="/birthCertificate">Birth Certificate</Link>
                            <Link to="/aadhaar">Addhar Card</Link>
                            <Link to="/pan">Pan Card</Link>
                            <Link to="/voterId">Voter ID Card</Link>
                            <Link to="/marraigeCertificate">Marriage Certificate</Link>
                            <Link to="/busPass">Bus Pass</Link>
                        </div>
                    )}
                </div>
                <Link to="/press">Press Release</Link>
                <Link to="/profile">profile</Link>
            </div>        
        </nav>
        </div>
    )
}

export default Navbar;