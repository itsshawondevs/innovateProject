import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav id="nav">
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <picture>
                        <a href="#">
                            <img src="./images/logo.png" alt="not found"/>
                        </a>
                    </picture>
                </div>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">about</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">service <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown">
                                <li className="dropdown__list">
                                    <a href="#" className="dropdown__text">service1</a>
                                </li>
                                <li className="dropdown__list">
                                    <a href="#" className="dropdown__text">service2</a>
                                </li>
                                <li className="dropdown__list">
                                    <a href="#" className="dropdown__text">service3</a>
                                </li>
                                <li className="dropdown__list">
                                    <a href="#" className="dropdown__text">service4</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">portfolio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">price</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">blog</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__btn">
                    <a href="#" className="common__btn common__btn--color">contact us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav