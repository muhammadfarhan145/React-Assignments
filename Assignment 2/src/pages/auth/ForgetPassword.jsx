import React, { useEffect } from 'react'
import { Link } from 'react-router-dom' 
import "./ForgetPassword.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const ForgetPassword = () => {
    useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: true
        })
    })
  return (
    <div className="forgot-password-container">
        <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="card-body">
                <h2 className="text-center" data-aos="fade-down" data-aos-delay="300">Forgot Password?</h2>
                <p className="subtitle text-center" data-aos="fade-down" data-aos-delay="400">
                    No worries, we'll send you reset instructions.
                </p>

                <form data-aos="fade-up" data-aos-delay="500">
                    <div className="mb-4">
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address" required></input>
                    </div>

                    <div className="d-grid mb-4">
                        <button type="submit" className="btn btn-primary">
                            Reset Password
                        </button>
                    </div>

                    <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                        <Link to="/" className="back-to-login">
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword
