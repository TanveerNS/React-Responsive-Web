import React from 'react'
import {plainText, ulList, images} from '../store/db'
function About() {
  const List = () => {
    return (
      <> {
        ulList[0].listOne.map((list,key)=>{
          return(
            <li key={key}><i className="ion-android-checkmark-circle"></i> 
            {list}</li>
          )
        })
      }  </>
    );
  }
  return (
      <section id="about" className="section-bg">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="section-title">About Us</h3>
            <span className="section-divider"></span>
            <p className="section-description">
              {plainText[0]}<br/>{plainText[1]}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 about-img wow fadeInLeft">
              <img src={images[0]} alt="" />
            </div>
            <div className="col-lg-6 content wow fadeInRight">
              <h2>{plainText[3]}</h2>
              <h3>{plainText[4]}</h3>
              <p> {plainText[5]} </p>
              <ul>
               <List />
              </ul>
              <p>{plainText[6]} </p>
            </div>
          </div>
        </div>
      </section>

    )
}

export default About
