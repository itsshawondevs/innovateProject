import React from 'react'
import './analytics.css'

const Analytics = () => {
  return (
    <section id="analytics">
        <div className="container">
            <div className="analytics__heading">
                <h2 className="main__heading analytics__header">Get your free seo analytics</h2>
                <p className="paragraph analytics--paragraph">Paste your website link to get the free 7 days analytics of your website for totaly free</p>
                <form action="" className="banner__form">
                    <div className="banner__input__wrapper">
                        <input className="banner__input" placeholder="paste your website links"/>
                        <button className="banner__input__btn" type="submit">analize website</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Analytics