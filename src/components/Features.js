import React from 'react'
import { images, plainText } from '../store/db'

function Features() {
  const IList = (props) =>{
    return(
      <div className="col-lg-6 col-md-6 box wow fadeInRight">
        <div className="icon"><i className={props.class}></i></div>
        <h4 className="title"><a href="">{props.title}</a></h4>
        <p className="description">{props.description}</p>
      </div>
    )
  }
  const AdvFeatureList = (props) => {
    return(<>
      <i className={`${props.class} wow fadeInRight`} data-wow-duration="0.5s"></i>
      <p className="wow fadeInRight" data-wow-duration="0.5s">{props.description}</p>
    </>
    )
  }
  const FeatureContainer = (props) => {
    return(
      <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {props.children}
         </div>
        </div>
        </div>
      </>
    )
  }
    return (
        <>
        <section id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <div className="section-header wow fadeIn" data-wow-duration="1s">
                  <h3 className="section-title">Product Featuress</h3>
                  <span className="section-divider"></span>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 features-img">
                <img src={images[1]} alt="" className="wow fadeInLeft" />
              </div>

              <div className="col-lg-8 col-md-7 ">
                <div className="row">
                  <IList class="ion-ios-speedometer-outline" title="Lorem Ipsum" description={plainText[7]}/>
                  <IList class="ion-ios-flask-outline" title="Dolor Sitema" description={plainText[8]}/>
                  <IList class="ion-social-buffer-outline" title="Sed ut perspiciatis" description={plainText[9]}/>
                  <IList class="ion-ios-analytics-outline" title="Magni Dolores" description={plainText[10]}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="advanced-features">
        <div className="features-row section-bg">
          <FeatureContainer>
                <img className="advanced-feature-img-right wow fadeInRight" src={images[2]} alt="" />
                <div className="wow fadeInLeft">
                  <h2>{plainText[11]}</h2>
                  <h3>{plainText[12]}</h3>
                  <p>{plainText[13]}</p>
                  <p>{plainText[14]}</p>
                </div>
                </FeatureContainer>
        </div>

        <div className="features-row section-bg">
          <FeatureContainer>
              <img className="advanced-feature-img-left" src={images[3]} alt="" />
              <div className="wow fadeInRight">
                <h2>{plainText[15]}</h2>
                <AdvFeatureList class="ion-ios-paper-outline" description={plainText[16]}/>
                <AdvFeatureList class="ion-ios-color-filter-outline" description={plainText[17]}/>
                <AdvFeatureList class="ion-ios-barcode-outline" description={plainText[18]}/>
              </div>
          </FeatureContainer>
        </div>

        <div className="features-row section-bg">
          <FeatureContainer>
                <img className="advanced-feature-img-right wow fadeInRight" src={images[4]} alt="" />
                <div className="wow fadeInLeft">
                  <h2>{plainText[19]}</h2>
                  <h3>{plainText[20]}</h3>
                  <p>{plainText[21]}</p>
                  <i className="ion-ios-albums-outline"></i>
                  <p>{plainText[22]}</p>
                </div>
              </FeatureContainer>
        </div>
        </section>
        </>
    )
}

export default Features
