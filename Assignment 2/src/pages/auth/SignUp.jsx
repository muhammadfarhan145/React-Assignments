import React, { useState, useEffect } from 'react'
import "./SignUp.css";
import { Link } from 'react-router-dom'
import SignUpImg from "../../../public/assets/signUp-image.jpeg";
import { supabase } from '../../../src/supabaseClient.js'; 
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        const formValidations = [email, password, phone, firstName, lastName, passwordConfirm]

        if(!formValidations){
        alert("Fill all fields");
        return;
        }

        if (password < 6) {
        alert("Password Must be 6+ Characters")
        return;
        }

        if(password !== passwordConfirm){
            alert("Password do not match");
            return;
        }

        const fullName = `${firstName} ${lastName}`;

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    fullName: fullName,
                    phone: phone,
                    firstName: firstName,
                    lastName: lastName,
                }
            }
        })

        if(error) {
            console.error(error.message);
            return;
        }

        console.log(data);
        setTimeout(() => {
            navigate("/");
        }, 900);
    }

  return (
    <div className="signup-container">
        <div className="row g-0">
            <div className="col-lg-7">
                <div className="signup-form-container" data-aos="fade-right">
                    <div className="text-center mb-4">
                        <div className="signup-logo text-primary">
                            <i className="fas fa-graduation-cap text-primary"></i> EduLearn
                        </div>
                        <p className="text-muted">Create your account and start learning</p>
                    </div>

                    <form id="form" onSubmit={registerUser}>
                        <div className="row">
                            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="200">
                                <label className="form-label fw-semibold">First Name</label>
                                <input type="text" className="form-control" id="firstNameInput" placeholder="Enter You First Name" required onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                            </div>
                            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="200">
                                <label className="form-label fw-semibold">Last Name</label>
                                <input type="text" className="form-control" id="lastNameInput" placeholder="Enter Your Last Name" required onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                            </div>
                        </div>

                        <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
                            <label className="form-label fw-semibold">Email Address</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white"><i className="fas fa-envelope text-muted"></i></span>
                                <input type="email" className="form-control" id="emailInput" placeholder="Enter Your Email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
                            </div>
                        </div>

                        <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
                            <label className="form-label fw-semibold">Phone Number</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white"><i className="fas fa-phone text-muted"></i></span>
                                <input type="tel" className="form-control" id="phoneInput" placeholder="Enter Your Phone Number" minLength={11} maxLength={11} required onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
                                <label className="form-label fw-semibold">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white"><i className="fas fa-lock text-muted"></i></span>
                                    <input type="password" className="form-control" id="passInput" placeholder="••••••••" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="500">
                                <label className="form-label fw-semibold">Confirm Password</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white"><i className="fas fa-lock text-muted"></i></span>
                                    <input type="password" className="form-control" id="confirmPassInput" placeholder="••••••••" required onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm}></input>
                                </div>
                            </div>
                        </div>

                        <button type="submit" id="signUpBtn" className="btn btn-primary btn-signup w-100 mb-3" data-aos="fade-up" data-aos-delay="700">
                            <i className="fas fa-user-plus me-2"></i>Create Account
                        </button>

                        <div className="text-center mt-3" data-aos="fade-up" data-aos-delay="800">
                            <p className="text-muted">Already have an account? <Link to="/" className="text-decoration-none fw-semibold">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
                <div className="signup-image" data-aos="fade-left" style={{backgroundImage: `url(${SignUpImg})`, backgroundSize: "cover", backgroundPosition:"center"}}>
                    <div className="d-flex align-items-center justify-content-center h-100 position-relative" style={{ziIndex: 1}}>
                        <div className="text-center text-white p-4">
                            <i className="fas fa-book-reader fa-5x mb-4" data-aos="zoom-in" data-aos-delay="200"></i>
                            <h2 className="fw-bold mb-3 text-white" data-aos="fade-up" data-aos-delay="300">Join Our Community</h2>
                            <p className="fs-6 mb-4" data-aos="fade-up" data-aos-delay="400">Over 10,000+ students are already learning with us</p>
                            <div className="d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="500">
                                <div className="text-center">
                                    <h3 className="fw-bold">500+</h3>
                                    <small>Courses</small>
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">100+</h3>
                                    <small>Teachers</small>
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">10k+</h3>
                                    <small>Students</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp