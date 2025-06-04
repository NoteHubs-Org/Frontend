import React, { useState } from 'react'
import { login } from '../utils/authAPI';
import "./auth.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChnge = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await login(form);
            if (response.status === 200) {
                console.log("Login successful", response.data);
                alert("Login successful");
                navigate("/"); // Redirect to dashboard or home page
            } else {
                console.error("Login failed", response.data);
                alert("Login failed. Please check your credentials and try again.");
            }
        } catch (error) {
           console.error("Login error", error);
           alert("Logging in failed. Please try again");
        }
    }
    return (
    <div className="login-container" onSubmit={handleSubmit}>
        <div className="login-header">
            <div className="logo-container">
                <div className="logo">👥</div>
            </div>
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your account</p>
            <div className="university-badge">Student Portal</div>
        </div>
        
        <form className="login-form" id="loginForm">
            <div className="form-group">
                <label className="form-label" for="email">Email Address</label>
                <input type="email" id="email" onChange={handleChnge} name='email' className="form-input" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
                <label className="form-label" for="password">Password</label>
                <div className="password-container">
                    <input type="password" id="password" name='password' onChange={handleChnge} className="form-input" placeholder="Enter your password" required />
                    <button type="button" className="password-toggle" id="passwordToggle">👁️</button>
                </div>
            </div>

            <div className="form-options">
                <div className="remember-me">
                    <div className="checkbox" id="rememberCheckbox">✓</div>
                    <label className="checkbox-label" for="rememberCheckbox">Remember me</label>
                </div>
                <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
            
            <button type="submit" className="login-btn">Sign In</button>
            <div className="signup-link">
                Don't have an account? <a href="/signup" id="signupLink">Sign up here</a>
            </div>

            {/* <div className="divider">
                <span>or continue with</span>
            </div> */}
            
        </form>
    </div>
  )
}

export default Login