import React, { useEffect } from 'react'
import { Link } from 'react-router-dom' 
import "./Error404.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Error404 = () => {
    useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: true
        })
    })
  return (
    <div className="not-found-container">
        <h1 className="error-code" data-aos="fade-down" data-aos-delay="200">404</h1>
        
        <h2 className="error-title" data-aos="fade-down" data-aos-delay="400">
            Oops! Page Not Found
        </h2>
        
        <p className="error-description" data-aos="fade-up" data-aos-delay="600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div data-aos="fade-up" data-aos-delay="800">
            <Link to="/home" className="btn m-3 btn-warning btn-home">
                Go Back Home
            </Link>
            <Link to="/home" className="btn-secondary-link m-3 btn btn-danger">Contact Support</Link>
        </div>

        <div style={{marginTop: "3rem", color: "rgba(255, 255, 255, 0.7)"}} data-aos="fade-up" data-aos-delay="1000">
            <p style={{fontSize: "0.9rem"}}>
                Error Code: 404 | Need help? 
                <a href="#" style={{color: "white", textDecoration: "underline"}}>Visit our help center</a>
            </p>
        </div>
    </div>
  )
}

export default Error404 
   
   
   
   
