import React, { useState, useEffect } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { supabase } from '../../../src/supabaseClient.js'; 
import studentIcon from "../../../public/assets/studentIcon.png";
import LoginImg from "../../../public/assets/login-image.jpeg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [role, setRole] = useState("student");
    const navigate = useNavigate();

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
            const { data, error } = await supabase.auth.getUser();

            if (error || !data?.user) {
            return;
            }
            
            navigate("/home");
        }
    };

    checkUser();

    const loginUser = async (e) => {
        e.preventDefault();

        if(!email || !password){
        setMessage("Fill all fields");
        return;
        }

        if (password.length < 6) {
        setMessage("Password Must be 6+ Characters")
        return;
        }

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            setMessage(error.message);
            return;
        } 

        setMessage("Login Successful");
        setTimeout(() => {
            navigate("/home");
        }, 900)
    }


  return (
    <div className="login-container">
        <div className="row g-0">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="login-image" data-aos="fade-right" style={{backgroundImage: `url(${LoginImg})`, backgroundSize: "cover", backgroundPosition:"center"}}>
                    <div className="d-flex align-items-center justify-content-center h-100 position-relative" style={{zIndex: 1}}>
                        <div className="text-center text-white p-5">
                            <i className="fas fa-graduation-cap fa-5x mb-4" data-aos="zoom-in" data-aos-delay="200"></i>
                            <h2 className="fw-bold mb-3 text-white" data-aos="fade-up" data-aos-delay="300">Welcome Back!</h2>
                            <p className="fs-5" data-aos="fade-up" data-aos-delay="400">Continue your learning journey with us</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="login-form-container" data-aos="fade-left">
                    <div className="text-center mb-4">
                        <div className="login-logo text-primary">
                            <i className="fas fa-graduation-cap text-primary"></i> EduLearn
                        </div>
                        <p className="text-muted">Sign in to your account</p>
                    </div>

                    <form className="form" onSubmit={loginUser}>
                        <div className="role-selection" data-aos="fade-up" data-aos-delay="100">
                            <div className={`role-card ${role === "student" ? "active" : ""}`} id="studentRoleCard" onClick={() => setRole("student")}>
                                <img src={studentIcon} className="roleCardImg mb-2"></img>
                                <h6 className="mb-0">Student</h6>
                            </div>
                            <div className={`role-card ${role === "teacher" ? "active" : ""}`} id="teacherRoleCard" onClick={() => setRole("teacher")}>
                                <i className="fas fa-chalkboard-teacher fa-2x text-primary mb-2"></i>
                                <h6 className="mb-0">Teacher</h6>
                            </div>
                        </div>

                        <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
                            <label className="form-label fw-semibold">Email Address</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white"><i className="fas fa-envelope text-muted"></i></span>
                                <input type="email" className="form-control" value={email} placeholder="Enter your email" id="emailInput" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                            <label className="form-label fw-semibold">Password</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white"><i className="fas fa-lock text-muted"></i></span>
                                <input type="password" className="form-control" value={password} placeholder="Enter your password" id="passInput" onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remember"></input>
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <Link to="/forgetpassword" className="text-decoration-none">Forgot Password?</Link>
                        </div>

                        <button type="submit" id="signInBtn" className="btn btn-primary w-100 mb-3 text-white btn-login" data-aos="fade-up" data-aos-delay="400">
                            <i className="fas fa-sign-in-alt me-2"></i>Sign In
                        </button>
                        <p className="text-danger message_P">{message}</p>
                        <div className="text-center mt-4">
                            <p className="text-muted">Don't have an account? <Link to="/signup" className="text-decoration-none fw-semibold">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login