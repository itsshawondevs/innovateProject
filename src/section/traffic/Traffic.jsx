import React from 'react'
import './traffic.css'
import trafficImg from '../../assets/images/traffic-img.png'
import trafficLoadImg1 from '../../assets/images/traffic-load1.png'
import trafficLoadImg2 from '../../assets/images/traffic-load2.png'
import trafficLoadImg3 from '../../assets/images/traffic-load3.png'

const Traffic = () => {
  return (
    <section id="traffic">
        <div className="container">
            <div className="traffic__wrapper">
                <div className="traffic__content">
                    <h4 className="sub__heading heading--align">Core feature </h4>
                    <h2 className="main__heading">Get more traffic</h2>
                    <p className="paragraph">With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process</p>
                    <div className="traffic__images">
                        <div className="traffic__img">
                            <img src={trafficLoadImg1} alt="#"/>
                        </div>
                        <div className="traffic__img">
                            <img src={trafficLoadImg2} alt="#"/>
                        </div>
                        <div className="traffic__img">
                            <img src={trafficLoadImg3} alt="#"/>
                        </div>
                    </div>
                </div>
                <div className="traffic__right__img">
                    <img src={trafficImg} alt="not found"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Traffic