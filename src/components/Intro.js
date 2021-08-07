import React from 'react'
import {ProductImage, plainText} from '../store/db';
function Intro() {
    const ProductScreen = () => {
        return (
            <>
            {ProductImage.map((image,key) => {
                return(
                <div key={key} className={`product-screen-${key+1} wow fadeInUp`} data-wow-delay="0.4s" data-wow-duration="0.6s">
                    <img src={image}  alt=""/>
                </div>
                )
            })}
            </>
        )
    }
    return (
        <section id="intro">
            <div className="intro-text">
            <h2>Welcome to ReactJS</h2>
            <p>{plainText[2]}</p>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
            <div className="product-screens">
            <ProductScreen />
            </div>
        </section>
    )
}

export default Intro
