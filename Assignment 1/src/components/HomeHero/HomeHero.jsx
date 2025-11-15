import React from 'react'
import "./HomeHero.css"

const HeroBanner = () => {
  return (
    <section className="heroBanner">
        <img src="../../assets/headerImg.jpg" className="heroBannerImg"></img>
        <div className="heroBannerContent">
            <h1 className="heroBannerH1">Drive Your Dream. Today.</h1>
            <p className="heroBannerP">Discover the latest luxury, performance, and electric cars — built for speed, comfort, and style.</p>
             <a href="#" className="heroBanner_a">
             <button className="heroBannerButton">
                    Book a Test Drive
                </button>
            </a>
        </div>
    </section>
  )
}

export default HeroBanner


