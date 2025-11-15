import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
        <nav id="navbar" className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="container NavlogoDiv">
                    <img src="../../assets/logo.png" className="NavLogo"></img>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#'>About</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#'>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#'>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link loginNav' href='#'>Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header