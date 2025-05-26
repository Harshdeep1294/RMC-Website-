// src/Login.js
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, get, child } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';
import './stylesheet/login.css';
import Background from './images/WhatsApp Image 2024-10-02 at 8.15.02 PM.jpeg'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const usersRef = ref(database, "users");
            const snapshot = await get(child(usersRef, "/"));

            if (snapshot.exists()) {
                const users = snapshot.val();
                const userKeys = Object.keys(users);
                const user = userKeys.find((key) => {
                    return (
                        users[key].email === email &&
                        users[key].password === password
                    );
                });

                if (user) {
                    alert("Login successful!");
                    setEmail("");
                    setPassword("");
                    navigate('/home');
                } else {
                    alert("Invalid email or password.");
                }
            } else {
                alert("No users found.");
            }
        } catch (error) {
        }
    };

    return (
        <div className="login">
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
                </div>

                <div class="login__check">
                    <div class="login__check-box">
                        <input type="checkbox" className="login__check-input" id="user-check" />
                        <label for="user-check" className="login__check-label">Remember me</label>
                    </div>
                    <a href="#" className="login__forgot">Forgot Password?</a>
                </div>
                <button type="submit" onClick={handleSubmit} className="login__button">Login</button>
                <div className="login__register">
                    Don't have an account? 
                    <Link to="/signup">Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
