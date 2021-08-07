import React from 'react'
import { plainText } from '../store/db'

function ExtraFeature() {
    const ExtraFet = (props) => {
        return(
            <div className="col-lg-6">
                <div className={`box wow ${props.class}`}>
                <div className="icon"><i className={props.icon}></i></div>
                <h4 className="title"><a href="">{props.title}</a></h4>
                <p className="description">{props.desc}</p>
                </div>
            </div>
        )
    }
    return (
        <section id="more-features" className="section-bg">
        <div className="container">
            <div className="section-header">
            <h3 className="section-title">More Features</h3>
            <span className="section-divider"></span>
            <p className="section-description">{plainText[27]}</p>
            </div>
            <div className="row">
                <ExtraFet icon="ion-ios-stopwatch-outline" class="fadeInLeft" desc={plainText[23]} title="Lorem Ipsum"/>
                <ExtraFet icon="ion-ios-bookmarks-outline" class="fadeInRight" desc={plainText[24]} title="Dolor Sitema" />
                <ExtraFet icon="ion-ios-heart-outline" class="fadeInLeft" desc={plainText[25]} title="Sed ut perspiciatis"/>
                <ExtraFet icon="ion-ios-analytics-outlinee" class="fadeInRight" desc={plainText[26]} title="Magni Dolores" />

            </div>
        </div>
        </section>
    )
}

export default ExtraFeature
