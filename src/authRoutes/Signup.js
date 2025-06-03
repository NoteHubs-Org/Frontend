import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./auth.css"
import { signup } from '../utils/authAPI';

const SignUp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        studentId: "",
        university: "",
        course: "",
        password: "",
    });

    const handleChnge = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        
        try {
            const res = await signup(form);
            navigate("/login")
        } catch (error) {
           console.error("Sign error", error)
           alert("Sign up failed. Please try again") 
        }
    }
    return (
        <div className="signup-container">
            <div className="signup-header">
                <div className="logo-container">
                    <div className="logo">🎓</div>
                </div>
                <h1 className="signup-title">Join NoteHubs</h1>
                <p className="signup-subtitle">Create your account to get started</p>
                <div className="university-badge">Student Registration</div>
            </div>
            
            <form onSubmit={handleSubmit} className="signup-form" id="signupForm">
                <div className="success-message" id="successMessage">
                    Account created successfully! Please check your email.
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label" for="firstName">First Name</label>
                        <input type="text" id="firstName" className="form-input" placeholder="John" onChange={handleChnge} value={form.firstName} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="lastName">Last Name</label>
                        <input type="text" id="lastName" className="form-input" placeholder="Doe" onChange={handleChnge} value={form.lastName} required />
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="form-label" for="email">Email Address</label>
                    <input type="email" id="email" className="form-input" placeholder="john.doe@university.edu" onChange={handleChnge} value={form.email}  required />
                </div>

                <div className="form-group">
                    <label className="form-label" for="studentId">Student ID</label>
                    <input type="text" id="studentId" className="form-input" onChange={handleChnge} value={form.studentId}  placeholder="ST123456" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label" for="university">University</label>
                        <select id="university" className="form-select" onChange={handleChnge} value={form.university} >
                            <option value="">Select University</option>
                            <option value="mtu">Mt. Kenya University</option>
                            <option value="ku">Kenyatta University</option>
                            <option value="uon">University of Nairobi</option>
                            <option value="jkuat">JKUAT</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="course">Course/Program</label>
                        <input type="text" id="course" className="form-input" placeholder="e.g. Computer Science" onChange={handleChnge} value={form.course}  />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" for="password">Password</label>
                    <input type="password" id="password" className="form-input" placeholder="Create a password" required />
                </div>

                <div className="form-group">
                    <label className="form-label" for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="form-input" onChange={handleChnge} value={form.password}  placeholder="Re-enter your password" required />
                </div>

                <button type="submit" className="signup-btn">Sign Up</button>

                <div className="login-link">
                    Already have an account? <a href="/login" id="loginLink">Log in here</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp