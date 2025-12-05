import React, { useEffect, useRef } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { supabase } from '../supabaseClient.js'; 
import homeHeroImage from "../../public/assets/homeHero-image.jpeg"

const Home = () => {
  const navigate = useNavigate();
  const signOutButtonRef = useRef(null);
  
  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
  
    if (!session) {     
      navigate("/");
    }
  };

    const navbarSignOut = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        await supabase.auth.signOut();
        alert("Sign Out Successfully!");
        signOutButtonRef.current.textContent = "Login";
        navigate("/");
        }
      } 

    useEffect(() => {
      checkUser();
      }, [])


  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
            <Link className="navbar-brand" to="/home">
                <i className="fas fa-graduation-cap"></i> EduLearn
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Teachers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-login ms-3 text-white" onClick={navbarSignOut} ref={signOutButtonRef}>Sign Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section className="hero-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <h1 className="hero-title">Learn Without Limits</h1>
                    <p className="hero-subtitle">Start, switch, or advance your career with thousands of courses, hands-on projects, and certificate programs.</p>
                    <div>
                        <Link to="#courses" className="btn btn-hero btn-hero-primary">
                            <i className="fas fa-play-circle me-2"></i>Start Learning
                        </Link>
                        <Link to="/home" className="btn btn-hero btn-hero-secondary">
                            <i className="fas fa-info-circle me-2"></i>Learn More
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src={homeHeroImage} alt="Learning" className="hero-image"></img>
                </div>
            </div>
        </div>
    </section>

    <section className="features-section" id="features">
        <div className="container">
            <div className="text-center" data-aos="fade-up">
                <h2 className="section-title">Why Choose EduLearn?</h2>
                <p className="section-subtitle">Discover the benefits of learning with us</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-card">
                        <div className="feature-icon" style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white"}}>
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <h4>Expert Teachers</h4>
                        <p className="text-muted">Learn from industry experts with years of teaching experience and real-world knowledge.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card">
                        <div className="feature-icon" style={{background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white"}}>
                            <i className="fas fa-video"></i>
                        </div>
                        <h4>HD Video Lessons</h4>
                        <p className="text-muted">Access high-quality video content anytime, anywhere on any device you prefer.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-card">
                        <div className="feature-icon" style={{background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white"}}>
                            <i className="fas fa-certificate"></i>
                        </div>
                        <h4>Certification</h4>
                        <p className="text-muted">Earn recognized certificates upon course completion to boost your career prospects.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-card">
                        <div className="feature-icon" style={{background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", color: "white"}}>
                            <i className="fas fa-clock"></i>
                        </div>
                        <h4>Flexible Learning</h4>
                        <p className="text-muted">Study at your own pace with lifetime access to all course materials and resources.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card">
                        <div className="feature-icon" style={{background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", color: "white"}}>
                            <i className="fas fa-users"></i>
                        </div>
                        <h4>Community Support</h4>
                        <p className="text-muted">Join a vibrant community of learners and get support whenever you need it.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-card">
                        <div className="feature-icon" style={{background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", color: "white"}}>
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h4>Mobile Learning</h4>
                        <p className="text-muted">Access courses on mobile, tablet, or desktop with our responsive platform.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="stats-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="100">
                    <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Online Courses</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="stat-item">
                        <div className="stat-number">10K+</div>
                        <div className="stat-label">Active Students</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="300">
                    <div className="stat-item">
                        <div className="stat-number">150+</div>
                        <div className="stat-label">Expert Teachers</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="400">
                    <div className="stat-item">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Success Rate</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="courses-section" id="courses">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="section-title text-white">Popular Courses</h2>
                <p className="section-subtitle text-white">Explore our most popular courses and start learning today</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="course-card">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" alt="Web Development" className="course-img"></img>
                        <div className="course-content">
                            <span className="course-badge">Development</span>
                            <h5 className="fw-bold mb-2">Complete Web Development Bootcamp</h5>
                            <p className="text-muted small mb-3">Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <i className="fas fa-star text-warning"></i>
                                    <span className="fw-semibold">4.8</span>
                                    <span className="text-muted small">(2.5k)</span>
                                </div>
                                <div>
                                    <i className="fas fa-users text-primary"></i>
                                    <span className="fw-semibold">5,200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="course-card">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" alt="Data Science" className="course-img"></img>
                        <div className="course-content">
                            <span className="course-badge">Data Science</span>
                            <h5 className="fw-bold mb-2">Data Science & Machine Learning</h5>
                            <p className="text-muted small mb-3">Master Python, statistics, and ML algorithms to become a data scientist.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <i className="fas fa-star text-warning"></i>
                                    <span className="fw-semibold">4.9</span>
                                    <span className="text-muted small">(3.2k)</span>
                                </div>
                                <div>
                                    <i className="fas fa-users text-primary"></i>
                                    <span className="fw-semibold">4,800</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="course-card">
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600" alt="Digital Marketing" className="course-img"></img>
                        <div className="course-content">
                            <span className="course-badge">Marketing</span>
                            <h5 className="fw-bold mb-2">Digital Marketing MasterclassName</h5>
                            <p className="text-muted small mb-3">Learn SEO, social media, content marketing, and grow your business online.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <i className="fas fa-star text-warning"></i>
                                    <span className="fw-semibold">4.7</span>
                                    <span className="text-muted small">(1.8k)</span>
                                </div>
                                <div>
                                    <i className="fas fa-users text-primary"></i>
                                    <span className="fw-semibold">3,500</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="cta-content">
            <div className="container">
                <div data-aos="zoom-in">
                    <h2 className="display-4 fw-bold mb-4">Ready to Start Your Learning Journey?</h2>
                    <p className="fs-5 mb-5">Join thousands of students and unlock your potential today</p>
                    <Link to="signup.html" className="btn btn-hero btn-hero-primary btn-lg">
                        <i className="fas fa-rocket me-2"></i>Get Started Now
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <h3 className="mb-4"><i className="fas fa-graduation-cap"></i> EduLearn</h3>
                    <p className="text-white">Empowering learners worldwide with quality education and expert guidance.</p>
                    <div className="mt-4">
                        <Link to="#" className="text-white me-3 fs-5"><i className="fab fa-facebook"></i></Link>
                        <Link to="#" className="text-white me-3 fs-5"><i className="fab fa-twitter"></i></Link>
                        <Link to="#" className="text-white me-3 fs-5"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" className="text-white fs-5"><i className="fab fa-linkedin"></i></Link>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5 className="mb-4">Quick Links</h5>
                    <div className="footer-links">
                        <Link to="home.html">Home</Link>
                        <Link to="about.html">About Us</Link>
                        <Link to="teachers.html">Teachers</Link>
                        <Link to="contact.html">Contact</Link>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5 className="mb-4">Courses</h5>
                    <div className="footer-links">
                        <Link to="#">Development</Link>
                        <Link to="#">Design</Link>
                        <Link to="#">Marketing</Link>
                        <Link to="#">Business</Link>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <h5 className="mb-4">Newsletter</h5>
                    <p className="text-white">Subscribe to get the latest updates and offers.</p>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Your email"></input>
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="my-4" style={{opacity: "0.1"}} />
            <div className="text-center">
                <p className="text-white mb-0">&copy; 2025 EduLearn. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Home