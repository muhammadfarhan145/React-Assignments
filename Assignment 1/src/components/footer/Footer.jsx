import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='footerSectionContainer'>
            <section className="footerSections">
                <h2 className='sectionTitle'>Company</h2>
                <ul className='navbar-nav footer_Ul'>
                    <li className='nav-item'>
                        <a className='nav-link'>About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Blog</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Services</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>FAQs</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Terms</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Contact Us</a>
                    </li>
                </ul>
            </section>
            <section className="footerSections">
                <h2 className='sectionTitle'>Quick Links</h2>
                <ul className='navbar-nav footer_Ul'>
                    <li className='nav-item'>
                        <a className='nav-link'>Get in Touch</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Help Center</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Live Chat</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>How it works</a>
                    </li>
                </ul>
            </section>
            <section className="footerSections">
                <h2 className='sectionTitle'>Our Brands</h2>
                <ul className='navbar-nav footer_Ul'>
                    <li className='nav-item'>
                        <a className='nav-link'>Toyota</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Porsche</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Audi</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>BMW</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Ford</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Nissan</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Peugeot</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Volkswagen</a>
                    </li>
                </ul>
            </section>
            <section className="footerSections">
                <h2 className='sectionTitle'>Vehicles Type</h2>
                <ul className='navbar-nav footer_Ul'>
                    <li className='nav-item'>
                        <a className='nav-link'>Sedan</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Hatchback</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>SUV</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Hybrid</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Electric</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Coupe</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Truck</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Convertible</a>
                    </li>
                </ul>
            </section>
            <section className="footerSections">
                <h2 className='sectionTitle'>Sale Hours</h2>
                <ul className='navbar-nav mb-3 footer_Ul'>
                    <li className='nav-item'>
                        <a className='nav-link'>Monday - Friday: 09:00 AM - 09:00 PM</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Saturday: 09:00 AM - 07:00 PM</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Sunday: Closed</a>
                    </li>
                </ul>
                <h2 className='sectionTitle'>Connect With Us</h2>
                <ul className='footerSocialIcons'>
                    <li className='nav-item'>
                        <a className='nav-link'><i className="fa-brands fa-facebook-f fa-lg"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'><i className="fa-brands fa-twitter fa-lg"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'><i className="fa-brands fa-instagram fa-lg"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
                    </li>
                </ul>
            </section>

        </div>
    </footer>
  )
}

export default Footer


