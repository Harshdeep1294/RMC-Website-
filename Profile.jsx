import React from "react";
import './stylesheet/profile.css'
import Navbar from "./NavBar";

const Profile = () =>{
    return(
        <div>
        <Navbar />
        <div className="profilediv">
            <div className="profilesubdiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" />
                <button>Update</button>
                <button>Remove</button>
            </div>
            <form className="profileform">
                <div>
                    <div className="lablediv">
                        <label htmlFor="">Name:</label>
                        <input 
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="lablediv">
                        <label htmlFor="">Email:</label>
                        <input 
                            type="email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="lablediv">
                        <label htmlFor="">Phone no.:</label>
                        <input 
                            type="number"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="lablediv">
                        <label htmlFor="">Address:</label>
                        <input 
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                </div>
                <button type="submit" className="profilebtn">Login</button>
            </form>
        </div>
        </div>
    );
}

export default Profile;