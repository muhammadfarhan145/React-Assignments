import React from 'react'
import "./AllCarsSec.css"

const AllCarsSec = () => {
  return (
    <section className="allCarsSection">
      <h1>Explore All Vehicles</h1>
        <ul className="nav nav-underline allCarsSectionTabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Recent Cars</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Featured Cars</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Popular Cars</a>
          </li>
        </ul>
        <div className="allCarsCards">
            <div className='allCarsCard'>
                <img src="../../assets/camryImg.jpeg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Toyota Camry New</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/RangeRover.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Range Rover</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>15 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/TeslaImg.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Tesla Y</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Electric</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/Corolla.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Toyota Corolla</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/chevroletImg.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Chevrolet</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/mustangGT.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Mustang GT</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/MercedesAMG.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Mercedes AMG GTR</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>Automatic</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/jeep.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Ford Jeep 4x4</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Petrol</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>CVT</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
            <div className='allCarsCard'>
                <img src="../../assets/fortuner.jpg" className="allCarsCardImg"></img>
                <div className='allCarsCardContent'>
                  <p className='allCarsCardTitle'>Toyota Fortuner</p>
                  <p className='allCarsCardDesc'>3.5 D5 PowerPulse Momentum 6dr...</p>
                  <hr></hr>
                  <div className='carSpecs'>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gauge-high fa-2s"></i>
                      <p className='carSpecs_P'>20 Miles</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gas-pump fa-2s"></i>
                      <p className='carSpecs_P'>Diesel</p>
                    </div>
                    <div className='carSpec'>
                      <i className="fa-solid fa-gears fa-2s"></i>
                      <p className='carSpecs_P'>CVT</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='carPrice_viewDetail'>
                    <p className='carPrice'>$40,000</p>
                    <p className='carDetailBtn'>View Details <span><i className="fa-solid fa-arrow-down fa-rotate-by" style={{ "--fa-rotate-angle": "220deg" }}></i></span></p>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllCarsSec