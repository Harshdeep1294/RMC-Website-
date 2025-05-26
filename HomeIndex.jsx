import React, {useState} from "react";
import './stylesheet/home.css';
import Logo from './images/logo.png';
import { Link } from 'react-router-dom';
import SlideShow from "./SlideShow";

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

    const toggleServiceDropdown = () => {
        setServiceDropdown(!serviceDropdown);
        setFormDropdown(false);
    };
    const toggleFormDropdown = () => {
        setFormDropdown(!formDropdown);
        setServiceDropdown(false);
    };

    return(
        <nav className="navbar">
            <div className="nav-links">
            <Link to="/" className="navText">Home</Link>
                <div className="dropdown">
                    <button onClick={toggleServiceDropdown} className="dropbtn">
                        Services
                    </button>
                    {serviceDropdown && (
                        <div className="dropdown-content">
                            <Link to="/login">Property Tax</Link>
                            <Link to="/login">Water Charges</Link>
                            <Link to="/login">Electricity Charges</Link>
                            <Link to="/login">Vehical Tax</Link>
                            <Link to="/login">E-memo Payment</Link>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <button onClick={toggleFormDropdown} className="dropbtn">
                        Forms
                    </button>
                    {formDropdown && (
                        <div className="dropdown-content">
                            <Link to="/login">Birth Certificate</Link>
                            <Link to="/login">Addhar Card</Link>
                            <Link to="/login">Pan Card</Link>
                            <Link to="/login">Voter ID Card</Link>
                            <Link to="/login">Marriage Certificate</Link>
                            <Link to="/login">Bus Pass</Link>
                        </div>
                    )}
                </div>
                <Link to="/login">Press Release</Link>
                <Link to="/login">Login</Link>
            </div>        
        </nav>
    )
}

const Home = () =>{
    return(
        <div className="container">
            <Header />
            <Navbar />
            <SlideShow />
        </div>
    )
}

export default Home;