import React, { useState } from "react";
import { database } from "../firebase";
import { ref, set, push } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';
import './stylesheet/login.css';
import Background from './images/WhatsApp Image 2024-10-02 at 8.15.02 PM.jpeg'

const Signup = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usersRef = ref(database, "users");

        try {
            const newUserRef = push(usersRef);
            await set(newUserRef, {
                email: email,
                password: password,
                confirmpassword: confirmPassword
            });
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate('/login');
        } catch (error) {
            
        }
    };

    return (
        <div class="login">
            <img src={Background} alt="image" className="login__bg" />
            <form className="login__form">
                <h1 className="login__title">Login</h1>
                <div className="login__inputs">
                    <div class="login__box">
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            placeholder="Email"
                            className="login__input" />
                        <i className="ri-mail-fill"></i>
                    </div>

                    <div class="login__box">
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            placeholder="Password"
                            className="login__input" />
                        <i className="ri-lock-2-fill"></i>
                    </div>

                    <div class="login__box">
                        <input 
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                            placeholder="Password"
                            className="login__input" />
                        <i className="ri-lock-2-fill"></i>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="login__button">Login</button>
                <div className="login__register">
                    Alerady have an account? 
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;