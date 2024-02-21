import React from 'react'
import './help.css'
import icon1 from '../../assets/images/help-icon1.png'
import icon2 from '../../assets/images/help-icon2.png'
import icon3 from '../../assets/images/help-icon3.png'
import icon4 from '../../assets/images/help-icon2.png'
import image from '../../assets/images/help-img.png'


const Help = () => {
  return (
    <section id="help__area">
        <div className="container">
            <div className="help__area__header">
                <h4 className="sub__heading">Our process</h4>
                <h2 className="main__heading heading--center">How can we help?</h2>
            </div>
            <div className="help__item__wrapper">
                <div className="help__item">
                    <div className="help__icon">
                        <img src={icon1} alt="not found"/>
                    </div>
                    <h4 className="sub__heading heading--color">Real time analytics</h4>
                </div>
                <div className="help__item">
                    <div className="help__icon">
                        <img src={icon2} alt="not found"/>
                    </div>
                    <h4 className="sub__heading heading--color">Real time analytics</h4>
                </div>
                <div className="help__item">
                    <div className="help__icon">
                        <img src={icon3} alt="not found"/>
                    </div>
                    <h4 className="sub__heading heading--color">Real time analytics</h4>
                </div>
                <div className="help__item">
                    <div className="help__icon">
                        <img src={icon4} alt="not found"/>
                    </div>
                    <h4 className="sub__heading heading--color">Real time analytics</h4>
                </div>
            </div>
            <div className="help__footer">
                <div className="help__img">
                    <img src={image} alt="not found"/>
                </div>
                <div className="help__content">
                    <h3 className="main__heading heading--size">Real time analytics</h3>
                    <p className="paragraph">Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy.</p>
                    <a href="#" className="common__btn btn--modify">Analyze website</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Help