import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id="footer_area">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_left_content">
                    <div className="footer_logo">
                        <a href="#"><img src="./images/footer-logo.png" alt="not found"/></a>
                    </div>
                    <div className="footer_paragraph">
                        <p className="paragraph footer--paragraph">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    </div>
                </div>
                <div className="footer_right_content">
                    <div className="right_content">
                        <div className="content_header">
                            <h2 className="content_heading">features</h2>
                            <div className="features_item">
                                <ul className="content__list">
                                    <li>
                                        <a href="#" className="text__link">home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text__link">about</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text__link">benefit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text__link">pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text__link">blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_header">
                            <h2 className="content_heading">products</h2>
                                <ul className="content__list">
                                    <li>
                                        <a href="#" className="text__link">Task Management</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text__link">Company Growth</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text__link">Time Tracking</a>
                                    </li>
                                </ul>
                        </div>
                        <div className="content_header">
                            <h2 className="content_heading">support</h2>
                            <ul className="content__list">
                                <li>
                                    <a href="#" className="text__link">Customer Service</a>
                                </li>
                                <li>
                                    <a href="#" className="text__link">Accessibility</a>
                                </li>
                                <li>
                                    <a href="#" className="text__link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom_text">
                <div className="footer_text">
                    <a className="paragraph paragraph--modify" href="#">@20201 Innovate.All rights reserved.</a>
                </div>
                <div className="footer_privacy">
                    <a className="paragraph paragraph--modify" href="#">privacy policy</a>
                    <a className="paragraph paragraph--modify" href="#">terms & condition</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer