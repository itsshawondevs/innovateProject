import React from 'react'
import './service.css'
import serviceImg from '../../assets/images/service-img.png'
import serviceIcon1 from '../../assets/images/service-icon1.png'
import serviceIcon2 from '../../assets/images/service-icon2.png'
import serviceIcon3 from '../../assets/images/service-icon3.png'

const Service = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="service__heading">
                <h4 className="sub__heading">Core feature</h4>
                <h2 className="main__heading heading--width">Provide awsome service with our tools</h2>
            </div>
            <div className="service__wrapper">
                <div className="service__content">
                    <p className="paragraph service__pera">With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</p>
                    <div className="service__img">
                        <img src={serviceImg} alt="not found"/>
                    </div>
                </div>
                <div className="service__item__wrapper">
                    <div className="service__item">
                        <div className="service__item__wrap">
                            <div className="service__icon">
                                <img src={serviceIcon1} alt="not found"/>
                            </div>
                            <div className="service__item__content">
                                <h3 className="service__item__heading">SEO Consultancy</h3>
                                <p className="paragraph paragraph--color">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                            </div>
                        </div>
                    </div>
                    <div className="service__item">
                        <div className="service__item__wrap">
                            <div className="service__icon">
                                <img src={serviceIcon2} alt="not found"/>
                            </div>
                            <div className="service__item__content">
                                <h3 className="service__item__heading">SEO Consultancy</h3>
                                <p className="paragraph paragraph--color">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                            </div>
                        </div>
                    </div>
                    <div className="service__item">
                        <div className="service__item__wrap">
                            <div className="service__icon">
                                <img src={serviceIcon3} alt="not found"/>
                            </div>
                            <div className="service__item__content">
                                <h3 className="service__item__heading">SEO Consultancy</h3>
                                <p className="paragraph paragraph--color">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service