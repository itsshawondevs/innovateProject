import React from 'react'
import './banner.css'
import bannerShape from '../../assets/images/banner_shape.png'
import bannerShape1 from '../../assets/images/banner-shape1.png'
import bannerShape2 from '../../assets/images/banner-shape2.png'
import bannerShape3 from '../../assets/images/banner-shape3.png'
import bannerCircleShape from '../../assets/images/banner-circle-shape.png'
import bannerLogo1 from '../../assets/images/banner-logo1.png'
import bannerLogo2 from '../../assets/images/banner-logo2.png'
import bannerLogo3 from '../../assets/images/banner-logo3.png'
import bannerLogo4 from '../../assets/images/banner-logo4.png'

const Banner = () => {
  return (
    <section id="banner">
    <div className="container">
        <div className="banner__area">
            <div className="banner__group">
                <div className="banner__btn">
                    <a href="#" className="banner__btn__item">seo</a>
                    <a href="#" className="banner__btn__item">smm</a>
                    <a href="#" className="banner__btn__item">cro</a>
                </div>
                <div className="banner__content">
                    <h1 className="banner__heading">Guaranteed increase of your website sales</h1>
                    <p className="paragraph paragraph--width">With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</p>
                    <form action="" className="banner__form">
                        <div className="banner__input__wrapper">
                            <input className="banner__input" placeholder="paste your website links"/>
                            <button className="banner__input__btn" type="submit">analize website</button>
                        </div>
                    </form>
                    <div className="banner__logo__area">
                        <div className="banner__logo1">
                            <a href="#">
                                <img src={bannerLogo1} alt="not found"/>
                            </a>
                        </div>
                        <div className="banner__logo2">
                            <a href="#">
                                <img src={bannerLogo2} alt="not found"/>
                            </a>
                        </div>
                        <div className="banner__logo3">
                            <a href="#">
                                <img src={bannerLogo3} alt="not found"/>
                            </a>
                        </div>
                        <div className="banner__logo4">
                            <a href="#">
                                <img src={bannerLogo4} alt="not found"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__shape">
                <img src={bannerShape} alt="not found"/>
            </div>
        </div>
    </div>
    <div className="banner__all__shape">
        <div className="banner__circle__shape">
            <img src={bannerCircleShape} alt=""/>
        </div>
        <div className="banner__shape1">
            <img src={bannerShape1} alt="not found"/>
        </div>
        <div className="banner__shape2">
            <img src={bannerShape2} alt="not found"/>
        </div>
        <div className="banner__shape3">
            <img src={bannerShape3} alt="not found"/>
        </div>
    </div>
</section>
  )
}

export default Banner