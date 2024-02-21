import React from 'react'
import './studies.css'
import image1 from '../../assets/images/studies-img1.jpg'
import image2 from '../../assets/images/studies-img2.jpg'
import image3 from '../../assets/images/studies-img3.jpg'

const Studies = () => {
  return (
    <section id="studies">
    <div className="container">
        <div className="studies__header">
            <div className="studies__heading">
                <h4 className="sub__heading heading--align">Our works</h4>
                <h2 className="main__heading">Our case studies</h2>
            </div>
            <div className="studies__btn">
                <a href="#" className="common__btn btn--border">view all</a>
            </div>
        </div>
        <div className="studies__item__wrapper">
            <div className="studies__item">
                <div className="studies__img">
                    <img src={image1} alt="not found"/>
                    <h3 className="main__heading heading--weight">Search marketer</h3>
                    <p className="paragraph studies--paragraph">Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
                </div>
            </div>
            <div className="studies__item">
                <div className="studies__img">
                    <img src={image2} alt="not found"/>
                    <h3 className="main__heading heading--weight">Search marketer</h3>
                    <p className="paragraph studies--paragraph">Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
                </div>
            </div>
            <div className="studies__item">
                <div className="studies__img">
                    <img src={image3} alt="not found"/>
                    <h3 className="main__heading heading--weight">Search marketer</h3>
                    <p className="paragraph studies--paragraph">Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Studies