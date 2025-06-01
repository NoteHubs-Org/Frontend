import React from 'react'

const Login = () => {
  return (
    <div className="login-container">
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
                <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
                <label className="form-label" for="password">Password</label>
                <div className="password-container">
                    <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
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

            <div className="divider">
                <span>or continue with</span>
            </div>
            
            <div className="social-login">
                <button type="button" className="social-btn" title="Google">🌐</button>
                <button type="button" className="social-btn" title="Microsoft">🏢</button>
                <button type="button" className="social-btn" title="Apple">🍎</button>
            </div>
            
            <div className="signup-link">
                Don't have an account? <a href="#" id="signupLink">Sign up here</a>
            </div>
        </form>
    </div>
  )
}

export default Login